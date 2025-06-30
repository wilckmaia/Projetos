const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificar() {
  const input = document.getElementById("palpite");
  const palpite = Number(input.value);
  const mensagem = document.getElementById("mensagem");

  if (palpite === numeroSecreto) {
    mensagem.textContent = " Parabéns! Você acertou!";
  } else {
    mensagem.textContent =
      " Errou! " + "O numero secreto era : " + numeroSecreto;
  }
}
