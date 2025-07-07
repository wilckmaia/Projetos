let contador = 0;
let segundo = 0;
let minuto = 0;
const elementoContador = document.getElementById("display");

function atualizarContador() {
  contador++;

  if (contador === 60) {
    segundo++;
    contador = 0;
    contador++;
  } else if (segundo === 60) {
    minuto++;
    segundo = 0;
    contador = 0;
    segundo++;
    contador++;
  }
  elementoContador.textContent = minuto + ":" + segundo + ":" + contador;
}

const intervalo = setInterval(atualizarContador, 100);

const botaoPausar = document.getElementById("pauseButton");

botaoPausar.addEventListener("click", function () {
  clearInterval(intervalo);
});

const botaoReset = document.getElementById("resetButton");

botaoReset.addEventListener("click", function () {
  elementoContador.textContent =
    0 + "" + 0 + ":" + 0 + "" + 0 + ":" + 0 + "" + 0;
});
