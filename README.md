NOTE: to copy this readme structure simply click on `Raw` on the top right of this gist. There you have the content in the basic [Markdown syntax](https://www.markdownguide.org/basic-syntax/) used in readme files. Then paste it on a README.md file in your repository and fill the information. Always do this directly from VS code, not from github. DON'T ADD THIS NOTE TO YOUR README.

# THE NEWSPAPER BOY

## [Play the Game!](https://josepcliment92.github.io/the-newspaper-boy/)


# Description

Ponte en la piel de un repartidor de periódicos que empieza su jornada subido en bicicleta. “The Newspaper Boy” es un juego en el que el objetivo es repartir el mayor número posible de periódicos por las casas del vecindario. 

Cada casa debe recibir únicamente un periódico. El juego se termina cuando lanzas un periódico a una casa que ya lo tiene o cuando repartes más de un periódico en la misma vivienda. Acumula puntos por cada entrega que realizas correctamente; aguanta sin fallar todo el tiempo que puedas. 

# Main Functionalities

- El jugador en posición estática en mitad de la calle lanza periódicos.
- Puede lanzar periódicos arriba y abajo (a ambos lados de la calle) usando las flechas del teclado
- Las casas avanzan de derecha a izquierda de la pantalla con un intervalo de frecuencia uniforme
- Para añadir dificultad, algunas casas no deben recibir periódicos puesto que ya tienen uno (imagen diferente al resto)
- Las colisiones de los periódicos con los obstáculos suman puntos al score; se modifica la imagen de las casas.
- El score hace recuento del número de periódicos entregados correctamente
- El juego termina de 3 formas posibles:
1. Cuando un periódico lanzado no colisiona contra una casa
2. Cuando un periódico colisiona con una casa que ya tiene un periódico
3. Cuando dos periódicos colisionan con la misma casa

# Backlog Functionalities

- Elevar la velocidad de la aparición de las casas
- Mayor aleatoriedad en el diseño e intervalo de frecuencia de las casas
- Dar movimiento horizontal al repartidor
- Nuevas condiciones de Game Over (sistema de vidas)

# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- JS Audio & Image

# States

- Start Screen
- Game Screen
- Game Over Screen

# Extra Links 

### Slides
[Link](www.your-slides-url-here.com)

## Deploy
[Link](https://josepcliment92.github.io/the-newspaper-boy/)