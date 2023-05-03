//Generate a Random Computer Choice
function getComputerChoice(){
    let computerChoices = ['rock', 'paper', 'scissor'];
    let randomChoices = computerChoices[Math.floor(Math.random()* computerChoices.length)];

    return randomChoices;
};
// Initialize the Scores
let playerScore = 0;
let computerScore = 0;

//Variables for Each Button and the Result Div
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorButton = document.getElementById("scissor-btn");
const resultDiv =document.getElementById("result");
const playerDiv = document.getElementById("playerScore");
const compDiv = document.getElementById("compScore");

// The Game Function and Conditions
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

//Event Listeners for each button
rockButton.addEventListener('click', ()=>{
const computerSelection = getComputerChoice();
const playerSelection = 'rock';
resultDiv.innerText=(playRound(playerSelection, computerSelection));
game();
playerDiv.innerText= "Your Score: " +playerScore;
compDiv.innerText= "Computer Score: " +computerScore; 
});

paperButton.addEventListener('click', ()=>{
const computerSelection = getComputerChoice();
const playerSelection = 'paper';
resultDiv.innerText=(playRound(playerSelection, computerSelection));
game();
playerDiv.innerText= "Your Score: " +playerScore;
compDiv.innerText= "Computer Score: " +computerScore; 
});

scissorButton.addEventListener('click', ()=>{
const computerSelection = getComputerChoice();
const playerSelection = 'scissor';
resultDiv.innerText=(playRound(playerSelection, computerSelection));
game();
playerDiv.innerText= "Your Score: " +playerScore;
compDiv.innerText= "Computer Score: " +computerScore; 
});

 // 5 Rounds of Game
function game(){
  
    // Loop
    if (playerScore>=5|| computerScore>=5){
        rockButton.setAttribute("disabled",1);
        paperButton.setAttribute("disabled",1);
        scissorButton.setAttribute("disabled",1);
        winGame();
    };
    
 };

 //Final Result Declaration
function winGame(){

    if(playerScore>computerScore){
        resultDiv.innerText= ('Result: You are the Winner');
    }
    else if ( computerScore>playerScore){
        resultDiv.innerText=('Result: The Winner is Computer');
    }
    else if (computerScore == playerScore){
        resultDiv.innerText= ('Result: This is a major Tie');
    };
};



 










  