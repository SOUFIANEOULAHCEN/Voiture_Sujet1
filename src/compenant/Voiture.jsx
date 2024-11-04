import React from "react";

export default function Voiture(props) {
  return (
    <tr key={props.car.id} className="hover:bg-gray-50 transition duration-200">
      <td className="py-2 px-4 border-b text-gray-700">{props.car.id}</td>
      <td className="py-2 px-4 border-b text-gray-700">{props.car.nom}</td>
      <td className="py-2 px-4 border-b text-gray-700">{props.car.modele}</td>
      <td className="py-2 px-4 border-b text-gray-700">{props.car.carburant}</td>
      <td className="py-2 px-4 border-b text-gray-700">{props.car.prix}</td>
      <td className="py-2 px-4 border-b text-gray-700">
        <img
          src={props.car.image}
          alt={props.car.nom}
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td className="py-2 px-4 border-b text-gray-700">
        <button 
          onClick={() => props.deleteCar(props.car.id)} 
          className="bg-red-600 px-6 py-2 rounded-xl text-gray-100 hover:bg-red-800 transition duration-200"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
