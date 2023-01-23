const myBtn = document.querySelector('.resetName');
myBtn.addEventListener('click', myFunction);

function resetBoard() {
	gameEnded = false;
	
	// Reset tiles
	for (let i = 0; i < playfieldArray.length; i++) {
		let tile = fields[i];
		tile.innerHTML = "";
	}
	currentPlayer = "X"; // Start with X
	playfieldArray = [false, false, false, false, false, false, false, false, false];
}

const resetButton = document.querySelector(".resetBoard"); //A button to reset the game
resetButton.addEventListener("click", resetBoard); // Add an event listener to the reset button




const playerOneLabel = document.querySelector('.player1');//speler1 naam veranderen
const playerTwoLabel = document.querySelector('.player2');//speler2 naam veranderen

const winningMessageElement = document.getElementsByClassName('winningmessage')

let player1symbol = `X`;//symbolX
let player2symbol = `O`;//symbolO
let playerOneName = "";//naam van speler
let playerTwoName = "";//naam van speler2
let currentPlayer = "X"
let gameEnded = false;//alles word false als je reset klikt

let playerTurn = 1;//veranderd wie speelt

let playfieldArray = [false, false, false, false, false, false, false, false, false];

const fields = document.querySelectorAll('.box');
console.log("fields: " + fields.length);



for (let i = 0; i < fields.length; i++) {
	const field = fields[i];

	console.log(field);
	field.textContent = "";
	field.addEventListener('click', function () {//zorgt voor dat als 
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

	for (let i = 0; i < winningConditions.length; i++) {//i wordt verhoogd met 1
		let matchCounter = 0;


		const firstSymbol = fields[winningConditions[i][0]].textContent;

		const array = winningConditions[i];//win mogelijkheden
		//n is number
		let nOne = array[0];//rij1
		let nTwo = array[1];//rij2
		let nThree = array[2];//rij3
        //dubbel && staat gewoon voor en  // == is gelijk aan
		if (playfieldArray[nOne] == currentPlayer && playfieldArray[nTwo] == currentPlayer && playfieldArray[nThree] == currentPlayer) {
			alert(currentPlayer + " wint!");//als er 3 zelfde symbolen zijn dan win je
			gameEnded = true;
		}


		// for(let j = 0; j < winningConditions[i].length; j++) {

		// 	const currentSymbol = fields[winningConditions[i][j]].textContent;

		// 	if(currentSymbol === "" || firstSymbol !== currentSymbol) { 
		// 		break; 
		// 	} else { 
		// 		matchCounter++;
		// 	} 
		// }

		// if(matchCounter == 3) {
		// 	alert(`Player ${firstSymbol} won!`); 

		// 	return; 
		// }
	}
}




function boxClicked(index) {
	console.log("Box clicked");

	const field = fields[index];
	if (gameEnded == false) {
		if (playerTurn == 1 && playfieldArray[index] == false) {
			//speler 1(X)
			currentPlayer = "X";//nu gespeelde speler
			playerTurn = 2;//gaat naar de volgende speler
			playfieldArray[index] = `X`;//gespeelde symbool
			field.textContent = currentPlayer;
			checkWinner(`X`);
		} else if (playerTurn == 2 && playfieldArray[index] == false) {
			//speler 2 (O)
			currentPlayer = "O";
			playerTurn = 1;
			playfieldArray[index] = `O`;
			field.textContent = currentPlayer;
			checkWinner(`O`);
		}
		console.log(playfieldArray)
	}
}



function changePlayer() {
	currentPlayer = "X"
}


function myFunction() {
	playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');
	playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
	playerOneLabel.innerHTML += 'Symbol:' + player1symbol;//zorgt voor  de scoreboard en veranderd de naam

	playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');
	playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
	playerTwoLabel.innerHTML += 'Symbol:' + player2symbol;
}





