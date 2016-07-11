///variables for the four cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if(cardOne === cardTwo){
	alert("You found a match!")
}
else if(cardThree === cardFour){
	alert('You found a match!')
}
else{
	alert("Sorry, try again.")
}*/

var gameBoard = document.getElementById('game-board');
for(var i = 0; i<4; i++){
	document.createElement('div')[i].className = 'card';
	document.board.appendChild('card');
}

var createBoard = function(){
	for(var i = 0; i<4; i++){
	document.createElement('div')[i].className = 'card';
	document.board.appendChild('card');
	}
}

createBoard();


console.log("JS file is connected to HTML! Woo!")