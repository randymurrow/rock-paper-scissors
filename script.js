let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
    let choices = document.querySelectorAll(".choice");
    choices.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        })
    });  
});

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
    console.log(computerChoice);
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let roundOutcome = ": ";
    if (humanChoice === computerChoice) {
        roundOutcome += "Tie!";
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        humanScore++;
        roundOutcome += `You win! ${humanChoice} beats ${computerChoice}`

    } else {
        computerScore++;
        roundOutcome += `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    round = document.querySelector("#roundOutcome");
    round.textContent = roundOutcome;
    console.log(roundOutcome);
    let score = `You: ${humanScore}\nComputer: ${computerScore}`;
    document.querySelector("#humanScore").textContent = `Your Score: ${humanScore}`;
    document.querySelector("#computerScore").textContent = `Computer Score: ${computerScore}`;
    console.log(score);
}


// function playGame() {
    
//     // //Limit game to five rounds
//     // for (let i = 0; i < 5; i++) {
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//     // }

//     //Declare winner at the end
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (computerScore > humanScore) {
//         console.log("Computer wins the game!");
//     } else {
//         console.log("Game is a tie!");
//     }
// }

// playGame()