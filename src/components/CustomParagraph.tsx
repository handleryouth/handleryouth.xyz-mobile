import React, { ReactNode } from "react";
import { GestureResponderEvent, TextStyle } from "react-native";
import { Paragraph } from "react-native-paper";

interface CustomParagraphProps {
  children: ReactNode;
  style?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomParagraph = ({
  children,
  style,
  onPress,
}: CustomParagraphProps) => {
  return (
    <Paragraph
      style={{
        ...style,
        fontFamily: "Inter-Medium",
        fontSize: 15,
        lineHeight: 22,
      }}
      onPress={onPress}
    >
      {children}
    </Paragraph>
  );
};

export default CustomParagraph;
