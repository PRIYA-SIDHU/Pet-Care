import React from 'react';

const NGOCard = ({ ngo, onDonate }) => {
  return (
    <div className="flex-none w-80 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          src={ngo.image}
          alt={ngo.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {ngo.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {ngo.description}
        </p>
        
        {/* Buttons */}
        <div className="space-y-2">
          <a
            href={ngo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-colors duration-200"
          >
            Visit
          </a>
          <button
            onClick={() => onDonate(ngo)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NGOCard;
