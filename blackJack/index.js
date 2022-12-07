
let cards = [];
let isAlive = false;
let hasBlackJack = false;
let message = "";
let sum = 0;
gameEl = document.getElementById('game-el');
messageEl = document.getElementById('message-el');
sumEl = document.getElementById('sum-el');
cardEl = document.querySelector('#card-el');

function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) {
        return 11;
    } else if(randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

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
    cardEl.textContent = "Cards: " ;
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    let thirdCard = getRandomCard();
    if(isAlive === true && hasBlackJack === false) {
        cardEl.textContent = thirdCard;
        sum += thirdCard;
        cards.push(thirdCard);
    
        renderGame()
    } else {
        messageEl.textContent = "Game over!!"
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
// Testing status of the game
// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message);