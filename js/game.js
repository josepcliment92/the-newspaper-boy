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

    //this.houseAppearanceFrequencyUp = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
    //this.houseAppearanceFrequencyDown = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;

    //this.houseEjemplo = new House();
  }

  // métodos de la clase

  housesAppearUp = () => {
    //indicar que cada segundo aparece una nueva casa
    setInterval(() => {
      let newHouseUp = new House("arriba");
      this.housesArr.push(newHouseUp);
      //console.log("aparece una casa arriba")
    }, this.houseAppearanceFrequency);
    //console.log("aparecen casas arriba")
  };

  housesAppearDown = () => {
    //indicar que cada segundo aparece una nueva casa
    setInterval(() => {
      let newHouseDown = new House("abajo");
      this.housesArr.push(newHouseDown);
      //console.log("aparece una casa abajo")
    }, this.houseAppearanceFrequency);
    //console.log("aparecen casas abajo")
  };

  newspaperUpAppear = () => {
    let newNewspaper = new Newspaper();
    this.newspaperUpArr.push(newNewspaper);
  };

  newspaperDownAppear = () => {
    let newNewspaper = new Newspaper();
    this.newspaperDownArr.push(newNewspaper);
  };

  /*collitionNewspaperHouseUp() {
    for (let i = 0; i < this.housesArr.length; i++) {
        for (let j = 0; j < this.newspaperUpArr.length; i++) {
            if (this.housesArr[i].x < this.newspaperUpArr[j].x + newspaperUpArr[j].w &&
                this.housesArr[i].x + this.housesArr[i].w > newspaperUpArr[j].x &&
                this.housesArr[i].y < newspaperUpArr[j].y + newspaperUpArr[j].h &&
                this.housesArr[i].y + this.housesArr[i].h > newspaperUpArr[j].y) {
                //sumar puntos a un score
            } else (collitionNewspaperHouseUp())
        }
}
}*/

  /*collitionNewspaperHouseDown() {
    for (let i = 0; i < this.housesArr.length; i++) {
        for (let j = 0; j < this.newspaperUpArr.length; i++) {
            if (this.housesArr[i].x < this.newspaperUpArr[j].x + newspaperUpArr[j].w &&
                this.housesArr[i].x + this.housesArr[i].w > newspaperUpArr[j].x &&
                this.housesArr[i].y < newspaperUpArr[j].y + newspaperUpArr[j].h &&
                this.housesArr[i].y + this.housesArr[i].h > newspaperUpArr[j].y) {
                this.gameOver()
            } else (collitionNewspaperHouseDown())
        }
}
}*/

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
    //this.houseEjemplo.houseMovement();

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
