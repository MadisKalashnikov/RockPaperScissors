// choices array
let choice = ["Rock", "Paper", "Scissors"];
// computer choice
let getComputerChoice = (arr) => {
	let randomNumber = Math.floor(Math.random() * arr.length);
	return arr[randomNumber].toLowerCase();
}
let playRockPaperScissors = () => {
	let playerSelection = prompt("choose your weapon", "rock").toLowerCase();
	let computerSelection = getComputerChoice(choice)
	console.log(playerSelection, computerSelection)
	if (playerSelection === "paper" && computerSelection === "rock") {
		return "You Win!"
	} else if(playerSelection === "rock" && computerSelection === "scissors") {
		return "You Win!"
	} else if(playerSelection === "scissors" && computerSelection === "paper") {
		return "You Win!"
	} else if(playerSelection === computerSelection) {
		return "It's A Draw!"
	} else {
		return "Computer Wins!"
	}
	
	

}
console.log(playRockPaperScissors())