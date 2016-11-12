//console.log("JS file is connected to HTML! Woo!")
var cardOne = 'king';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'queen';

//console.log('cardOne =' + ' ' + cardOne)
//console.log('cardTwo =' + ' ' + cardTwo)
//console.log('cardThree =' + ' ' + cardThree)
//console.log('cardFour =' + ' ' + cardFour)
if (cardTwo === cardThree) {
  alert('You Found A Match!');
}
else {
  alert('Sorry Try Again.');
}


var createCards = function(numberOfCards){
  // adding cards through JS
  var cards = document.getElementById('game-board');

  //var numberOfCards = 4;
  // go through number of cards
  for (var i = 0; i < numberOfCards; i++) {
    //create div
    var newDivForCard = document.createElement('div');
    //update div with card class
    newDivForCard.setAttribute('class', 'card');
    //append cards to add newDivForCard
    cards.appendChild(newDivForCard);
  }
}
createCards(4);
