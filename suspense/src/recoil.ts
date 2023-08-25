// recoil.ts
import { atom } from "recoil";

export const dataState1 = atom<string>({
  key: "dataState1",
  default: "",
});

export const dataState2 = atom<string>({
  key: "dataState2",
  default: "",
});
