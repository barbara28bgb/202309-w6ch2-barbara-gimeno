import { type GotCharacterData } from "./types";
import { King } from "./King/King.js";
import { Squire } from "./Squire/Squire.js";
import Fighter from "./Fighter/Fighter.js";
import { Advisor } from "./Advisor/Advisor.js";

const joffreyCharacterData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
};

const jaimeCharacterData = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
};

const daenerysCharacterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};

const tyrionCharacterData = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
};

const bronnCharacterData: GotCharacterData = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const tyrion = new Advisor(tyrionCharacterData, daenerys);
const bronn = new Squire(bronnCharacterData, jaime, 8);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
