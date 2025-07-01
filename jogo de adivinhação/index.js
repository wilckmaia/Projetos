const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let chances = 0;

function verificar() {
  const input = document.getElementById("palpite");
  const palpite = Number(input.value);
  const mensagem = document.getElementById("mensagem");

  chances++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = " Parabéns! Você acertou!";
  }
  if (chances === 3) {
    mensagem.textContent =
      "Errou! Você usou 3 chances. O número secreto era: " + numeroSecreto;
  } else {
    mensagem.textContent =
      "Errou! Tente novamente. Chance " + chances + " de 3.";
  }
}
