// choices array
let choice = ["Rock", "Paper", "Scissors"]
// computer choice
let getComputerChoice = (arr) => {
	let randomNumber = Math.floor(Math.random() * arr.length)
	return arr[randomNumber]
}
console.log(getComputerChoice(choice))