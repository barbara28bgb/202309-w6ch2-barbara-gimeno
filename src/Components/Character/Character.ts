import type { GotCharacterData } from "../types.js";

export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: GotCharacterData) {
    this.characterData = characterData;
  }

  die(): void {
    this.isAlive = false;
  }

  communicate(): string {
    return `${this.characterData.name}says: `;
  }
}
