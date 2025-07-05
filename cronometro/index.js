let contador = 0;

const elementoContador = document.getElementById("display");

function atualizarContador() {
  contador++;
  elementoContador.textContent = contador;
}

const intervalo = setInterval(atualizarContador, 1000);

const botaoPausar = document.getElementById("pauseButton");
botaoPausar.addEventListener("click", function () {
  clearInterval(intervalo);
});

const botaoReset = document.getElementById("resetButton");

botaoReset.addEventListener("click", function () {
  elementoContador.textContent = 0;
});
