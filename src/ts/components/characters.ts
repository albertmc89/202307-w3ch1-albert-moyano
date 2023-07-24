import {
  bronnCharacterData,
  daenerysCharacterData,
  jaimeCharacterData,
  joffreyCharacterData,
} from "../Data";
import { Fighter } from "./Fighter/Fighter";
import { King } from "./King/King";
import { Squire } from "./Squire/Squire";

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const bronn = new Squire(bronnCharacterData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, bronn];
