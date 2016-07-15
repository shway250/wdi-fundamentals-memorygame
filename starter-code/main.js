//card type array
var cards = ["queen", "queen", "king", "king"];
///cards in play array
var cardsInPlay = [];
//game-board div
var gameBoard = document.getElementById('game-board');

/*for(var i = 0; i<4; i++){
	document.createElement('div')[i].className = 'card';
	document.board.appendChild('card');
}*/

for(var i = 0; i<cards.length; i++){
	cardElement.addEventListener('click', isTwoCards).innerHTML = "<img src='Diamonds 12.png' alt='queen of diamonds'/>";
}

///function to create game board and populate it with cards
var createBoard = function(){
	for(var i = 0; i<cards.length; i++){
		document.createElement('div')[i].className = 'card';
		document.board.appendChild('card');
		cardElement.setAttribute('data-card', cards[i]); //assigns value to cards
		cardElement.addEventListener('click', isTwoCards);//executes isTwoCards
	}
}
////////execute create board function
createBoard();


//function to check if two cards are the same
var isMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] || cardsInPlay[3]){
	alert("You found a match!")
	}
	else if(cardsInPlay[1] === cardsInPlay[2] || cardsInPlay[3]){
	alert('You found a match!')
	}
	else if(cardsInPlay[2] === cardsInPlay[3]){
	alert('You found a match!')
	}
	else{
	alert("Sorry, try again.")
	}
}

//checks to see if there are cards in play
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));// add card to array of cards in play
  ///// if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);// pass the cardsInPlay as an argument to isMatch function
    cardsInPlay = []; // clear cards in play array for next try
	}
}

console.log("JS file is connected to HTML! Woo!")