class Game {
  constructor() {
    // propiedades de la clase
    this.gameIntervalFrequency = Math.round(1000 / 60); // esto es para indicar los 60fps. 60 veces por segundo.
    this.boyObj = new Boy();
    this.newspaperObj = new Newspaper();
    this.housesArr = [];
    this.houseAppearanceFrequency = 1500;

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
  }

  housesAppearDown = () => {
    //indicar que cada segundo aparece una nueva casa
    setInterval(() => {
      let newHouseDown = new House("abajo");
      this.housesArr.push(newHouseDown);
      //console.log("aparece una casa abajo")
    }, this.houseAppearanceFrequency);
    //console.log("aparecen casas abajo")
  }

  gameLoop() {
    // aquí incluimos todas las acciones que están dentro del loop del juego, que se activa al iniciar el juego
    //this.houseEjemplo.houseMovement();

    this.housesArr.forEach((eachHouse) => {
      eachHouse.houseMovement();
    });
  }

  //el bucle del juego. Todo el juego está en un bucle, generado por un intervalo
  gameStart() {
    setInterval(() => {
      this.gameLoop();
    }, this.gameIntervalFrequency);
  }

  //movimiento del repartidor(boy). en realidad él es estático, lo que se mueven son las casas. **
  //movimiento de las casas(houses)
  //aparición y desaparición de las casas (spawning)
  //"disparos" del repartidor a las casas. la acción de repartir el periódico (con un add event listener)
}
