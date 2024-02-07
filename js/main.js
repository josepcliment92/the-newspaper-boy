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
  gameObj = new Game();
  //aquí se inicia el juego y todos los intervalos que arrancan con el inicio del juego pero no están dentro del gameLoop, porque no suceden 60fps.
  gameObj.gameStart();

  setTimeout(gameObj.housesAppearUp, 1000) //.bind(this) método bind.
  setTimeout(gameObj.housesAppearDown, 1750); // REVISAR PORQUÉ NO FUNCIONA, PREGUNTAR A JORGE !!!
  //el objetivo es que la función de aparición de las casas de abajo arranque un tiempo después respecto a las casas de arriba, y no se muestren de forma paralela
}

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
gameBox.addEventListener("click", () => {
    gameObj.newspaperObj.newspaperMovementUp()
})
gameBox.addEventListener("click", () => {
    gameObj.newspaperObj.newspaperMovementDown()
})


//crear addeventlistener aquí que nos indique que, al pulsar una tecla del teclado, se reparta un periódico (es decir, se "dispare" un elemento de arriba o abajo)
