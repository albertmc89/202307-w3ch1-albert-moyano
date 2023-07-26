import { characters } from "../../characters/characters.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import CharacterComponent from "../Component/CharacterComponent/CharacterComponent.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render(): void {
    this.element.innerHTML = `
      <ul class="characters-list row list-unstyled">
      </ul>
    `;

    const characterListElement = this.element.querySelector(".list-unstyled")!;

    const kingComponent = new CharacterComponent(
      characterListElement,
      characters[0]
    );
    kingComponent.render();

    const fighterComponent = new CharacterComponent(
      characterListElement,
      characters[1]
    );
    fighterComponent.render();

    const squireComponent = new CharacterComponent(
      characterListElement,
      characters[2]
    );
    squireComponent.render();

    const dieButtonComponent = new ButtonComponent(
      characterListElement,
      "die",
      () => {
        this.element.querySelector(".character__action")?.die();
      }
    );

    dieButtonComponent.render();
  }
}

export default AppComponent;
