import React, { useState, useEffect } from 'react';
import { donationService } from '../services/donationService';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize donation service
    donationService.initializeData();
    loadDonationHistory();
  }, []);

  const loadDonationHistory = () => {
    const history = donationService.getDonationHistory();
    const total = donationService.getTotalDonations();
    setDonations(history);
    setTotalAmount(total);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">Donation History</h3>
          <p className="text-gray-600 text-sm">Track your impact and see recent donations</p>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-green-600 hover:text-green-700 font-medium text-sm"
        >
          {isVisible ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Total Raised</p>
              <p className="text-2xl font-bold text-green-700">
                {"\u20b9"}{totalAmount.toLocaleString()}
              </p>
            </div>
            <span className="text-3xl">{"\ud83d\udcb0"}</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Donations</p>
              <p className="text-2xl font-bold text-blue-700">{donations.length}</p>
            </div>
            <span className="text-3xl">{"\ud83d\udc9d"}</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Avg. Donation</p>
              <p className="text-2xl font-bold text-purple-700">
                {"\u20b9"}{donations.length > 0 ? Math.round(totalAmount / donations.length).toLocaleString() : '0'}
              </p>
            </div>
            <span className="text-3xl">{"\ud83d\udcca"}</span>
          </div>
        </div>
      </div>

      {/* Detailed History */}
      {isVisible && (
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-3">Recent Donations</h4>
          {donations.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <span className="text-4xl mb-2 block">{"\ud83d\udced"}</span>
              <p>No donations yet. Be the first to make a difference!</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {donations.slice(0, 10).map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800">{donation.donorName}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {"\u20b9"}{donation.amount}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {donation.ngoName} {"\u2022"} {formatDate(donation.timestamp)}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">
                    {donation.transactionId.slice(-8)}
                  </div>
                </div>
              ))}
              {donations.length > 10 && (
                <p className="text-center text-sm text-gray-500 pt-2">
                  Showing 10 of {donations.length} donations
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
