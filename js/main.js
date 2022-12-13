const myBtn = document.querySelector('.resetName');
myBtn.addEventListener('click', myFunction);

const playerOneLabel = document.querySelector('.player1');
const playerTwoLabel = document.querySelector('.player2');

const winningMessageElement = document.getElementsByClassName('winningmessage')

let player1Points = 0;
let player2Points = 0;
let playerOneName = "";
let playerTwoName = "";
let currentPlayer = "X"

let playerTurn = 1;

let playfieldArray = [false, false, false, false, false, false, false, false, false];

const fields = document.querySelectorAll('.box');
console.log("fields: " + fields.length);



for(let i = 0; i < fields.length;  i++){
    const field = fields[i];
    
    console.log(field);
    field.textContent = "";
	field.addEventListener('click', function() {
		boxClicked(i);
	});


}
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];



function boxClicked(index) {
	if (playerTurn == 1) {
		//speler 1(X)
		currentPlayer = "X";
		playerTurn = 2;
	} else if (playerTurn == 2) {
		//speler 2 (O)
		currentPlayer = "O";
		playerTurn = 1;
	}

	const field = fields[index];

	field.textContent = currentPlayer;


}



function changePlayer() {
	currentPlayer = "X"
}


function myFunction(){
	playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');
    playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
	playerOneLabel.innerHTML += 'Score:'+ player1Points;

    playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');
    playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
	playerTwoLabel.innerHTML += 'Score:'+ player2Points;
}

function endGame(draw) {
	if (draw) {
		winningmessagetextElement.innerText = "Het is gelijkspel"
	} else {
		winningmessagetextElement.innerText = `speler met ${playerTurn ? "O's" : "X's"}wins!`
	}
	winningMessageElement.classList.add('show')
}

function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}



