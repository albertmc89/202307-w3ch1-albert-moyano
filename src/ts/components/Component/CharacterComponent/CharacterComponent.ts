import { type Fighter } from "../../../characters/Fighter/Fighter.js";
import { type King } from "../../../characters/King/King.js";
import { type Squire } from "../../../characters/Squire/Squire.js";
import Component from "../Component.js";

class CharacterComponent extends Component {
  character;

  constructor(parentElement: Element, character: King | Fighter | Squire) {
    super(parentElement, "article", "character");

    this.character = character;
  }

  render() {
    this.element.innerHTML = `
    <div class="card character__card">
      <img src="${this.character.characterData.imageSource}" alt="${this.character.characterData.name} and ${this.character.characterData.family}" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Age: ${this.character.characterData.age}</li>
            <li>
              State:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>`;
  }
}

export default CharacterComponent;
