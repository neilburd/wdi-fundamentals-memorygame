//Cards in the game
var cards = ['queen','queen','king','king'];

//cards in play
var cardsInPlay = [];

//Get game-board DIV
var gameBoard = document.getElementById('game-board');

//Creates the cards ---- createCards function
var createCards = function(){
  for (var i = 0; i< cards.length; i++) {

    //create Card DIV -- cardElement
    var cardElement= document.createElement('div');

    //Fill Card DIV --- cardElement
    cardElement.setAttribute('class', 'card');

    // this will set the card's 'data-card' to be the element of the array
    // data- attributes are meant to store data about an element that is not tied to a style.
    // i.e. "king"
    //**** From the Example Code
    cardElement.setAttribute('data-card', cards[i]);

    // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)

    //add Card to Board
    gameBoard.appendChild(cardElement);
  }
};

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  //console.log(this.getAttribute('data-card'));

  //set images when card it clicked
    if (this.getAttribute('data-card') === 'queen'){
      this.innerHTML = '<img src="king.png" alt="King of Spades" />';
    }
    else {
      this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';
    }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
var removeImg = function(){
  cardsInPlay.innerHTML = "";
}

/// Check if two cards Match and Alert
var isMatch = function(cardsInPlay){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("MATCH!");
    //removeImg();
  } else {
    alert("TRY AGAIN!");
    //removeImg();
  }
}


createCards();


//cardElement.innerHTML = '<img src="king.png" alt="King of Spades" />';


//**************************************
// OLD CODE


//console.log("JS file is connected to HTML! Woo!")
// var cardOne = 'king';
// var cardTwo = 'king';
// var cardThree = 'queen';
// var cardFour = 'queen';

//console.log('cardOne =' + ' ' + cardOne)
//console.log('cardTwo =' + ' ' + cardTwo)
//console.log('cardThree =' + ' ' + cardThree)
//console.log('cardFour =' + ' ' + cardFour)

//if (cardTwo === cardThree) {
//  alert('You Found A Match!');
//}
//else {
//  alert('Sorry Try Again.');
//}

// var createCards = function(){
//   var allCards = document.getElementById('game-board');
//   for (var i = 0; i < cards.length; i++) {
//     var cardElement= document.createElement('div');
//     newDivForCard.setAttribute('class', 'card');
//     cards.appendChild(cardElement);
//   }
// };
// createCards();
