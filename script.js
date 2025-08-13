// GET random choice of "rock," "paper," or "scissors"
function getComputerChoice() {
    let computerChoice;
    // GET random number between 1 and 3
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        computerChoice = "Rock";
    } else if (num === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

// GET user input via prompt
function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors:");
    return humanChoice;
}

// Store user and computer scores
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(humanChoice, computerChoice) {
    // Make choices case-insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1).toLowerCase();
    
    // Log result of game to console
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    } else {
        ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log("Human: " + humanScore + "\nComputer: " + computerScore);
}

//Play a game of five rounds
function playGame() {
    
    //Iterate over the playRound function five times
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    //Declare winner at the end
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("Game is a tie!");
    }
}

playGame()