// DOM ELEMENTS

let splashScreen = document.querySelector("#splash-screen");
let gameScreen = document.querySelector("#game-screen");
let gameBox = document.querySelector("#game-box");
let gameOverScreen = document.querySelector("#game-over-screen");
let startBtn = document.querySelector("#start-btn");
let gameOverBtn = document.querySelector("#game-over-button");

let gameObj; // esta es una forma de poder acceder al objeto del juego desde el scope global

// STATE FUNCTIONS (manejo de estados del juego)

function startGame() {
splashScreen.style.display = "none";
gameScreen.style.display = "flex";

// objeto del juego basado en una clase. new Game()
gameObj = new Game() 
//aquí se inicia el juego y todos los intervalos que arrancan con el inicio del juego pero no están dentro del gameLoop, porque no suceden 60fps.
gameObj.gameStart()
gameObj.housesAppearUp();
setTimeout(gameObj.housesAppearDown(), 5000); // REVISAR PORQUÉ NO FUNCIONA, PREGUNTAR A JORGE
//gameObj.housesAppearDown()

}

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);

//crear addeventlistener aquí que nos indique que, al pulsar una tecla del teclado, se reparta un periódico (es decir, se "dispare" un elemento de arriba o abajo)