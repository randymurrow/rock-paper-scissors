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
    // console.log("Human: " + humanChoice);
    // console.log("Computer: " + computerChoice);
    
    // Log result of game to console
    let outcome;
    comboRP = "Paper beats Rock"
    comboRS = "Rock beats Scissors"
    comboPS = "Scissors beats Paper"
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            outcome = "Tie!";
            console.log(outcome);
        } else if (computerChoice == "Paper") {
            outcome = "You lose!"
            console.log(outcome + " " + comboRP);
        } else {
            outcome = "You win!"
            console.log(outcome + " " + comboRS);
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            outcome = "You win!";
            console.log(outcome + " " + comboRP);
        } else if (computerChoice == "Paper") {
            outcome = "Tie!"
            console.log(outcome);
        } else {
            outcome = "You lose!"
            console.log(outcome + " " + comboPS);
        }        
    } else {
        if (computerChoice == "Rock") {
            outcome = "You lose!"
            console.log(outcome + " " + comboRS);
        } else if (computerChoice == "Paper") {
            outcome = "You win!";
            console.log(outcome + " " + comboPS);
        } else {
            outcome = "Tie!"
            console.log(outcome);
        }
    }
    // Increment winner's score
    if (outcome == "You win!") {
        ++humanScore;
    } else if (outcome == "You lose!") {
        ++computerScore;
    }

    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
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
    let winner;
    if (humanScore > computerScore) {
        winner = "You win the game!";
    } else if (computerScore > humanScore) {
        winner = "Computer wins the game!";
    } else {
        winner = "Overall tie!";
    }
    console.log(winner);

}

playGame()