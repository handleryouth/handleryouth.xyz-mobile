import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

export interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  customTitleClass?: string;
}

const Section = ({ title, body }: HomeSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{title}</Text>
      {body}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerText: {},
});

export default Section;
