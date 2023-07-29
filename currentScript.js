"use strict";
//Buttons variables
const btn1N20 = document.getElementById("oneToTwenty");
const btn1N50 = document.getElementById("oneToFifty");
const btn1N100 = document.getElementById("oneToHundred");
const btnCheck = document.querySelector(".check");
const btnPlayAgain = document.querySelector(".play-again");
const btnPAgain = document.querySelector('.pAgain');

const popUp = document.querySelector('.pop-up');
const popUpOverlay = document.querySelector('.blur');
const popUpCloseBtn = document.querySelector('.close-btn');
const gameInfoBtn = document.querySelector('.game-info');

//text variables
const subHeading = document.querySelector("h2");
const hiddenNumber = document.querySelector('.secret-number');
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
  inputBox.value = '';
};
const btnCheckOn = function () {
  btnCheck.disabled = false;
};
const btnPlayAgainOn = function () {
    btnPlayAgain.disabled = false;
}

//Off buttons
const inputFieldOff = function () {
  inputBox.disabled = true;
};
const btnCheckOff = function () {
  btnCheck.disabled = true;
};
const btnPlayAgainOff = function () {
    btnPlayAgain.disabled = true;
}

//text functionality
const outputMsgDisplay = function (text) {
  outputMessage.textContent = text;
};

//game info and blur overlay functionality
let showModal = function () {
    popUp.classList.remove('hidden');
    popUpOverlay.classList.remove('hidden');
}
const closeModal = function () {
    popUp.classList.add('hidden');
    popUpOverlay.classList.add('hidden');
}


inputFieldOff();
btnCheckOff();
btnPlayAgainOff();
showModal();



// game Decision
const compareResult = function() {
 
    let guessedNumber = Number(document.querySelector(".guesses").value);

    //when no guess or guess is out of range
    if (!guessedNumber || guessedNumber < 0 || guessedNumber > lastRangeValue) {
      outputMsgDisplay(`💥 Enter a number between 1 and ${lastRangeValue}`);
      scoreNum--;
      scoreValue.textContent = scoreNum;
      if (scoreNum < 1) {
        outputMsgDisplay('😞🙄 Game over')
        scoreNum = 0;
        scoreValue.textContent = scoreNum;
        btnCheckOff();
        inputFieldOff();
        hiddenNumber.style.boxShadow = '5px 3px 5px red';
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
      hiddenNumber.style.boxShadow = '5px 3px 5px #07f72b';
    } //when guess is wrong 
    else if (guessedNumber !== randomDigits) {
      outputMsgDisplay(
        guessedNumber > randomDigits ? "📈 Too high" : "📉 Too low"
      );
      scoreNum--;
      scoreValue.textContent = scoreNum;
      if (scoreNum < 1) {
        outputMsgDisplay('😞 Game over')
        scoreNum = 0;
        scoreValue.textContent = scoreNum;
        btnCheckOff();
        inputFieldOff();
        hiddenNumber.style.boxShadow = '5px 3px 5px red';
      }
    }
   
}


// /**--------------------------------------------Event functionality------------------------------------------------ */
//                               /*---------------------1 and 20---------------*/

btn1N20.addEventListener('click', function() {
  lastRangeValue = 20;
  subHeading.textContent = `between 1 and ${lastRangeValue}`;
  hiddenNumber.textContent = '?';
  hiddenNumber.style.boxShadow = 'initial';
  outputMsgDisplay('Start guessing...');


  inputFieldOn();
  btnCheckOn();
  btnPlayAgainOn();

  randomDigits = Math.trunc(Math.random() * 20) + 1;  //try put this in a function and set the multiplier to lastRangeNumber
  scoreNum = 20;
  scoreValue.textContent = scoreNum;
  highscoreNum = 0;
  highScoreValue.textContent = 0;

  btnCheck.addEventListener('click', compareResult);

  
  //Play again functionality
  btnPlayAgain.addEventListener('click', function() {
    randomDigits = Math.trunc(Math.random() * 20) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    scoreNum = 20;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();

  })

  //Play again functionality for small screens - refractor later
  btnPAgain.addEventListener('click', function() {
    randomDigits = Math.trunc(Math.random() * 20) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    scoreNum = 20;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();

  })
})
// btnPlayAgain.addEventListener('click', playAgain);


                               /*---------------------1 and 50---------------*/

btn1N50.addEventListener('click', function() {
  lastRangeValue = 50;
  subHeading.textContent = `between 1 and ${lastRangeValue}`;
  hiddenNumber.textContent = '?';
  hiddenNumber.style.boxShadow = 'initial';
  outputMsgDisplay('Start guessing...');


  inputFieldOn();
  btnCheckOn();
  btnPlayAgainOn();

  randomDigits = Math.trunc(Math.random() * 50) + 1;
  scoreNum = 15;
  scoreValue.textContent = scoreNum;
  highscoreNum = 0;
  highScoreValue.textContent = 0;

  btnCheck.addEventListener('click', compareResult)

  
  //Play again functionality
  btnPlayAgain.addEventListener('click', function () {
    randomDigits = Math.trunc(Math.random() * 50) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    
    scoreNum = 15;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();

  })

  //Play again functionality for small screens - refractor later
  btnPAgain.addEventListener('click', function() {
    randomDigits = Math.trunc(Math.random() * 50) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    scoreNum = 15;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();

  })
})


//                               /*---------------------1 and 100---------------*/

btn1N100.addEventListener('click', function() {
  lastRangeValue = 100;
  subHeading.textContent = `between 1 and ${lastRangeValue}`;
  hiddenNumber.textContent = '?';
  hiddenNumber.style.boxShadow = 'initial';
  outputMsgDisplay('Start guessing...');

  inputFieldOn();
  btnCheckOn();
  btnPlayAgainOn();

  randomDigits = Math.trunc(Math.random() * 100) + 1;  //try put this in a function and set the multiplier to lastRangeNumber
  scoreNum = 10;
  scoreValue.textContent = scoreNum;
  highscoreNum = 0;
  highScoreValue.textContent = 0;

  btnCheck.addEventListener('click', compareResult);

  
  //Play again functionality - refractor later
  btnPlayAgain.addEventListener('click', function() {
    randomDigits = Math.trunc(Math.random() * 100) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    scoreNum = 10;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();
  })

  //Play again functionality for small screens - refractor later
  btnPAgain.addEventListener('click', function() {
    randomDigits = Math.trunc(Math.random() * 100) + 1;
    hiddenNumber.textContent = '?';

    outputMsgDisplay('Start guessing...');

    scoreNum = 10;   //further examination
    scoreValue.textContent = scoreNum;

    hiddenNumber.style.boxShadow = 'initial';

    inputFieldOn();
    btnCheckOn();

  })
})

gameInfoBtn.addEventListener('click', showModal)
popUpCloseBtn.addEventListener('click', closeModal)
popUpOverlay.addEventListener('click', closeModal)


const dblTap = document.querySelector('.dbl-tap');
const jhgInitials = document.getElementById('JhG');


/** slider functionality 
 * will have to improve this.
*/
const rangeMenu = document.querySelector('.dropdown-container');

const showAside = function() {
    rangeMenu.classList.remove('slider');
    jhgInitials.style.zIndex = '2';
    
  }
  const closeAside = function() {
    rangeMenu.classList.add('slider');
}

dblTap.addEventListener('dblclick', showAside);
window.addEventListener('click', closeAside);





























































































// const rangeB = document.querySelectorAll('.between');

// const range = function() {
//   for (let i = 0; i < rangeB; i++) {
//     if (rangeB[i] == 0) return 20;
//     else if (rangeB[i] == 1) return 50;
//     else if (rangeB[i] == 2) return 100
//   }
// }

// rangeB.addEventListener('click', range);


















/**-------------------------------------------THE END----------------------------------------------------------------------- */



// /**--------------------------------------------Event functionality------------------------------------------------ */
//                               /*---------------------1 and 20---------------*/
// btn1N20.addEventListener("click", function () {
//   subHeading.textContent = "between 1 and 20";

//   inputFieldOn();
//   btnCheckOn();
//   btnPlayAgainOn();

//   //generating randomDigits
//   let randomDigits;
//   randomDigits = Math.trunc(Math.random() * 20) + 1;
//   console.log(randomDigits);

//   //Score and Highscore
//   let scoreNum = 20;
//   scoreValue.textContent = scoreNum;

//   let highscoreNum = 0;
//   highScoreValue.textContent = highscoreNum;

//   //check button event
//   btnCheck.addEventListener("click", function () {
//     console.log('still running');
//     let guessedNumber = Number(document.querySelector(".guesses").value);

//     //when no guess or guess is out of range
//     if (!guessedNumber || guessedNumber < 0 || guessedNumber > 20) {
//       outputMsgDisplay("💥 Enter a number between 1 and 20");
//       scoreNum--;
//       scoreValue.textContent = scoreNum;
//       if (scoreNum < 1) {
//         outputMsgDisplay('😞 Game over')
//         scoreNum = 0;
//         scoreValue.textContent = scoreNum;
//         btnCheckOff();
//         inputFieldOff();
//       }
//     } //when guess is correct
//     else if (guessedNumber === randomDigits) {
//       outputMsgDisplay("🍾 Yayy!!! Correct number!");
//       btnCheckOff();
//       inputFieldOff();
//       hiddenNumber.textContent = randomDigits;
//       if (highscoreNum < scoreNum) {
//         highscoreNum = scoreNum;
//         highScoreValue.textContent = highscoreNum;
//       }
//     } //when guess is wrong 
//     else if (guessedNumber !== randomDigits) {
//       outputMsgDisplay(
//         guessedNumber > randomDigits ? "📈 Too high" : "📉 Too low"
//       );
//       scoreNum--;
//       scoreValue.textContent = scoreNum;
//       if (scoreNum < 1) {
//         outputMsgDisplay('😞 Game over')
//         scoreNum = 0;
//         scoreValue.textContent = scoreNum;
//         btnCheckOff();
//         inputFieldOff();
//       }
//     }
//   });

//   btnPlayAgain.addEventListener("click", function () {
//     randomDigits = Math.trunc(Math.random() * 20) + 1;
//     hiddenNumber.textContent = '?';

//     inputFieldOn();
//     btnCheckOn();
//     outputMsgDisplay('Start guessing...');

//     scoreNum = 20;
//     scoreValue.textContent = scoreNum;

//     console.log(randomDigits + ' from 1 to 20');
//   });
// });


//                               /*---------------------1 and 50---------------*/
// btn1N50.addEventListener('click', function() {
//   subHeading.textContent = "between 1 and 50";

//   inputFieldOn();
//   btnCheckOn();
//   btnPlayAgainOn();

//   //generating randomDigits
//   let randomDigits;
//   randomDigits = Math.trunc(Math.random() * 50) + 1;
//   console.log(randomDigits);

//   //Score and Highscore
//   let scoreNum = 15;
//   scoreValue.textContent = scoreNum;

//   let highscoreNum = 0;
//   highScoreValue.textContent = highscoreNum;

//   //check button event
//   btnCheck.addEventListener('click', function() {
//     console.log('hi there');
//   })
//   console.log(scoreNum);
// })



                              /*---------------------1 and 100---------------*/


