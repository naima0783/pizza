import Pizza from "../models/pizza";
import config from "../config.json";
import AuthenticationService from "./AuthenticationService";

class PizzaService {
  static async getAll(): Promise<Pizza[]> {
    try {
      const response = await fetch(`${config.adresseIp}/pizza/all`, {
        headers: {
          authorization: (await AuthenticationService.getJwt()) || "",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
export default PizzaService;
