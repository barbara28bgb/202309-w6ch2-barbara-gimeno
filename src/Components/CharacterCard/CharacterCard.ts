import { type GotCharacterData } from "../types";
import Component from "../Component/Component.js";

class CharacterCard extends Component {
  characterData;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    characterData: GotCharacterData,
  ) {
    super(parentElement, tagName, className);
    this.characterData = characterData;
  }

  protected populate(): void {
    this.element.innerHTML = `
         <article class="character">
          <div class="card character__card">
            <img src="${this.characterData.imageURL}" alt="${this.characterData.name},${this.characterData.family}" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.characterData.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age:${this.characterData.age}</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
    `;
  }
}

export default CharacterCard;
