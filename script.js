//Generate a random Computer Choice
function getComputerChoice(){
    let computerChoices = ['rock', 'paper', 'scissor'];
    let randomChoices = computerChoices[Math.floor(Math.random()* computerChoices.length)];

    return randomChoices;
};
// Record the Scores
let playerScore = 0;
let computerScore = 0;

// The Game Function
function playRound(playerSelection, computerSelection){
     if (playerSelection == 'rock'){
        if(computerSelection =='paper'){
            computerScore += 1;
            return 'You lose! Paper beats Rock';
        }
        else if (computerSelection == 'scissor'){
            playerScore += 1;
            return 'You Win! Rock beats Scissor';
        }
        else {
            return 'Its a Tie! Rock and Rock';
        };
     }
     else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            playerScore += 1;
            return 'You Win! Paper beats Rock';
        }
        else if (computerSelection == 'scissor'){
            computerScore += 1;
            return 'You Lose! Scissor beats Paper';
        }
        else {
            return 'Its a Tie! Paper and Paper';
        };
     }
     else {
        if (computerSelection == 'rock'){
            computerScore += 1;
            return 'You Lose! Rock beats Scissor';
        }
        else if (computerSelection == 'paper'){
            playerScore += 1;
            return 'You Win! Scissor beats Paper';
        }
        else{
            return 'Its a Tie! Scissor and Scissor';
        };
     };
 };

 

// Declare variables for computer and player choice
let playerInput = prompt('Will you play Rock , paper or Scissor?');
const playerSelection = playerInput.toLowerCase();
const computerSelection = getComputerChoice();
 
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore, computerScore);







  