import uuidv4 from "uuid/v4";
import validator from "validator";
import Hangman from "./hangman";
import getPuzzle from "./requests";

let game;

console.log(validator.isEmail("nvardi24@gmail.com"));
const puzzle = document.querySelector("#puzzle");
const message = document.querySelector("#message");
const button = document.querySelector("#reset");

const render = () => {
  puzzle.innerHTML = "";
  message.textContent = game.statusMessage;
  game.puzzle.split("").forEach((letter) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = letter;
    puzzle.appendChild(newSpan);
  });
};

const newGame = async () => {
  const newPuzzle = await getPuzzle("1");
  game = new Hangman(newPuzzle, 10);
  render();
};
newGame();

button.addEventListener("click", newGame);

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});
