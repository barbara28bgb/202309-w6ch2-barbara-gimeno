export interface GotCharacterData {
  name: string;
  family: string;
  age: number;
  imageSourde: string;
}

export interface FighterData {
  isAlive: boolean;
  series: string;
  characterData: GotCharacterData;
  weapon: string;
  dexterity: number;
}
