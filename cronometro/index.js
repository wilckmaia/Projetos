let contador = 0;
const elementoContador = document.getElementById("display");

function atualizarContador() {
  contador++;
  elementoContador.textContent = contador;
}

setInterval(atualizarContador, 1000);
