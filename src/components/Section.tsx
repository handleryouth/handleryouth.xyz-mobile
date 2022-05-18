import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Headline } from "react-native-paper";

export interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  style?: ViewStyle;
}

const Section = ({ title, body, style }: HomeSectionProps) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Headline style={styles.containerText}>{title}</Headline>
      {body}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  containerText: {
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Section;
