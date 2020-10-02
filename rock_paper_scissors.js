
// get user input
const userInput = 'bomb'

// write function to validate user input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {return userInput}
else {console.log('Error: please enter rock, paper, or scissors.')};
};

// function to get computer choice
const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3) ) {
  case 0 : return 'rock';
  case 1 : return 'paper';
  case 2 : return 'scissors';
  default: return 'error';}
};

// function to determine winner
const determineWinner = (userChoice, computerChoice) =>
  {if (userChoice === computerChoice){return ('Tie!')} 
  else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
     (computerChoice === 'paper' && userChoice === 'scissors') || 
     (computerChoice === 'scissors' && userChoice === 'rock') || (userChoice === 'bomb')) {return ('You Win!')} else {
    return('You Lose!')
  };
};

// function to get the user & computer choices
const playGame = () => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice))
};

// calling the function to play the game.
playGame();

