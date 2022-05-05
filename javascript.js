
let options = ["Rock", "Paper", "Scissors"]

let computerPlay, 
	compScore,
	playerSelect,  
	userScore;

computerPlay = options[(Math.random() * options.length) | 0];

console.log("Your opponent chose " + computerPlay);

function game() {
	playerSelect = prompt("Rock, Paper, or Scissors?");
	if (playerSelect != options[0] || playerSelect != options[1] || playerSelect != options[2]) {
		alert("You need to pick Rock, Paper, or Scissors");
	} else if (playerSelect === options[0,1,2]) {
		console.log("You chose " + playerSelect)
	}

}
game();



