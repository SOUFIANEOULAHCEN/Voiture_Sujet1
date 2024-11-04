import React, { useRef, useState } from "react";
import ListeVoitures from "./ListeVoitures";
import Alert from "./Alert";

export default function AjouterVoiture() {
  const [img, setImg] = useState(null);
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const nom = useRef();
  const model = useRef();
  const carburant = useRef();
  const prix = useRef();

  const [carList, setCarList] = useState([
    {
      id: 1,
      nom: "Dacia",
      modele: "Docker",
      carburant: "Gazoil",
      prix: 30,
      image: "dacia.png",
    },
  ]);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMessage(null);

    if (!img) {
      setErrors((prevState) => [...prevState, "Image requise"]);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const nomValue = nom.current.value;
      const modelValue = model.current.value;
      const carburantValue = carburant.current.value;
      const prixValue = prix.current.value;

      let hasErrors = false;

      if (nomValue.trim() === "") {
        setErrors((prevState) => [...prevState, "Nom requis"]);
        hasErrors = true;
      }
      if (modelValue.trim() === "") {
        setErrors((prevState) => [...prevState, "Modèle requis"]);
        hasErrors = true;
      }
      if (carburantValue.trim() === "") {
        setErrors((prevState) => [...prevState, "Carburant requis"]);
        hasErrors = true;
      }
      if (prixValue.trim() === "") {
        setErrors((prevState) => [...prevState, "Prix requis"]);
        hasErrors = true;
      }

      if (hasErrors) return;

      let newCar = {
        id: carList.length + 1,
        nom: nomValue,
        modele: modelValue,
        carburant: carburantValue,
        prix: parseFloat(prixValue),
        image: reader.result,
      };

      setCarList((prev) => [...prev, newCar]);

      nom.current.value = "";
      model.current.value = "";
      carburant.current.value = "";
      prix.current.value = "";
      setImg(null);

      setSuccessMessage('Ajout de la voiture réussi !');
    };

    reader.readAsDataURL(img);
  };

  return (
    <div className="p-6 max-w-[80%] mt-10 mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Gestion des voiture de Location
      </h2>
      
      {errors.length > 0 && (
        <div className="mb-4">
          {errors.map((error, index) => (
            <Alert key={index} message={error} type="error" />
          ))}
        </div>
      )}

      {successMessage && (
        <div className="mb-4">
          <Alert message={successMessage} type="success" />
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <input
          ref={nom}
          type="text"
          placeholder="Nom de la voiture"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          ref={model}
          type="text"
          placeholder="Modèle"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          ref={carburant}
          type="text"
          placeholder="Carburant"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          ref={prix}
          type="number"
          placeholder="Prix"
          className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          className="py-3 px-2 border border-gray-300 rounded-md block w-full text-sm text-gray-500"
          onChange={handleFileChange}
        />
        <div className="mt-4">
          <input
            type="submit"
            value="Ajouter la voiture"
            className="block w-full mb-4 p-2 border border-gray-300 rounded-md hover:bg-gray-300 duration-300"
          />
        </div>
      </form>
      <div>
        <ListeVoitures Cars={carList} setCarList={setCarList} />
      </div>
    </div>
  );
}
