import AppComponent from "./components/AppComponent/AppComponent.js";

const characterContainer = document.querySelector(".container")!;

const containerComponent = new AppComponent(characterContainer);

containerComponent.render();
