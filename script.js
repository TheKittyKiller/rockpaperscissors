// function init () {
//     console.log("init");

// }


// function getRandomChoice(){
//     console.log("getRandomChoice");


// }

// function userChoice() {
//     console.log("userChoice");

// }

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
console.log("BUTTON")
    player = button.textContent;
    computerTurn();
    player1.textContent = `Player:${player}`;
    player2.textContent = `Computer:${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn() {


    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;

    }

}

function checkWinner() {

    if (player == computer) {

        return "Draw!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You win!" : "You Lose!"


    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You win!" : "You Lose!"


    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You win!" : "You Lose!"

    }
}