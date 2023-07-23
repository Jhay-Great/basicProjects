'use strict'

//--------BUG FIXES--------
/**
 * fix conflicting random numbers between the various ranges.
 * when a range is changed whiles not complete its number should be void or null afterwards so the old random number does not get interfere with the new random number as well as input box and check button functionality.
 * 
 * In other words, random number should be set to null before the new one is set so if guess is equal to previous random number the program would fault.
 */


//variables
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.play-again');
const pAgainBtn = document.querySelector('.pAgain'); //mobile button
const gameInfoBtn = document.querySelector('.game-info');

const subTitle = document.querySelector('h2');
const comment =  document.querySelector('.message');
const mainContent = document.querySelector('.content');
const popUp = document.querySelector('.pop-up');
const popUpOverlay = document.querySelector('.blur');
const popUpCloseBtn = document.querySelector('.close-btn');

let secretNumber = document.querySelector('.secret-number');
let scoreNumber = document.querySelector('.score');
let highScoreNumber = document.querySelector('.highscore');
let guessBox = document.querySelector('.guesses');



//Simple functionality
const showMessage = function (message) {
    comment.textContent = message;
}
const checkBtnOn = function() {
    checkBtn.disabled = false;
}
const checkBtnOff = function() {
    checkBtn.disabled = true;
}
const inputBoxOff = function() {
    guessBox.disabled = true;
} 
const inputBoxOn = function() {
    guessBox.value = "";
    guessBox.disabled = false;
} 


//game info and blur overlay functionality
let showModal = function () {
    popUp.classList.remove('hidden');
    popUpOverlay.classList.remove('hidden');
}
const closeModal = function () {
    popUp.classList.add('hidden');
    popUpOverlay.classList.add('hidden');
}

gameInfoBtn.addEventListener('click', showModal)
popUpCloseBtn.addEventListener('click', closeModal)
popUpOverlay.addEventListener('click', closeModal)






/** slider functionality 
 * will have to improve this.
*/
const swipe = document.querySelector('.dropdown-container');

const showAside = function() {
    swipe.classList.remove('slider');
}
const closeAside = function() {
    swipe.classList.add('slider');
}

document.querySelector('body').addEventListener('dblclick', showAside);


window.addEventListener('click', closeAside);

checkBtnOff();
inputBoxOff();



/*------------------------------------------Between 1 and 20---------------------------------------------*/ 
const btn1To20 = document.getElementById('oneToTwenty');

btn1To20.addEventListener('click', function() {
    subTitle.textContent = 'between 1 and 20';

    checkBtnOn();
    inputBoxOn();

    //random number implementation
    let randomNumber = Math.trunc(Math.random () * 20) + 1;
    console.log(randomNumber);

    //Score and highscore implementation
    let score = 20;
    let highScore = 0;
    scoreNumber.textContent = score;

    
    checkBtn.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guesses').value);
    
        //no guess 
        if (!guess || guess < 0 || guess > 20) {
            showMessage('Enter a number between 1 and 20');
            score--;
            scoreNumber.textContent = score;
            if (score < 1) {
                showMessage('💥 Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
        }
        //correct guess
        else if (guess === randomNumber) {
            showMessage('🎊🎉🍾Yay!!! Correct number');
            checkBtnOff();
            secretNumber.textContent = randomNumber;
            if (highScore < score) {
                highScore = score;
                highScoreNumber.textContent = highScore;
            }
            inputBoxOff();
            
            
        }
        //wrong guess
        else if(guess !== randomNumber) {
            if (score > 1) {
                showMessage(guess > randomNumber ? '📈😔 Too high' : '📉😔 Too low');
                score--;
                scoreNumber.textContent = score;
                
            }else {
                showMessage('💥Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
            
        }
    
    })

    //play again functionality
    againBtn.addEventListener('click', function() {
        randomNumber = Math.trunc(Math.random () * 20) + 1;
        secretNumber.textContent = '?';
        
        showMessage('Start guessing...');
        
        score = 20;
        scoreNumber.textContent = score;
        
        checkBtnOn();
        
        inputBoxOn();
    })




    /* -----------------------FOR RESPONSIVENESS-------------------- */

    //play again functionality
    
    pAgainBtn.addEventListener('click', function() {
        randomNumber = Math.trunc(Math.random () * 20) + 1;
        secretNumber.textContent = '?';
        
        showMessage('Start guessing...');

        score = 20;
        scoreNumber.textContent = score;

        checkBtnOn();

        inputBoxOn();

    })

})




/*------------------------------------------Between 1 and 50---------------------------------------------*/ 

const btn1To50 = document.getElementById('oneToFifty');
// console.log(btn1To50);

//event listener: on selection
btn1To50.addEventListener('click', function() {
    subTitle.textContent = 'between 1 and 50';

    //random number implementation
    let randomNumber 
    // = Math.trunc(Math.random () * 50) + 1;
    // console.log(randomNumber);

    // checkBtnOn();
    // inputBoxOn();

    //Score and highscore implementation
    let score = 15;
    let highScore = 0;
    scoreNumber.textContent = score;
    highScoreNumber.textContent = highScore;

    let reset1To50 = function() {
        randomNumber = Math.trunc(Math.random () * 50) + 1;
        secretNumber.textContent = '?';
        
        showMessage('Start guessing...');

        score = 15;
        scoreNumber.textContent = score;

        checkBtnOn();

        inputBoxOn();

    }
    reset1To50();

    //listiening to events
    checkBtn.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guesses').value);

        if (!guess || guess > 50 || guess < 0) {
            showMessage('Enter number between the given range');
            score--;
            scoreNumber.textContent = score;
            if (score < 1) {
                showMessage('💥 Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
        }
        else if (guess === randomNumber) {
            showMessage('🍾 Yahhh!!! Correct number');
            checkBtnOff();
            secretNumber.textContent = randomNumber;
            if (highScore < score) {
                highScore = score;
                highScoreNumber.textContent = highScore;
            }
            inputBoxOff();
        }
        else if (guess !== randomNumber) {
            if (score > 1) {
                showMessage(guess > randomNumber ? '📈😔 Too high' : '📉😔 Too low');
                score--;
                scoreNumber.textContent = score;
                
            }else {
                showMessage('💥Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
        }
    })

    //play again functionality
    againBtn.addEventListener('click', reset1To50)

    /* --------------------FOR RESPONSIVENESS------------------- */

    //play again functionality
    
    pAgainBtn.addEventListener('click', reset1To50)



})



/*-----------------------------------------Between 1 and 100--------------------------------------------*/ 

const btn1To100 = document.getElementById('oneToHundred');
// console.log(btn1To100);


//event listener: on selection
btn1To100.addEventListener('click', function() {
    subTitle.textContent = 'between 1 and 100';
    
    //Score and highscore implementation
    let score = 10;
    let highScore = 0;
    scoreNumber.textContent = score;
    highScoreNumber.textContent = highScore;

    //random number implementation
    let randomNumber;

    let reset1To100 = function() {
        randomNumber = Math.trunc(Math.random () * 100) + 1;
        // console.log(randomNumber + 'from reset1To100 func');
        secretNumber.textContent = '?';
        
        showMessage('Start guessing...');
        
        //BUG FIXES: this is a repetition kindly examine it later
        score = 10;
        scoreNumber.textContent = score;
        
        checkBtnOn();
        
        inputBoxOn();
    }
    reset1To100();
    // let randomNumber = Math.trunc(Math.random () * 100) + 1;
    // console.log(randomNumber);
    // checkBtnOn();
    // inputBoxOn();

    //listiening to events: comparison 
    checkBtn.addEventListener('click', function() {
        let guess = Number(document.querySelector('.guesses').value);

        if (!guess || guess > 100 || guess < 0) {
            showMessage('Wrong input');
            score--;
            scoreNumber.textContent = score;
            if (score < 1) {
                showMessage('💥 Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
        }
        else if (guess === randomNumber) {
            showMessage('🍾 Ehhhyyy!!! Correct number');
            checkBtnOff();
            secretNumber.textContent = randomNumber;
            if (highScore < score) {
                highScore = score;
                highScoreNumber.textContent = highScore;
            }
            inputBoxOff();
        }
        else if (guess !== randomNumber) {
            if (score > 1) {
                showMessage(guess > randomNumber ? '📈😔 Too high' : '📉😔 Too low');
                score--;
                scoreNumber.textContent = score;
                
            }else {
                showMessage('💥Game over!!!');
                scoreNumber.textContent = 0;
                checkBtnOff();
                inputBoxOff();
            }
        }
    })

    //play again functionality
    againBtn.addEventListener('click', reset1To100)


    /* ---------------------------------FOR RESPONSIVENESS--------------------------------------- */

    //play again functionality
    pAgainBtn.addEventListener('click', reset1To100)

})


























































































/**-----------------------------NOT NECESSARYY--------------------------- */
// console.log(score);

// if (guess > randomNumber) {
            //     showMessage('📈😔 Too high');
            //     score--;
            //     scoreNumber.textContent = score;
            // }else {
            //     showMessage('📉😔 Too low');
            //     score--;
            //     scoreNumber.textContent = score;
            // }

//was working check why
        // if (score > 1) {
        //     //guess greater than random number
        //     // if (guess > randomNumber) {
        //     //     showMessage('📈😔 Too high');
        //     //     score--;
        //     //     scoreNumber.textContent = score;
        //     // }else { //guess is lesser than random number
        //     //     showMessage('📉😔 Too low');
        //     //     score--;
        //     //     scoreNumber.textContent = score;
        //     // }
        // }
        // else {
        //     showMessage('Game over!!!')
        //     score = 0;
        //     scoreNumber.textContent = score;
        // }


