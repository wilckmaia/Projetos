const select = document.getElementById("select");
const resultado = document.getElementById("resultado");
const turno = document.getElementById("turno");
const ia = document.getElementById("ia");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolha = opcoes[Math.floor(Math.random() * opcoes.length)];
  ia.textContent = escolha;

  if (escolha === "pedra" && select.value === "1") {
    resultado.textContent = "empate";
  } else if (escolha === "pedra" && select.value === "2") {
    resultado.textContent = "Vitória";
  } else if (escolha === "pedra" && select.value === "3") {
    resultado.textContent = "Derrota";
  }

  if (escolha === "papel" && select.value === "1") {
    resultado.textContent = "Derrota";
  } else if (escolha === "papel" && select.value === "2") {
    resultado.textContent = "Empate";
  } else if (escolha === "papel" && select.value === "3") {
    resultado.textContent = "Vitória";
  }

  if (escolha === "tesoura" && select.value === "1") {
    resultado.textContent = "Vitória";
  } else if (escolha === "tesoura" && select.value === "2") {
    resultado.textContent = "Derrota";
  } else if (escolha === "tesoura" && select.value === "3") {
    resultado.textContent = "Empate";
  }
});
