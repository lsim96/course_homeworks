let wordDisplay = document.querySelector(".word-display");
let guessesText = document.querySelector(".guesses-text");
let keyboardDiv = document.querySelector(".keyboard");
let hangmanImage = document.querySelector(".hangman-box img");
let gameModal = document.querySelector(".game-modal");
let playAgainBtn = gameModal.querySelector("button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuessCount = 6;

//restarting the game
function resetGame() {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuessCount}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join();
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  gameModal.classList.remove("show");
}

function getRandomWord() {
  let { name, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = name.toLowerCase();
  document.querySelector(".hint-text").innerText = hint;
  resetGame();
}

function gameOver(isVictory) {
  let showText = isVictory
    ? `Your found the movie:`
    : "The correct movie was:  ";
  gameModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  gameModal.querySelector("h4").innerText = isVictory
    ? "Congratulations!"
    : "Game Over!";
  gameModal.querySelector("p").innerHTML = `${showText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
}

//creatimg the keyboard buttons
for (let i = 97; i <= 122; i++) {
  let button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initializeGame(e.target, String.fromCharCode(i))
  );
}

//function for clicked letters
function initializeGame(btn, letterOnClick) {
  let letter = letterOnClick.toLowerCase(); // Ensure the guessed letter is lowercase
  if (currentWord.includes(letter)) {
    [...currentWord].forEach((char, index) => {
      if (char === letter) {
        correctLetters.push(char);
        wordDisplay.querySelectorAll("li")[index].innerText = char;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // Wrong guess count if clicked letter is wrong
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  // Disabling the clicked button
  btn.disabled = true;
  // Updating the guess count
  guessesText.innerText = `${wrongGuessCount} / ${maxGuessCount}`;

  // Checking if the game should end
  if (wrongGuessCount === maxGuessCount) return gameOver(false);
  if (correctLetters.length === currentWord.replace(/ /g, "").length)
    return gameOver(true);
}

getRandomWord();

playAgainBtn.addEventListener("click", getRandomWord);
