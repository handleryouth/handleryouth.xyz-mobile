import React from "react";
import { Linking } from "react-native";
import { Button, Card } from "react-native-paper";
import { ProjectData } from "../types";

const CardThumbnail = ({
  image,
  linkDemo,
  linkRepo,
  title,
}: Omit<ProjectData, "_id" | "description">) => (
  <Card>
    <Card.Cover source={{ uri: image }} />
    <Card.Title title={title} />
    <Card.Actions>
      <Button onPress={() => Linking.openURL(linkDemo)}>Demo</Button>
      <Button onPress={() => Linking.openURL(linkRepo)}>Repo</Button>
    </Card.Actions>
  </Card>
);

export default CardThumbnail;
