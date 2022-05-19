import { ComponentProps } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TechStacksProps {
  id: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export const TECH_STACKS: TechStacksProps[] = [
  {
    id: "1",
    icon: "react",
  },
  {
    id: "2",
    icon: "graphql",
  },
];
