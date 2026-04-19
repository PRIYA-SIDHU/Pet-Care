import React, { useState, useEffect, useRef } from 'react';
import dogImg from "../assets/image.png";
import dogImg2 from "../assets/img2.png";
import dogImg3 from "../assets/img3.png";
import dogImg4 from "../assets/img4.png";
import dogImg5 from "../assets/img5.png";

const NGOSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Donation modal handler
  const handleDonate = () => {
    console.log('Donate button clicked');
    setShowModal(true);
    console.log('showModal set to:', true);
  };

  // Handle donation submission
  const handleDonationSubmit = () => {
    const amount = parseFloat(donationAmount);
    
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowModal(false);
      setDonationAmount('');
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  // NGO Card Component
  const NGOCard = ({ ngo }) => {
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
          
          {/* Visit Button */}
          <a
            href={ngo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-colors duration-200"
          >
            Visit
          </a>
        </div>
      </div>
    );
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
                animationPlayState: isPaused ? 'paused' : 'running',
                animation: 'scroll 60s linear infinite',
                width: 'fit-content'
              }}
            >
              {duplicatedNGOs.map((ngo, index) => (
                <NGOCard key={`${ngo.id}-${index}`} ngo={ngo} />
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

        {/* Donate Button */}
        <div className="text-center">
          <button
            onClick={handleDonate}
            disabled={isLoading}
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              'Donate Now'
            )}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Secure payment via Razorpay
          </p>
        </div>
      </div>
    </section>
  );

  {/* Donation Modal */}
  {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {console.log('Modal rendering, showModal:', showModal)}
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
          Enter Donation Amount
        </h2>
        
        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
              ₹
            </span>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-lg"
              min="1"
              step="0.01"
            />
          </div>
        </div>

        <button
          onClick={handleDonationSubmit}
          disabled={isProcessing}
          className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Donate Now'}
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="w-full mt-3 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  )}

  {/* Success Message */}
  {showSuccess && (
    <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300">
      <div className="flex items-center">
        <span className="text-2xl mr-3">🎉</span>
        <span className="font-medium">Donation successful! Thank you for your support.</span>
      </div>
    </div>
  )}
};

export default NGOSection;
