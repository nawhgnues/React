// recoil.ts
import { atom } from "recoil";

export const titleState = atom<string>({
  key: "title",
  default: "",
});

export const bodyState = atom<string>({
  key: "body",
  default: "",
});
