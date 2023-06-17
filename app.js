const readlineSync = require("readline-sync");
const {generarNumeroAleatorio, verificarAdivinanza} = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return parseInt(readlineSync.question("Ingrese un numero: ")); 
};

const juegoAdivinanza = () => {
  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");
};

const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;

juegoAdivinanza();

//console.log(numeroSecreto);
do {
  numeroAdivinado = obtenerNumeroUsuario();
  verificarAdivinanza(numeroSecreto, numeroAdivinado);

} while (numeroSecreto != numeroAdivinado);
