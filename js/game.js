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
    this.puedeDispararArriba === false;
    this.puedeDispararAbajo === false;
  }

  // métodos de la clase

  activarDisparoArriba() {
    this.puedeDispararArriba = true;
    //console.log("probando");
  }
  activarDisparoAbajo() {
    this.puedeDispararAbajo = true;
    //console.log("probando");
  }

  housesAppearUp = () => {
    //indicar que cada segundo aparece una nueva casa
    setInterval(() => {
      let newHouseUp = new House("arriba");
      this.housesArr.push(newHouseUp);
    }, this.houseAppearanceFrequency);
  };

  housesAppearDown = () => {
    //indicar que cada segundo aparece una nueva casa
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
          eachNewspaper.node.remove();
          this.newspaperUpArr.shift();
          //FALTA AÑADIR PUNTOS AL SCORE
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
          eachNewspaper.node.remove();
          this.newspaperDownArr.shift();
          //FALTA AÑADIR PUNTOS AL SCORE
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
      //this.newspaperUpAppear()
      eachNewspaper.newspaperMovementUp();
    });

    this.newspaperDownArr.forEach((eachNewspaper) => {
      //this.newspaperDownAppear()
      eachNewspaper.newspaperMovementDown();
    });

    this.collitionNewspaperHouseUp();
    this.collitionNewspaperHouseDown();
    this.disappearNewspaperUp();
    this.disappearNewspaperDown();
  }

  //el bucle del juego. Todo el juego está en un bucle, generado por un intervalo
  gameStart() {
    setTimeout(this.activarDisparoArriba, 1500);
    setTimeout(this.activarDisparoAbajo, 1500);

    setInterval(() => {
      this.gameLoop();
    }, this.gameIntervalFrequency);
  }

  gameOver() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "flex";
  }

  //movimiento del repartidor(boy). en realidad él es estático, lo que se mueven son las casas. **
  //movimiento de las casas(houses)
  //aparición y desaparición de las casas (spawning)
  //"disparos" del repartidor a las casas. la acción de repartir el periódico (con un add event listener)
}
