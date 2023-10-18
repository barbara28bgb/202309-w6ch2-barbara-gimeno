import { Character } from "../Character/Character.js";
import { Fighter } from "../Fighter/Fighter.js";
import { type GotCharacterData } from "../types.js";

export class Squire extends Character {
  constructor(
    data: GotCharacterData,
    protected serves: Character,
    protected kissAssLevel: number,
  ) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);
    this.serves = serves;

    if (Squire instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
