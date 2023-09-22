import LoginRequest from "../models/security/loginRequest";
import LoginResponse from "../models/security/loginResponse";
import config from "../config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";
import User from "../models/security/user";

class AuthenticationService {
  static async call(login: LoginRequest): Promise<LoginResponse | undefined> {
    const response = await fetch(`${config.adresseIp}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return await response.json();
    }
  }

  static async login(username: string, password: string): Promise<boolean> {
    await this.call(new LoginRequest(username, password)).then((response) => {
      if (response !== undefined) {
        AsyncStorage.setItem("jwt", response.jwt);
        AsyncStorage.setItem("expiration", response.expiration);
        AsyncStorage.setItem("user", JSON.stringify(response.user));
        AsyncStorage.setItem("reloaded", "false");
      }
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuthenticated());
      }, 1000);
    });
  }

  static async isAuthenticated(): Promise<boolean> {
    const expiration = await AsyncStorage.getItem("expiration");
    const jwt = AsyncStorage.getItem("jwt");

    if (
      expiration != null &&
      Date.parse(expiration) > Date.now() &&
      jwt != null
    ) {
      return jwt !== undefined;
    } else {
      AsyncStorage.removeItem("jwt");
      AsyncStorage.removeItem("expiration");
      AsyncStorage.removeItem("user");
      if ((await AsyncStorage.getItem("reloaded")) !== "true") {
        AsyncStorage.setItem("reloaded", "true");
      }

      return false;
    }
  }

  static getJwt(): any {
    this.isAuthenticated();
    return AsyncStorage.getItem("jwt");
  }

  static async save(client: User): Promise<User> {
    try {
      const jwt = await AuthenticationService.getJwt();
      const response = await fetch(`${config.adresseIp}/auth/save`, {
        method: "POST",
        body: JSON.stringify(client),

        headers: {
          authorization: jwt || "",
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

export default AuthenticationService;
