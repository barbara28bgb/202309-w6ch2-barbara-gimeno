import Component from "../Component/Component.js";
import { characters } from "../characterList.js";
import CharacterCard from "../CharacterCard/CharacterCard.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
    <ul class="characters-list row list-unstyled">
    </ul>`;
    const orderList = this.element.querySelector(".characters-list")!;

    characters.forEach((character) => {
      const card = new CharacterCard(orderList, character.characterData);
      card.render();
    });
  }
}

export default App;
