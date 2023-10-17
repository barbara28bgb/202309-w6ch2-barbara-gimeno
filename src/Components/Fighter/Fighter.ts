import type { GotCharacterData, FighterData } from "../types";

import { Character } from "../Characters/Characters.js";

export class Fighter extends Character {
  constructor(
    characterData: GotCharacterData,
    weapon: string,
    dexterity: string,
  ) {
    super(characterData);
  }
}

export default Fighter;
