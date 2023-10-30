"use strict";
//Buttons variables
const btn1N20 = document.getElementById("oneToTwenty");
const btn1N50 = document.getElementById("oneToFifty");
const btn1N100 = document.getElementById("oneToHundred");
const btnCheck = document.querySelector(".check");
const btnPlayAgain = document.querySelector(".play-again");
const btnPAgain = document.querySelector(".pAgain");

const popUp = document.querySelector(".pop-up");
const popUpOverlay = document.querySelector(".blur");
const popUpCloseBtn = document.querySelector(".close-btn");
const gameInfoBtn = document.querySelector(".game-info");

const dropdownContainer = document.querySelector(".dropdown-container");
const gameContainer = document.querySelector(".game-level_container");

//text variables
const subHeading = document.querySelector("h2");
const hiddenNumber = document.querySelector(".secret-number");
const outputMessage = document.querySelector(".message");
const scoreValue = document.querySelector(".score");
const highScoreValue = document.querySelector(".highscore");
const inputBox = document.querySelector(".guesses");

// Variable declarations
let randomDigits;
let scoreNum, highscoreNum;
let lastRangeValue;

//simple functions - On buttons
const inputFieldOn = function () {
  inputBox.disabled = false;
  inputBox.value = "";
};
const btnCheckOn = function () {
  btnCheck.disabled = false;
};
const btnPlayAgainOn = function () {
  btnPlayAgain.disabled = false;
};

//Off buttons
const inputFieldOff = function () {
  inputBox.disabled = true;
};
const btnCheckOff = function () {
  btnCheck.disabled = true;
};
const btnPlayAgainOff = function () {
  btnPlayAgain.disabled = true;
};

// Switch between responsive screens
const moveable = function() {
  const arr = [...dropdownContainer.children];
  window.innerWidth < 880 ? arr.map(ar => gameContainer.append(ar)) : arr.map(ar => dropdownContainer.append(ar));
}

//text functionality
const outputMsgDisplay = function (text) {
  outputMessage.textContent = text;
};

//game info and blur overlay functionality
let showModal = function () {
  popUp.classList.remove("hidden");
  popUpOverlay.classList.remove("hidden");
  moveable();
};
const closeModal = function () {
  popUp.classList.add("hidden");
  popUpOverlay.classList.add("hidden");
};




// display UI setup
const displayUiSetup = function(range) {
  lastRangeValue = range;
  subHeading.textContent = `between 1 and ${lastRangeValue}`;
  hiddenNumber.textContent = "?";
  hiddenNumber.style.boxShadow = "initial";
  outputMsgDisplay("Start guessing...");

  inputFieldOn();
  btnCheckOn();
  btnPlayAgainOn();
}

// setting up game supporting functionalities
const settingLogic = function(initialScore, initialHighScore) {
  randomDigits = getRandomNumber(lastRangeValue);
  console.log(lastRangeValue, randomDigits)
  scoreNum = initialScore;
  scoreValue.textContent = scoreNum;
  highscoreNum = initialHighScore;
  highScoreValue.textContent = initialHighScore;
}

// Generating random number
const getRandomNumber = number => Math.trunc(Math.random() * number) + 1;

// Play again
const playAgainFn = function (RangeValue, highScoreValue) {
  randomDigits = getRandomNumber(RangeValue);
  hiddenNumber.textContent = "?";

  outputMsgDisplay("Start guessing...");

  scoreNum = highScoreValue;
  scoreValue.textContent = highScoreValue;

  hiddenNumber.style.boxShadow = "initial";

  inputFieldOn();
  btnCheckOn();
};

inputFieldOff();
btnCheckOff();
btnPlayAgainOff();
showModal();

// game Decision
const compareResult = function () {
  let guessedNumber = Number(inputBox.value);

  //when no guess or guess is out of range
  if (!guessedNumber || guessedNumber < 0 || guessedNumber > lastRangeValue) {
    outputMsgDisplay(`💥 Enter a number between 1 and ${lastRangeValue}`);
    scoreNum--;
    scoreValue.textContent = scoreNum;
    if (scoreNum < 1) {
      outputMsgDisplay("😞🙄 Game over");
      scoreNum = 0;
      scoreValue.textContent = scoreNum;
      btnCheckOff();
      inputFieldOff();
      hiddenNumber.style.boxShadow = "5px 3px 5px red";
    }
  } //when guess is correct
  else if (guessedNumber === randomDigits) {
    outputMsgDisplay("🍾 Yayy!!! Correct number!");
    btnCheckOff();
    inputFieldOff();
    hiddenNumber.textContent = randomDigits;
    if (highscoreNum < scoreNum) {
      highscoreNum = scoreNum;
      highScoreValue.textContent = highscoreNum;
    }
    hiddenNumber.style.boxShadow = "5px 3px 5px #07f72b";
  } //when guess is wrong
  else if (guessedNumber !== randomDigits) {
    outputMsgDisplay(
      guessedNumber > randomDigits ? "📈 Too high" : "📉 Too low"
    );
    scoreNum--;
    scoreValue.textContent = scoreNum;
    if (scoreNum < 1) {
      outputMsgDisplay("😞 Game over");
      scoreNum = 0;
      scoreValue.textContent = scoreNum;
      btnCheckOff();
      inputFieldOff();
      hiddenNumber.style.boxShadow = "5px 3px 5px red";
    }
  }
};

// /**--------------------------------------------Event functionality------------------------------------------------ */
//                               /*---------------------1 and 20---------------*/

btn1N20.addEventListener("click", function () {
  displayUiSetup(20);

  settingLogic(lastRangeValue, 0);

  btnCheck.addEventListener("click", compareResult);

  // play again functionality for desktop version
  btnPlayAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum));

  //Play again functionality for small screens
  btnPAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum));
});

/*---------------------1 and 50---------------*/

btn1N50.addEventListener("click", function () {
  displayUiSetup(50);

  settingLogic(15, 0); 

  btnCheck.addEventListener("click", compareResult);

  //Play again functionality
  btnPlayAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum));

  //Play again functionality for small screens 
  btnPAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum));
});

                                 /*---------------------1 and 100---------------*/

btn1N100.addEventListener("click", function () {
  displayUiSetup(100);

  settingLogic(10, 0); 

  btnCheck.addEventListener("click", compareResult);

  //Play again functionality
  btnPlayAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum))

  //Play again functionality for small screens
  btnPAgain.addEventListener("click", playAgainFn.bind(null, lastRangeValue, scoreNum))
});

gameInfoBtn.addEventListener("click", showModal);
popUpCloseBtn.addEventListener("click", closeModal);
popUpOverlay.addEventListener("click", closeModal);





