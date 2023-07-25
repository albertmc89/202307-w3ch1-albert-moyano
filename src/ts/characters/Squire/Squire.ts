import { type CharacterData } from "../../types";
import Character from "../Character/Character";
import { Fighter } from "../Fighter/Fighter";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(characterData: CharacterData, kissAssLevel: number, serves: any) {
    super(characterData);
    this.kissAssLevel = this.#kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate() {
    return `${super.communicate()}I'm a loser`;
  }

  #kissAssLevelFilter(kissAssLevel: number) {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
