// Number Game
// 
// First it will ask your maximum number.
// 
// Then it asks for your first guess.
// 
// It will tell you if you are too low or too high.
// 
// Once you have guessed correctly it will tell you how many guesses it took you.
// 
// Typing q will quit the game immediately

function log(item){console.log(item)};

// First it will ask your maximum number.

let max = prompt('Please enter a max value');

log(max);

let randomNum = Math.ceil(Math.random() * max);

// Then it asks for your first guess.

let guess = prompt('Please guess the Magic Number.')

// It will tell you if you are too low or too high.

for(let i = 1; guess !== randomNum; i++){
  if (guess == 'q'){
    break;
  }else if (guess == randomNum){
    prompt(`You Win with ${i} guesses`);
    break;
  }else if (guess > randomNum) {
    guess = prompt('Too High');
  }else {guess = prompt('Too Low')}
}





















