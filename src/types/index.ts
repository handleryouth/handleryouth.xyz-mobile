import { ObjectId } from "mongodb";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export interface ProjectData {
  _id: ObjectId;
  image: string;
  title: string;
  description: string;
  linkDemo: string;
  linkRepo: string;
}
