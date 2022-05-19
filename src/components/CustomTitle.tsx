import { StyleSheet, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { Title } from "react-native-paper";

interface CustomTitleProps {
  children: ReactNode;
  style?: TextStyle;
}

const CustomTitle = ({ children, style }: CustomTitleProps) => {
  return <Title style={{ ...style, ...styles.title }}>{children}</Title>;
};

export default CustomTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 23,
  },
});
