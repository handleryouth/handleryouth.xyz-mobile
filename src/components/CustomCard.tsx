import React from "react";
import { Linking } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import CustomParagraph from "./CustomParagraph";
import { ProjectData } from "../types";

const CustomCard = ({
  description,
  image,
  linkDemo,
  linkRepo,
  title,
}: Omit<ProjectData, "id">) => {
  return (
    <Card>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={title} />
      <Card.Content>
        <Title>{title}</Title>
        <CustomParagraph>{description}</CustomParagraph>
      </Card.Content>
      <Card.Actions>
        <Button
          style={{
            width: 100,
            marginRight: 10,
          }}
          onPress={() => Linking.openURL(linkRepo)}
          mode="outlined"
        >
          Repo
        </Button>
        <Button
          style={{
            width: 100,
          }}
          onPress={() => Linking.openURL(linkDemo)}
          mode="outlined"
        >
          Demo
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default CustomCard;
