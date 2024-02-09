// DOM ELEMENTS

let splashScreen = document.querySelector("#splash-screen");
let gameScreen = document.querySelector("#game-screen");
let gameBox = document.querySelector("#game-box");
let gameOverScreen = document.querySelector("#game-over-screen");
let startBtn = document.querySelector("#start-btn");
let gameOverBtn = document.querySelector("#game-over-btn");
let score = document.querySelector("#score");
let gameOverText = document.querySelector("#game-over-text");
let audio = document.querySelector("#miAudio");

let gameObj; // esta es una forma de poder acceder al objeto del juego desde el scope global

// STATE FUNCTIONS (manejo de estados del juego)

function startGame() {
  splashScreen.style.display = "none";
  gameScreen.style.display = "flex";

  gameObj = new Game();
  //aquí se inicia el juego y todos los intervalos que arrancan con el inicio del juego pero no están dentro del gameLoop, porque no suceden 60fps.
  gameObj.gameStart();

  setTimeout(gameObj.housesAppearUp, 500);
  setTimeout(gameObj.housesAppearDown, 1250);
}

function restartGame() {
  location.reload();
}

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    gameObj.newspaperUpAppear();
  } else if (event.key === "ArrowDown") {
    gameObj.newspaperDownAppear();
  }
});

gameOverBtn.addEventListener("click", restartGame);
