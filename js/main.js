const myBtn = document.querySelector('.resetName');
myBtn.addEventListener('click', myFunction);

const playerOneLabel = document.querySelector('.player1');
const playerTwoLabel = document.querySelector('.player2');

const winningMessageElement = document.getElementsByClassName('winningmessage')

let player1symbol = `X`;
let player2symbol = `O`;
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

	checkWinner();
}
function checkWinner(currentPlayer) {
let winningConditions = [
	[0, 1, 2],// First horizontal row
	[3, 4, 5],// Second horizontal row
	[6, 7, 8],// Third horizontal row
	[0, 3, 6],// First vertical row
	[1, 4, 7],// Second vertical row
	[2, 5, 8],// Third vertical row
	[0, 4, 8],// First diagonal row
	[2, 4, 6],// Second diagonal row
]

for(let i = 0; i < winningConditions.length; i++) {
	let matchCounter = 0; 

	
	const firstSymbol = fields[winningConditions[i][0]].textContent; 

	
	for(let j = 0; j < winningConditions[i].length; j++) {
		
		const currentSymbol = fields[winningConditions[i][j]].textContent;

		if(currentSymbol === "" || firstSymbol !== currentSymbol) { 
			break; 
		} else { 
			matchCounter++;
		} 
	}

	if(matchCounter == 3) {
		alert(`Player ${firstSymbol} won!`); 

		return; 
	}
}
}




function boxClicked(index) {
	const field = fields[index];
	if (playerTurn == 1 && playfieldArray[index] == false) {
		//speler 1(X)
		currentPlayer = "X";
		playerTurn = 2;
		playfieldArray[index] = `X`;
		field.textContent = currentPlayer;
	} else if (playerTurn == 2 && playfieldArray[index] == false) {
		//speler 2 (O)
		currentPlayer = "O";
		playerTurn = 1;
		playfieldArray[index] = `O`;
		field.textContent = currentPlayer;
	}
}



function changePlayer() {
	currentPlayer = "X"
}


function myFunction(){
	playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');
    playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
	playerOneLabel.innerHTML += 'Symbol:'+ player1symbol;

    playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');
    playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
	playerTwoLabel.innerHTML += 'Symbol:'+ player2symbol;
}





