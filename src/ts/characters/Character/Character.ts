import { type CharacterData } from "../../types.js";

class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  communicate() {
    return `${this.characterData.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
