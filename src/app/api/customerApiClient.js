const BASE_URL = "http://localhost:3000";

const customerApiClient = {
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
        throw new Error("Error in getCustomers");
      }

      const customers = await response.json();
      return customers;
    } catch (error) {
      console.error("Error in getCustomers:", error);
    }
  },

  createCustomer: async (token, customer) => {
    try {
      const response = await fetch(`${BASE_URL}/Customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error in createCustomer");
      }
    } catch (error) {
      console.error("Error in createCustomer:", error);
    }
  },

  updateCustomer: async (token, customer) => {
    try {
      const response = await fetch(`${BASE_URL}/Customer/${customer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error in updateCustomer");
      }
    } catch (error) {
      console.error("Error in updateCustomer:", error);
    }
  },

  deleteCustomer: async (token, id) => {
    try {
      const response = await fetch(`${BASE_URL}/Customer/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error in deleteCustomer");
      }
    } catch (error) {
      console.error("Error in deleteCustomer", error);
    }
  },
};

export default customerApiClient;
