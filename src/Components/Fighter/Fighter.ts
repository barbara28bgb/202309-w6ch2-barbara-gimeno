import type { GotCharacterData } from "../types";

import { Character } from "../Character/Character.js";

export class Fighter extends Character {
  weapon: string;
  dexterity: number;
  constructor(
    characterData: GotCharacterData,
    weapon: string,
    dexterity: number,
  ) {
    super(characterData);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }
}

export default Fighter;
