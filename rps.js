// make a randomizer for the computers choice
// get the users input and convert it to the proper case
// compare the users input to the computers
// alert if the user has won lost, or tied

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    //generates a random number between 0 and 2
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getUserInput() {
    let userInput = prompt("Type Rock Paper or Scissors:");
    //get users input
    let playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    //converts users input to proper case to ignore case errors
    return playerSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    //determine the computers input
    if (playerSelection == computerSelection) {
        alert(playerSelection + " ties with " + computerSelection);
        return playerScore++;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        alert("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        alert("You Lose! " + computerSelection + " beats " + playerSelection);
        return computerScore++;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        alert("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        alert("You Lose! " + computerSelection + " beats " + playerSelection);
        return computerScore++;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        alert("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        alert("You Lose! " + computerSelection + " beats " + playerSelection);
        return computerScore++;
    }
    else {
        alert("An Error has occured")
    }
}

function game() {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
        playerSelection = getUserInput();
        playRound(playerSelection);
        alert("Player Score: " + playerScore + " Computer Score: " + computerScore);
    }
    else if (playerScore >= 5) {
        alert("You Win The Game!");
    }
    else if (computerScore >= 5) {
        alert("You Lose The Game!");
    }
    else {
        alert("error");
    }
}
