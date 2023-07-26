import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  text: string;
  actionOnClick: () => void;

  constructor(parentElement: Element, text: string, actionOnClick: () => void) {
    super(parentElement, "button", "character__action");

    this.text = text;
    this.actionOnClick = actionOnClick;
    this.listenEvents();
  }

  render() {
    this.element.textContent = this.text;
  }

  listenEvents() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default ButtonComponent;
