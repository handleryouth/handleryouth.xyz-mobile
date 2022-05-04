import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

function DetailsScreen({ navigation }: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text onPress={() => navigation.navigate("Home")}>Go to Home</Text>
    </View>
  );
}

export default DetailsScreen;
