import { View, Text, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import CustomParagraph from "./CustomParagraph";
import { Subheading } from "react-native-paper";

export interface ActivityDescriptionProps {
  title: string;
  description: string;
  icon: ReactNode;
  style?: ViewStyle;
}

const ActivityDescription = ({
  title,
  description,
  icon,
  style,
}: ActivityDescriptionProps) => {
  return (
    <View style={style}>
      <View>{icon}</View>
      <View>
        <Subheading>{title}</Subheading>
        <CustomParagraph>{description}</CustomParagraph>
      </View>
    </View>
  );
};

export default ActivityDescription;
