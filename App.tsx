// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routesDirectory } from "./src";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useFonts } from "expo-font";

const { Navigator, Screen } = createBottomTabNavigator();

const client = new ApolloClient({
  uri: "https://csb-7qohjn.vercel.app/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [loaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          {routesDirectory.map((route, index) => (
            <Screen key={index} name={route.name} component={route.component} />
          ))}
        </Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
