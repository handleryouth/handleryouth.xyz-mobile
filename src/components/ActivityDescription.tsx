import { View, Text } from "react-native";
import React, { ReactNode } from "react";

export interface ActivityDescriptionProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ActivityDescription = ({
  title,
  description,
  icon,
}: ActivityDescriptionProps) => {
  return (
    <View>
      <View>{icon}</View>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default ActivityDescription;
