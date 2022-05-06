const options = ['rock','paper','scissors']

function computerPlay() {
	let compChoice = options[options.length * Math.random() | 0]
	return compChoice;
}

function playRound(playerSelection = prompt("Rock Paper Scissors"), computerSelection = computerPlay()) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	
	console.log("You chose: " + playerSelection);
	console.log("Your Opponent Chose " + computerSelection)
	
	if (computerSelection === playerSelection) {
		console.log("It's A Draw!")
	} else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
		console.log("You lose!");
	} else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
		console.log("You lose!");
	} else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
		console.log("You lose!");
	} else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
		console.log("You Win!");
	} else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
		console.log("You Win!");
	}  else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
		console.log("You Win!");
	} 
}

function playAgain() {
	answer = prompt("Would you like to play again?: ")
	if (answer == "y") {
		playRound();
	} else {
		console.log("thanks for playing");
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		computerPlay();
		playRound();
	}

}
game()