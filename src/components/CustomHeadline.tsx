import { StyleSheet, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { Headline } from "react-native-paper";

interface CustomHeadlineProps {
  children: ReactNode;
  style?: TextStyle;
}

const CustomHeadline = ({ children, style }: CustomHeadlineProps) => {
  return (
    <Headline style={{ ...style, ...styles.headline }}>{children}</Headline>
  );
};

export default CustomHeadline;

const styles = StyleSheet.create({
  headline: {
    fontFamily: "Inter-Bold",
    fontSize: 30,
  },
});
