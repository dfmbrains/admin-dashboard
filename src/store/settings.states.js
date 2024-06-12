import { atom } from "recoil";
import { navigations } from "app/navigations";

export const navigationsState = atom({
  key: "navigations",
  default: navigations,
});
