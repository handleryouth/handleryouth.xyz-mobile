import { ComponentType } from "react";
import { Details, Home } from "../screens";

export interface RouteProps {
  name: string;
  component: ComponentType<any>;
}

export const routesDirectory: RouteProps[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Details",
    component: Details,
  },
];
