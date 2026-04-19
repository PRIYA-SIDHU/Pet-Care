import React, { useState, useEffect, useRef } from 'react';
import dogImg from "../assets/image.png";
import dogImg2 from "../assets/img2.png";
import dogImg3 from "../assets/img3.png";
import dogImg4 from "../assets/img4.png";
import dogImg5 from "../assets/img5.png";
import NGOCard from './NGOCard';
import DonateModal from './DonateModal';

const NGOSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNGO, setSelectedNGO] = useState(null);
  const carouselRef = useRef(null);

  // NGO data with website URLs
  const ngos = [
    {
      id: 1,
      name: "Jeev Welfare Trust",
      description: "Rescuing abandoned dogs and finding them loving homes.",
      image: dogImg,
      website: "https://share.google/MHQtGqpvJ3hBM8zL5"
    },
    {
      id: 2,
      name: "People For Animals",
      description: "Protecting and caring for street dogs across India.",
      image: dogImg2,
      website: "https://share.google/6ilRIjN9rR2n4MpTu"
    },
    {
      id: 3,
      name: "Pawsitive Sanctuary",
      description: "Volunteer network for dog rescue and rehabilitation.",
      image: dogImg3,
      website: "https://share.google/yl6yxqow65zdeEiFp"
    },
    {
      id: 4,
      name: "Animal and Welfare Rescue Org",
      description: "Providing shelter and medical care to rescued dogs.",
      image: dogImg4,
      website: "https://share.google/q66doFtCfHaRmvxva"
    },
    {
      id: 5,
      name: "Animal Sewa Welfare Society",
      description: "Coordinating rescue efforts and adoption programs.",
      image: dogImg5,
      website: "https://share.google/px07efhgo8btku6D8"
    }
  ];

  // Duplicate NGOs for infinite loop effect
  const duplicatedNGOs = [...ngos, ...ngos];

  
  // Donation modal handler
  const handleDonate = (ngo) => {
    setSelectedNGO(ngo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedNGO(null);
  };

  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            SUPPORT DOG NGOS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help these organizations rescue and care for dogs in need.
          </p>
        </div>

        {/* Auto Carousel Cards */}
        <div className="mb-8">
          <div 
            ref={carouselRef}
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div 
              className="flex gap-6"
              style={{
                animation: `scroll 60s linear infinite ${isPaused ? 'paused' : 'running'}`,
                width: 'fit-content'
              }}
            >
              {duplicatedNGOs.map((ngo, index) => (
                <NGOCard key={`${ngo.id}-${index}`} ngo={ngo} onDonate={handleDonate} />
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        {/* Footer Disclaimer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            {"\ud83d\udca1"} Payments are simulated for demo purposes. Real gateway can be integrated in production.
          </p>
        </div>
      </div>

      {/* Donation Modal */}
      <DonateModal 
        isOpen={showModal}
        onClose={handleModalClose}
        ngo={selectedNGO}
      />
    </section>
  );
};

export default NGOSection;
