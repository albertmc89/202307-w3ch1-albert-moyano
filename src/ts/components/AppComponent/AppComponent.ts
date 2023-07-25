import {
  jaimeCharacterData,
  joffreyCharacterData,
  tyrionCharacterData,
} from "../../data/index.js";
import CharacterComponent from "../Component/CharacterComponent/CharacterComponent.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render(): void {
    this.element.innerHTML = `
      <ul class="characters-list row list-unstyled">
        <li class="col">
        </li>
      </ul>
    `;

    const characterListElement = this.element.querySelector(".list-unstyled")!;

    const kingComponent = new CharacterComponent(
      characterListElement,
      joffreyCharacterData
    );
    kingComponent.render();

    const fighterComponent = new CharacterComponent(
      characterListElement,
      jaimeCharacterData
    );
    fighterComponent.render();

    const squireComponent = new CharacterComponent(
      characterListElement,
      tyrionCharacterData
    );
    squireComponent.render();
  }
}

export default AppComponent;
