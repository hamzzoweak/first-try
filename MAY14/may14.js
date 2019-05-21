//GAME FUNCTION
// - PLAYER MUST GUESS A NUMBER BETWEEN A MINIMUM AND MAXIMUM
// - PLAYER GETS A CERTAIN AMOUNT OF GUESSES
// - NOTIFY PLAYER OF GUESSES REMAINING
// - NOTIFY THE PLAYER OF THE CORRECT ANSWER IF LOOSE
// - LET PLAYER CHOOSE TO PLAY AGAIN

//GAME VALUES
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

//PLAY AGAIN EVENT LISTENER
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//LISTEN FOR GUESS
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //VALIDATE

  if (guess === winningNum) {
    //DISABLE INPUT
    // guessInput.disabled = true;
    //CHANGE BORDER COLOR
    // guessInput.style.borderColor = "green";
    //SET MESSAGE
    // setMessage(`${winningNum} is correct, You win!`, "green");

    //GAME OVER - WON
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //WRONG NUMBER
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, YOU LOSE. The correct number is ${winningNum}`
      );
    } else {
      //GAME CONTINUES - ANSWER WRONG
      guessInput.style.borderColor = "red";
      //CLEAR INPUT
      guessInput.value = null;
      setMessage(`${guess} is not correct, ${guessesLeft} guess left`, "red");
    }
  }
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(
      `Please enter a number between ${min} and ${max}, ${guessesLeft} guess left`,
      "red"
    );
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //DISABLE INPUT
  guessInput.disabled = true;
  //CHANGE BORDER COLOR
  guessInput.style.borderColor = color;
  //SET TEXT COLOR
  message.style.color = color;
  //SET MESSAGE
  setMessage(msg);
  //PLAY AGAIN
  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//SET MESSAGE FUNCTION
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
