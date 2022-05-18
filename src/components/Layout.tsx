import React, { ReactNode } from "react";
import { View } from "react-native";

const Layout = ({ children }: { children: ReactNode }) => {
  return <View>{children}</View>;
};

export default Layout;
