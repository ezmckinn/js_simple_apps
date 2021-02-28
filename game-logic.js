// RPS 99 testing envt

// initialize variables

let playerOneMoveOneType = undefined;
let playerTwoMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerTwoMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerTwoMoveThreeType = undefined;

let playerOneMoveOneValue = undefined;
let playerTwoMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveThreeValue = undefined;


//set valid parameters

const validRounds = [1,2,3]; 
const validMoves = ['rock','paper','scissors'];
const validPlayers = ['Player One','Player Two'];

 // array for parameters to check later

// define functions

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    /* Improve this sequence with a map() function
    function checkType(obj, type){if(typeof obj === type) {return true}};

    let types = [moveOneType, moveTwoType, moveThreeType]
    let values = [moveOneValue, moveTwoValue, moveThreeValue]
    if ((types.map(checkType('string')).includes(false) === false) && 
      (types.map(checkType('number')).includes(false) === false))
    */

    if(validPlayers.includes(player) && 
    validMoves.includes(moveOneType) &&  
    typeof moveOneValue === 'number' && moveOneValue >= 1 && moveOneValue <= 99 &&
    validMoves.includes(moveTwoType) && 
    typeof moveTwoValue === 'number' && moveTwoValue >= 1 && moveTwoValue <= 99 &&
    validMoves.includes(moveThreeType) && 
    typeof moveThreeValue === 'number' && moveThreeValue >= 1 && moveThreeValue <= 99 &&
    moveOneValue + moveTwoValue + moveThreeValue <= 99
    ) {

    if (player === 'Player One') {

        moveOneType ? playerOneMoveOneType = moveOneType : undefined; // sets undefined for playerOneMoveOneType if no value is passed
        moveOneValue ? playerOneMoveOneValue = moveOneValue : undefined; 
        moveTwoType ? playerOneMoveTwoType = moveTwoType : undefined;
        moveTwoValue ? playerOneMoveTwoValue = moveTwoValue : undefined;
        moveThreeType ? playerOneMoveThreeType = moveThreeType : undefined;
        moveThreeValue ? playerOneMoveThreeValue = moveThreeValue : undefined;

    } else if (player === 'Player Two') {

        moveOneType ? playerTwoMoveOneType = moveOneType : undefined; // sets undefined for playerOneMoveOneType if no value is passed
        moveOneValue ? playerTwoMoveOneValue = moveOneValue : undefined;
        moveTwoType ? playerTwoMoveTwoType = moveTwoType : undefined;
        moveTwoValue ? playerTwoMoveTwoValue = moveTwoValue : undefined;
        moveThreeType ? playerTwoMoveThreeType = moveThreeType : undefined;
        moveThreeValue ? playerTwoMoveThreeValue = moveThreeValue : undefined;
    };
    
};

};

function getRoundWinner(round) {

    // switch function to set which move based on the round
    
    let playerOneType;
    let playerTwoType;
    let playerOneValue;
    let playerTwoValue;

    switch(round){
        case 1:
            playerOneType = playerOneMoveOneType;
            playerTwoType = playerTwoMoveOneType;
            playerOneValue = playerOneMoveOneValue;
            playerTwoValue = playerTwoMoveOneValue;
        break;

        case 2:
            playerOneType = playerOneMoveTwoType;
            playerTwoType = playerTwoMoveTwoType;
            playerOneValue = playerOneMoveTwoValue;
            playerTwoValue = playerTwoMoveTwoValue;
        break;

        case 3:
            playerOneType = playerOneMoveThreeType;
            playerTwoType = playerTwoMoveThreeType;
            playerOneValue = playerOneMoveThreeValue;
            playerTwoValue = playerTwoMoveThreeValue;
        break;

        default:
            null
        break;
    };

    if(validRounds.includes(round) && playerOneType && playerTwoType && playerOneValue && playerTwoValue) { // make sure that round is 1,2, or 3 (or return null below)

        // win by type
    if ((playerOneType === 'rock' && playerTwoType === 'scissors') ||
        (playerOneType === 'paper' && playerTwoType === 'rock') ||
        (playerOneType === 'scissors' && playerTwoType === 'paper')) {return 'Player One'} else
    if ((playerTwoType === 'rock' && playerOneType === 'scissors') ||
        (playerTwoType === 'paper' && playerOneType === 'rock') ||
        (playerTwoType === 'scissors' && playerOneType === 'paper')) {return 'Player Two'} else
        // win by value   
    if (playerTwoType === playerOneType){
        if(playerOneValue > playerTwoValue) {return 'Player One'} else 
        if(playerOneValue === playerTwoValue) {return 'Tie'} else
        if(playerOneValue < playerTwoValue) {return 'Player Two'}
    }} else {return null} 
    ;
};

function getGameWinner() {

    let params = [playerOneMoveOneType, playerTwoMoveOneType, 
        playerOneMoveTwoType, playerTwoMoveTwoType, 
        playerOneMoveThreeType, playerTwoMoveThreeType,
        playerOneMoveOneValue, playerTwoMoveOneValue,
        playerOneMoveTwoValue, playerTwoMoveTwoValue,
        playerOneMoveThreeValue, playerTwoMoveThreeValue];


    if (params.includes(undefined)){return null} else { 

    let playerOneWinCount = 0;
    let playerTwoWinCount = 0;

    for (i = 0; i < validRounds.length; i++) {
        if (getRoundWinner(validRounds[i]) === 'Player One') {playerOneWinCount += 1} else
        if (getRoundWinner(validRounds[i]) === 'Player Two') {playerTwoWinCount += 1} else
        if (getRoundWinner(validRounds[i] === 'Tie')) {playerOneWinCount += 0; playerTwoWinCount += 0};

    };

   if (playerOneWinCount > playerTwoWinCount) {return 'Player One'} else
   if (playerOneWinCount < playerTwoWinCount) {return 'Player Two'} else
   if (playerOneWinCount === playerTwoWinCount) {return 'Tie'};

}
};

function setComputerMoves() {
    let typeOne = (Math.floor(Math.random() * validMoves.length));
    let typeTwo = (Math.floor(Math.random() * validMoves.length));
    let typeThree = (Math.floor(Math.random() * validMoves.length));

    playerTwoMoveOneType = validMoves[typeOne]; //choose types at random
    playerTwoMoveTwoType = validMoves[typeTwo];
    playerTwoMoveThreeType = validMoves[typeThree];

    playerTwoMoveOneValue = Math.floor(Math.random()*99); // choose values at random, constraining them to sum to less than 99
    playerTwoMoveTwoValue = Math.floor(Math.random() * (99 - playerTwoMoveOneValue)) ;
    playerTwoMoveThreeValue = (99 - playerTwoMoveOneValue - playerTwoMoveTwoValue);


};

