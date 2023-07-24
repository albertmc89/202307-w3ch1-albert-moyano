import { joffreyCharacterData } from "./Data";

const characterElement = document.querySelector(".character")!;

const characterImage = characterElement.querySelector(".character__card");
(characterImage as HTMLImageElement).src = joffreyCharacterData.imageSource;
