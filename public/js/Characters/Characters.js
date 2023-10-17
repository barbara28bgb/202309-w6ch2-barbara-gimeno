export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;
  constructor(characterData) {
    this.characterData = characterData;
  }
  die() {
    this.isAlive = false;
  }
}
//# sourceMappingURL=Characters.js.map
