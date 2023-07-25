import { type CharacterData } from "../../../types.js";
import Component from "../Component.js";

class CharacterComponent extends Component {
  characterData: CharacterData;

  constructor(parentElement: Element, characterData: CharacterData) {
    super(parentElement, "article", "character");

    this.characterData = characterData;
  }

  render() {
    this.element.innerHTML = `
    <div class="card character__card">
      <img src="${this.characterData.imageSource}" alt="${this.characterData.name} and ${this.characterData.family}" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${this.characterData.name} ${this.characterData.family}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Age: ${this.characterData.age}</li>
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
