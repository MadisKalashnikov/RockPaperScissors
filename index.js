// choices array
let choice = ["Rock", "Paper", "Scissors"];
// initialize scores
let playerScore = 0
let computerScore = 0
// computer choice
let getComputerChoice = (arr) => {
	let randomNumber = Math.floor(Math.random() * arr.length);
	return arr[randomNumber].toLowerCase();
}
// play a round of rock paper scissors
let playRockPaperScissors = () => {
	// prompt user for input
	let playerSelection = prompt("choose your weapon", "rock").toLowerCase();
	// get computer choice
	let computerSelection = getComputerChoice(choice)
	// console log both choices
	console.log(`player chose ${playerSelection}, computer chose ${computerSelection}` )
	// main game logic
	if (playerSelection === "paper" && computerSelection === "rock") {
		return playerScore += 1
	} else if(playerSelection === "rock" && computerSelection === "scissors") {
		return playerScore += 1
	} else if(playerSelection === "scissors" && computerSelection === "paper") {
		return playerScore += 1
	} else if(playerSelection === computerSelection) {
		return "Draw"
	} else {
		return computerScore += 1
	}
}
// play a best of five
let game = () => {
	// while neither player has won, play a round
	while (playerScore !== 3 || computerScore !== 3) {
		// if someone won, set scores to 0 and announce winner
		if (playerScore === 3) {
			playerScore = 0
			computerScore = 0
			return "User won the match!"
		} else if (computerScore === 3) {
			computerScore = 0
			playerScore = 0
			return "Computer won the match"
		}
		playRockPaperScissors()
		console.log(`player score is ${playerScore} | computer score is ${computerScore}`)
	}
}