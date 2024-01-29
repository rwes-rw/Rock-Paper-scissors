/* Create a rock paper scissors game.
Steps:

1. Create a function that can randomly return the three choices at random by the computer.
2. Create combo conditions for all win or lose interactions by a scoring system of five
between computer and player.
3. Write string messages of who won, either computer or player.
4. use && to signifty human and computer choices by IF and Else.
5. Plug functions into one "game" function for a round of five. 

*/

function getComputerChoice () {
let randomOptions = ['rock' , 'paper' , 'scissors'];
return randomOptions[Math.floor(Math.random() * randomOptions.length)];
}

let computerScore = 0
let playerScore = 0

function playRound (playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
    computerScore++
    return 'You lose! Paper beats rock. ' + 'Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win! Scissors beats rock.' + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper beats rock.' + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return 'You lose! Scissors beat paper.' + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return 'You lose! Rock beats scissors.' + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors beat paper.' + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
} else if (playerSelection === computerSelection) {
    playerScore++
    computerScore++
    return "It's a tie, try again! "  + ' Computer Score: ' + computerScore + ' Player Score: ' + playerScore
}
    else 'not applicable'
  
}

/* Create a function that will keep score between the computer and the player. 
1. name the variables CompScore and playerScore.
2. make the two variable be able to add points starting from zero
3. track score using loops
5. program a round of 5 with a winner or loser message to along
*/

function game () {
    for(let i = 0; i <= 4; i++) {
    const playerSelection = prompt("Input your selection");
    if (playerSelection === "rock") 
    {console.log ("Player chose rock");
    } else if (playerSelection === "paper") {
        console.log ("Player chose paper");
    } else if (playerSelection === "scissors") {
        console.log ("Player chose scissors");
    } else console.log ();
    const computerSelection = getComputerChoice (); 
    console.log ('Compter chose: ' + computerSelection);
    console.log(playRound (playerSelection, computerSelection));
    if (playerScore === 4) { 
        console.log ('Player Wins the game!');
    } else if (computerScore === 4) {
        console.log ('Computer wins the game!');
    } else if (playerSelection === null) {
        break;
    }
}
}

game ()