import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import CustomHeadline from "./CustomHeadline";

export interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  style?: ViewStyle;
  headerStyle?: TextStyle;
}

const Section = ({ title, body, style, headerStyle }: HomeSectionProps) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <CustomHeadline style={{ ...styles.containerText, ...headerStyle }}>
        {title}
      </CustomHeadline>
      {body}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  containerText: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Section;
