import { Character } from "../Character/Character.js";
import type { GotCharacterData } from "../types.js";

export class King extends Character {
  yearsOfReign: number;

  constructor(characterData: GotCharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()} everybody will die`;
  }
}
