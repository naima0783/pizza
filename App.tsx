import * as React from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/pizzaScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PizzaScreen from "./screens/pizzaScreen";
import Inscription from "./screens/inscription";
import Login from "./screens/login";
import Validation from "./screens/validation";
import AuthenticationService from "./services/AuthenticationService";
import { AppState, NativeEventSubscription } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useLayoutEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const authenticated = await AuthenticationService.isAuthenticated();
    setIsAuthenticated(authenticated);
  };

  useLayoutEffect(() => {
    const subscription: NativeEventSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Cleanup
    return () => {
      subscription.remove(); // Supprime l'écouteur
    };
  }, []);

  const handleAppStateChange = (nextAppState: string) => {
    if (nextAppState === "background" || nextAppState === "inactive") {
      // Effacer les informations d'authentification
      AsyncStorage.removeItem("jwt");
      AsyncStorage.removeItem("expiration");
      AsyncStorage.removeItem("user");
    }
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="PizzaScreen"
            component={PizzaScreen}
          />
          <Stack.Screen
            name="Validation"
            component={Validation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            children={(props: any) => (
              <Login {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
            options={{ headerShown: false }}
            initialParams={{ isAuthenticated: undefined }}
          />

          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
