let firstCard = 5;
let secondCard = 10;
let cards = [firstCard, secondCard]

let isAlive = false;
let hasBlackJack = false;
let message = "";
let sum = firstCard + secondCard;
gameEl = document.getElementById('game-el');
messageEl = document.getElementById('message-el');
sumEl = document.getElementById('sum-el');
cardEl = document.querySelector('#card-el');

function renderGame() {
    gameEl.textContent = "Starting the game!!";
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You won the Blackjack!!";
        hasBlackJack = true;
    } else {
        message = "Oh noooh!! you lost!!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Cards: " + cards;
}
let thirdCard = 6;
function newCard() {
    cardEl.textContent = thirdCard;
    sum += thirdCard
    cards.push(thirdCard);

    renderGame();
}

function startGame() {
    renderGame();
}
// Testing status of the game
// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message);