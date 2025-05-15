import React from "react";

const Card = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700">This is a simple card component.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Card;
