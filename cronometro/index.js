let contador = 0;
let minuto = 0;
let hora = 0;
const elementoContador = document.getElementById("display");

function atualizarContador() {
  contador++;

  if (contador === 60) {
    minuto++;
  } else if (minuto === 60) {
    hora++;
  }
  elementoContador.textContent = hora + ":" + minuto + ":" + contador;
}

const intervalo = setInterval(atualizarContador, 1000);

const botaoPausar = document.getElementById("pauseButton");

botaoPausar.addEventListener("click", function () {
  clearInterval(intervalo);
});

const botaoReset = document.getElementById("resetButton");

botaoReset.addEventListener("click", function () {
  elementoContador.textContent =
    0 + "" + 0 + ":" + 0 + "" + 0 + ":" + 0 + "" + 0;
});
