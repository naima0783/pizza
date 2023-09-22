import Pizza from "../models/pizza";
import config from "../config.json";
import AuthenticationService from "./AuthenticationService";
import Order from "../models/Order";

class OrderService {
  static async save(order: Order): Promise<boolean> {
    try {
      const response = await fetch(`${config.adresseIp}/order/save`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      return true;
    } catch (error) {
      console.error(error);
      throw error;
      return false;
    }
  }
}
export default OrderService;
