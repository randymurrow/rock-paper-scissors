let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameOutcome;

function getComputerChoice() {
    let computerChoice;
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

document.addEventListener("DOMContentLoaded", () => {
    let choices = document.querySelectorAll(".choice");
    choices.forEach(button => {
        button.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
                round += 1;
                let humanChoice = button.textContent;
                let computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice, round);
            }
        })
    });
}); 

function playRound(humanChoice, computerChoice, round) {
    roundCount = `Round ${round}: `
    document.querySelector("#roundCount").textContent = roundCount;
    let roundOutcome;

    if (humanChoice === computerChoice) {
        roundOutcome = "Tie!";
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        humanScore++;
        roundOutcome = `You win! ${humanChoice} beats ${computerChoice}`

    } else {
        computerScore++;
        roundOutcome = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    if (humanScore === 5) {
        gameOutcome = "You win the game!";
    } else if (computerScore === 5) {
        gameOutcome = "Computer wins the game!";
    }

    document.querySelector("#roundOutcome").textContent = roundOutcome;
    document.querySelector("#humanScore").textContent = `Your Score: ${humanScore}`;
    document.querySelector("#computerScore").textContent = `Computer Score: ${computerScore}`;
    document.querySelector("#gameOutcome").textContent = gameOutcome;
}