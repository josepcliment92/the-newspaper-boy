class Game {
  constructor() {
    // propiedades de la clase
    this.gameIntervalFrequency = Math.round(1000 / 60); // esto es para indicar los 60fps. 60 veces por segundo.
    this.boyObj = new Boy();
    this.newspaperObj = new Newspaper();
    this.newspaperUpArr = [];
    this.newspaperDownArr = [];
    this.housesArr = [];
    this.houseAppearanceFrequency = 2000;
    this.puedeDispararArriba = false;
    this.puedeDispararAbajo = false;
    this.gameScore = 0;
  }

  // métodos de la clase

  activarDisparoArriba = () => {
    this.puedeDispararArriba = true;
  };
  activarDisparoAbajo = () => {
    this.puedeDispararAbajo = true;
  };

  housesAppearUp = () => {
    //indicar que cada segundo aparece una nueva casa (arriba)
    setInterval(() => {
      let newHouseUp = new House("arriba");
      this.housesArr.push(newHouseUp);
    }, this.houseAppearanceFrequency);
  };

  housesAppearDown = () => {
    //indicar que cada segundo aparece una nueva casa (abajo)
    setInterval(() => {
      let newHouseDown = new House("abajo");
      this.housesArr.push(newHouseDown);
    }, this.houseAppearanceFrequency);
  };

  newspaperUpAppear = () => {
    if (this.puedeDispararArriba === true) {
      let newNewspaper = new Newspaper();
      this.newspaperUpArr.push(newNewspaper);
    }
  };

  newspaperDownAppear = () => {
    if (this.puedeDispararAbajo === true) {
      let newNewspaper = new Newspaper();
      this.newspaperDownArr.push(newNewspaper);
    }
  };

  collitionNewspaperHouseUp() {
    this.housesArr.forEach((eachHouse) => {
      this.newspaperUpArr.forEach((eachNewspaper) => {
        if (
          eachHouse.x < eachNewspaper.x + eachNewspaper.w &&
          eachHouse.x + eachHouse.w > eachNewspaper.x &&
          eachHouse.y < eachNewspaper.y + eachNewspaper.h &&
          eachHouse.y + eachHouse.h > eachNewspaper.y
        ) {
          if (eachHouse.alreadyHasPaper === true) {
            this.gameOver();
          }
          eachNewspaper.node.remove();
          this.newspaperUpArr.shift();
          this.gameScore = this.gameScore + 1;
          score.innerText = `Score: ${this.gameScore} points`;
          eachHouse.node.src = "./images/house-with-newspaper-up.png";
          eachHouse.alreadyHasPaper = true;
        }
      });
    });
  }

  collitionNewspaperHouseDown() {
    this.housesArr.forEach((eachHouse) => {
      this.newspaperDownArr.forEach((eachNewspaper) => {
        if (
          eachHouse.x < eachNewspaper.x + eachNewspaper.w &&
          eachHouse.x + eachHouse.w > eachNewspaper.x &&
          eachHouse.y < eachNewspaper.y + eachNewspaper.h &&
          eachHouse.y + eachHouse.h > eachNewspaper.y
        ) {
          if (eachHouse.alreadyHasPaper === true) {
            this.gameOver();
          }
          eachNewspaper.node.remove();
          this.newspaperDownArr.shift();
          this.gameScore = this.gameScore + 1;
          score.innerText = `Score: ${this.gameScore} points`;
          eachHouse.node.src = "./images/house-with-newspaper-down.png";
          eachHouse.alreadyHasPaper = true;
        }
      });
    });
  }

  disappearNewspaperUp() {
    this.newspaperUpArr.forEach((eachNewspaperObj) => {
      if (eachNewspaperObj.y < 100) {
        eachNewspaperObj.node.remove();
        this.newspaperUpArr.shift();
        this.gameOver();
      }
    });
  }

  disappearNewspaperDown() {
    this.newspaperDownArr.forEach((eachNewspaperObj) => {
      if (eachNewspaperObj.y > 370) {
        eachNewspaperObj.node.remove();
        this.newspaperDownArr.shift();
        this.gameOver();
      }
    });
  }

  gameLoop() {
    //aquí incluimos todas las acciones que están dentro del loop del juego, que se activa al iniciar el juego

    this.housesArr.forEach((eachHouse) => {
      eachHouse.houseMovement();
    });

    this.newspaperUpArr.forEach((eachNewspaper) => {
      eachNewspaper.newspaperMovementUp();
    });

    this.newspaperDownArr.forEach((eachNewspaper) => {
      eachNewspaper.newspaperMovementDown();
    });

    this.collitionNewspaperHouseUp();
    this.collitionNewspaperHouseDown();
    this.disappearNewspaperUp();
    this.disappearNewspaperDown();
  }

  //el bucle del juego. Todo el juego está en un bucle, generado por un intervalo
  gameStart() {
    audio.volume = 0.1;
    audio.play();
    setTimeout(this.activarDisparoArriba, 5500);
    setTimeout(this.activarDisparoAbajo, 5500);

    setInterval(() => {
      this.gameLoop();
    }, this.gameIntervalFrequency);
  }

  gameOver() {
    miAudio.pause();
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "flex";
    if (this.gameScore === 1) {
      gameOverText.innerText = `Has repartido ${this.gameScore} periódico, ¡puedes hacerlo mejor! Vuelve a intentarlo y supérate`;
    } else if (this.gameScore === 0) {
      gameOverText.innerText =
        "No has repartido ningún periódico, ¡sigue intentándolo! A la próxima tendrás más suerte";
    } else {
      gameOverText.innerText = `Has repartido ${this.gameScore} periódicos, ¡no está mal! Pero sé que puedes hacerlo mejor. Vuelve a intentarlo y ¡supérate!`;
    }
  }
}
