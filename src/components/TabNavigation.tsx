import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Details, Home } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};

export default TabNavigation;
