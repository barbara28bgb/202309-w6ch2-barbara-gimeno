import { Character } from "../Character/Character.js";
import { type GotCharacterData } from "../types.js";

export class Advisor extends Character {
  advises: GotCharacterData;

  constructor(characterData: GotCharacterData, advises: GotCharacterData) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
