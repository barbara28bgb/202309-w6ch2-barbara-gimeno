export interface GotCharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface FighterData extends GotCharacterData {
  weapon: string;
  dexterity: number;
}

export interface AdvisorData extends GotCharacterData {
  kissAssLevel: number;
  serves: string;
}

export interface SquireData extends GotCharacterData {
  kissAssLevel: number;
  serves: string;
}
