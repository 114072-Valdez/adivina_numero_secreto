const Chance = require("chance");

const chance = new Chance();

const generarNumeroAleatorio = () => {
  return chance.d100();
};

const verificarAdivinanza = (numeroOculto, numeroJugado) => {
  if (numeroJugado === numeroOculto) {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroJugado > numeroOculto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

module.exports = {generarNumeroAleatorio,verificarAdivinanza};
