// choices array
let choice = ["Rock", "Paper", "Scissors"];
// initialize scores
let playerScore = 0;
let computerScore = 0;
// get images
const playerImg = document.querySelector("#playerChoice");
const computerImg = document.querySelector("#computerChoice");
// choose game mode
const gameModesSection = document.querySelector(".game-mode");
let gameModeChose = 0;
// game board
const gameBoardSection = document.querySelector(".game-board");
// game choices
const gameChoiceSection = document.querySelector(".game-choice");
// game options
const gameOptionsSection = document.querySelector(".game-option");
// for announcing the winner	
const announceWinner = document.querySelector("#announceWinner");
// show game modes
const showModes = () => {
	gameModesSection.classList.add("active")
	gameModeChose = 0
	gameBoardSection.classList.remove("active")
	gameOptionsSection.classList.remove("active")
	announceWinner.textContent = ""
	resetScores();
}
// choose game mode
const gameMode = (e) => {
	showGameBoard();
	gameModeChose = parseInt(e.target.dataset.mode);
	return e.target.dataset.mode;
}
// for every game mode choice add click listener
const gameModes = document.querySelectorAll(".btn-mode")
Array.from(gameModes).forEach(mode => {
	mode.addEventListener("click", gameMode);
})
// show game board 
const showGameBoard = () => {
	gameModesSection.classList.remove("active");
	gameBoardSection.classList.add("active");
	gameChoiceSection.classList.add("active");
}
// hide choices 
const hideChoice = () => {
	gameChoiceSection.classList.remove("active");
	gameOptionsSection.classList.add("active");
	Array.from(weaponChoices).forEach(weaponChoice => {
		weaponChoice.removeEventListener("click", choose);
	})
}
// reset scores
const resetScores = () => {
	computerScore = 0;
	playerScore = 0;
	selectComputerScore.textContent = `Computer score is: ${computerScore}`;
	selectPlayerScore.textContent = `Player score is: ${playerScore}`;
	Array.from(weaponChoices).forEach(weaponChoice => {
		weaponChoice.addEventListener("click", choose);
	})
	console.log(computerScore, playerScore)
}
// choose option
const gameOptions = document.querySelectorAll(".btn-option");
const chooseOption = (e) => {
	const option = e.target.dataset.option
	console.log(option)
	if (option === "reset") {
		resetScores();
		showGameBoard();
		gameOptionsSection.classList.remove("active");
		announceWinner.textContent = "";
	} else if (option === "new") {
		resetScores();
		showModes();
	}
}
Array.from(gameOptions).forEach(option => {
	option.addEventListener("click", chooseOption);
});
// computer choice
const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * choice.length);
	return choice[randomNumber].toLowerCase();
}
// get score 
const selectPlayerScore = document.querySelector("#playerScore");
const selectComputerScore = document.querySelector("#computerScore");
// set score
selectComputerScore.textContent = `Computer score is: ${computerScore}`;
selectPlayerScore.textContent = `Player score is: ${playerScore}`;
// get weapon choices
const weaponChoices = document.querySelectorAll(".btn-choice");
// get player choice, change images for playchoice and computer choice
const choose = (e) => {
	// get clicked parent elements choice dataset
	const playerChoice = e.target.parentElement.dataset.choice;
	const computerChoice = getComputerChoice(choice);
	if (playerChoice === undefined) return;
	// choose image corresponding to choice
	playerImg.src=`./imgs/${playerChoice}.png`;
	computerImg.src=`./imgs/${computerChoice}.png`;
	// play a round
	playRockPaperScissors(playerChoice, computerChoice);
	// show scores
	selectComputerScore.textContent = `Computer score is: ${computerScore}`;
	selectPlayerScore.textContent = `Player score is: ${playerScore}`;
	// logic if someone wins
	if (playerScore === Math.ceil(gameModeChose / 2)) {
		announceWinner.textContent = "Player won";
		hideChoice();
	} else if (computerScore === Math.ceil(gameModeChose / 2)) {
		announceWinner.textContent = "Computer won";
		hideChoice();
	}
}
// for every weapon choice add event listener to change displayed img
	// turn htmlcollection into array
	Array.from(weaponChoices).forEach(weaponChoice => {
		weaponChoice.addEventListener("click", choose);
	})
// play a round of rock paper scissors
const playRockPaperScissors = (playerSelection, computerSelection) => {
	// main game logic
	if (playerSelection === "paper" && computerSelection === "rock") {
		return playerScore += 1;
	} else if(playerSelection === "rock" && computerSelection === "scissors") {
		return playerScore += 1;
	} else if(playerSelection === "scissors" && computerSelection === "paper") {
		return playerScore += 1;
	} else if(playerSelection === computerSelection) {
		return "Draw";
	} else {
		return computerScore += 1;
	}
}