const BASE_URL = "http://localhost:3000";

const apiClient = {
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
  //next endpoint
};

export default apiClient;
