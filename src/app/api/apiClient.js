const BASE_URL = "http://localhost:3000";

const apiClient = {
  getCustomers: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/Customer`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error in getCustomers:", error);
      }

      const customers = await response.json();
      return customers;
    } catch (error) {
      console.error("Error in getCustomers:", error);
    }
  },

  getCities: async () => {
    try {
      const response = await fetch(`${BASE_URL}/City`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getCities:", error);
      throw error;
    }
  },
};

export default apiClient;
