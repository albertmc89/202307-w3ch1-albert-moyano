import {
  bronnCharacterData,
  daenerysCharacterData,
  jaimeCharacterData,
  joffreyCharacterData,
} from "../data/index.js";
import type Character from "./Character/Character.js";
import { Fighter } from "./Fighter/Fighter.js";
import { King } from "./King/King.js";
import { Squire } from "./Squire/Squire.js";

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const bronn = new Squire(bronnCharacterData, 0, jaime);

export const characters: Character[] = [jaime, joffrey, daenerys, bronn];
