console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
alert("Sorry try again!");
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);



console.log();

