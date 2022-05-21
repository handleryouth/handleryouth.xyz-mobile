// In App.js in a new project

import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { routesDirectory, theme } from "./src";

<Ionicons name="home" size={24} color="black" />;
const { Navigator, Screen } = createMaterialBottomTabNavigator();

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
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="white" />
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            {routesDirectory.map((route) => (
              <Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={{
                  tabBarIcon: route.icon,
                }}
              />
            ))}
          </Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}

export default App;
