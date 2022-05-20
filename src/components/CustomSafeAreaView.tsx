import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomSafeAreaView = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
