// Mock donation service - simulates backend API
export const donationService = {
  // Initialize localStorage with sample data if empty
  initializeData() {
    if (!localStorage.getItem('donations')) {
      localStorage.setItem('donations', JSON.stringify([]));
    }
    if (!localStorage.getItem('ngoStats')) {
      const ngoStats = {
        1: { totalRaised: 15000, goal: 50000 },
        2: { totalRaised: 22000, goal: 60000 },
        3: { totalRaised: 8500, goal: 30000 },
        4: { totalRaised: 12000, goal: 40000 },
        5: { totalRaised: 18000, goal: 45000 }
      };
      localStorage.setItem('ngoStats', JSON.stringify(ngoStats));
    }
  },

  // Mock API call with delay
  mockDonateAPI(donationData) {
    return new Promise((resolve, reject) => {
      // Simulate network delay (2-3 seconds)
      setTimeout(() => {
        try {
          // Generate transaction ID
          const transactionId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
          
          // Create donation record
          const donation = {
            id: Date.now(),
            transactionId,
            ...donationData,
            timestamp: new Date().toISOString(),
            status: 'completed'
          };

          // Save to localStorage
          const donations = JSON.parse(localStorage.getItem('donations') || '[]');
          donations.push(donation);
          localStorage.setItem('donations', JSON.stringify(donations));

          // Update NGO stats
          const ngoStats = JSON.parse(localStorage.getItem('ngoStats') || '{}');
          if (ngoStats[donationData.ngoId]) {
            ngoStats[donationData.ngoId].totalRaised += donationData.amount;
            localStorage.setItem('ngoStats', JSON.stringify(ngoStats));
          }

          resolve({
            success: true,
            transactionId,
            message: 'Donation processed successfully'
          });
        } catch (error) {
          reject(new Error('Failed to process donation'));
        }
      }, 2000 + Math.random() * 1000); // 2-3 second delay
    });
  },

  // Get donation history
  getDonationHistory() {
    const donations = JSON.parse(localStorage.getItem('donations') || '[]');
    return donations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  },

  // Get NGO statistics
  getNgoStats() {
    return JSON.parse(localStorage.getItem('ngoStats') || '{}');
  },

  // Get total donations across all NGOs
  getTotalDonations() {
    const ngoStats = this.getNgoStats();
    return Object.values(ngoStats).reduce((total, ngo) => total + ngo.totalRaised, 0);
  }
};
