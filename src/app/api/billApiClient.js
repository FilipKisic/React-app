const BASE_URL = "http://localhost:3000";

const billApiClient = {
  getBillsForCustomer: async (token, customerId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/Bill?customerId=${customerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error in getBillsForCustomer");
      }

      const bills = response.json();
      return bills;
    } catch (error) {
      console.error("There was an error in billApiClient", error);
    }
  },
};

export default billApiClient;
