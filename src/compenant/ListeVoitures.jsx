import React from 'react';
import Voiture from './Voiture';

export default function ListeVoitures({ Cars, setCarList }) {
  const deleteCar = (id) => {
    setCarList((prevCars) => prevCars.filter(car => car.id !== id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">ID</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Nom de voiture</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Modèle</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Carburant</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Prix</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Image</th>
            <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {Cars.map((car) => (
            <Voiture key={car.id} car={car} deleteCar={deleteCar} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
