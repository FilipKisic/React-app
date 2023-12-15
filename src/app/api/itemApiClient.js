const BASE_URL = "http://localhost:3000";

const itemApiClient = {
  getItemsForBill: async (token, billId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/Item?billId=${billId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error in getItemsForBill");
      }

      const bills = response.json();
      return bills;
    } catch (error) {
      console.error("There was an error in itemApiClient", error);
    }
  },
};

export default itemApiClient;
