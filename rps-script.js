function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3)
    console.log(randomInt)
    if (randomInt == 0) {
        return "rock"
    } else if (randomInt == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase()
    if ((playerSelectionLower == "rock" && computerSelection == "scissors") || (playerSelectionLower == "paper" && computerSelection == "rock") || (playerSelectionLower == "scissors" && computerSelection == "paper")) {
        console.log("You win this round! " + playerSelection + " beats " + computerSelection)
        return 1
    } else if ((computerSelection == "rock" && playerSelectionLower == "scissors") || (computerSelection == "paper" && playerSelectionLower == "rock") || (computerSelection == "scissors" && playerSelectionLower == "paper")) {
        console.log("You lost this round! " + computerSelection + " beats " + playerSelection)
        return -1
    } else {
        console.log("Draw!")
    }
}


function game() {
    let playerScore = 0
    let computerScore = 0
    let counter = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please make your choice: ")
        const computerSelection = computerPlay();
        counter = playRound(playerSelection, computerSelection)
        if (counter == 1) {
            playerScore++
        } else if (counter == -1) {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log("You won!")
    } else if (computerScore < playerScore) {
        console.log("You lose!")
    } else {
        console.log("Tie game!")
    }
}

game()