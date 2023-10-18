import type { GotCharacterData } from "../types.js";

export class Character {
  isAlive: boolean;
  series: string;
  characterData;

  constructor(characterData: GotCharacterData) {
    this.characterData = characterData;
    this.isAlive = true;
    this.series = "Game of Thrones";
  }

  die(): void {
    this.isAlive = false;
  }

  communicate(): string {
    return `${this.characterData.name}says: `;
  }
}
