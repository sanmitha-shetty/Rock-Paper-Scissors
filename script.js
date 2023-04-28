//Generate a random Computer Choice
function getComputerChoice(){
    let computerChoices = ['rock', 'paper', 'scissor'];
    let randomChoices = computerChoices[Math.floor(Math.random()* computerChoices.length)];

    return randomChoices;
};


// The Game Function
function playRound(playerSelection, computerSelection){
     if (playerSelection == 'rock'){
        if(computerSelection =='paper'){
            return 'You lose! Paper beats Rock';
        }
        else if (computerSelection == 'scissor'){
            return 'You Win! Rock beats Scissor';
        }
        else {
            return 'Its a Tie! Rock and Rock';
        };
     }
     else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            return 'You Win! Paper beats Rock';
        }
        else if (computerSelection == 'scissor'){
            return 'You Lose! Scissor beats Paper'
        }
        else {
            return 'Its a Tie! Paper and Paper';
        };
     }
     else {
        if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissor';
        }
        else if (computerSelection == 'paper'){
            return 'You Win! Scissor beats Paper';
        }
        else{
            return 'Its a Tie! Scissor and Scissor';
        };
     };
 };

 // Declare variables for computer and player choice
let playerInput = "Rock";
const playerSelection = playerInput.toLowerCase();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

 //Results
console.log(playRound(playerSelection, computerSelection));



  