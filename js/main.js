// DOM ELEMENTS

let splashScreen = document.querySelector("#splash-screen");
let gameScreen = document.querySelector("#game-screen");
let gameBox = document.querySelector("#game-box");
let gameOverScreen = document.querySelector("#game-over-screen");
let startBtn = document.querySelector("#start-btn");
let gameOverBtn = document.querySelector("#game-over-button");

// STATE FUNCTIONS (manejo de estados del juego)

function startGame() {
splashScreen.style.display = "none";
gameScreen.style.display = "flex";

// objeto del juego basado en una clase. new Game()
gameObj = new Game() 
gameObj.gameStart()

}

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);