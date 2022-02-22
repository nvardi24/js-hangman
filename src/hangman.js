class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessesMade = [];
    this.status = "Playing";
  }
  get puzzle() {
    let str = "";
    this.word.forEach((letter) => {
      if (this.guessesMade.includes(letter) || letter === " ") {
        str += letter;
      } else {
        str += "*";
      }
    });
    return str;
  }
  get statusMessage() {
    const wordString = this.word.join("");
    if (this.status === "Playing") {
      return `Guesses left: ${this.remainingGuesses}.`;
    } else if (this.status === "Failed") {
      return `Nice try! The word was "${wordString}".`;
    } else {
      return "Great work! You guessed the word.";
    }
  }
  checkStatus() {
    let isWinner = true;
    if (!this.remainingGuesses) {
      this.status = "Failed";
    } else {
      this.word.forEach((letter) => {
        if (!this.guessesMade.includes(letter) && letter !== " ") {
          isWinner = false;
        }
      });
      if (isWinner) {
        this.status = "Finished";
      }
    }
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    if (this.status !== "Failed") {
      if (!this.guessesMade.includes(guess)) {
        this.guessesMade.push(guess);
        if (!this.word.includes(guess)) {
          this.remainingGuesses--;
        }
      }
    }
    this.checkStatus();
  }
}
export { Hangman as default };
