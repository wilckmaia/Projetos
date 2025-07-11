const select = document.getElementById("select");
const input = document.getElementById("input");
const botaoPausar = document.getElementById("botaoPausar");
const resultadoElemento = document.getElementById("resultado");

botaoPausar.addEventListener("click", function () {
  if (select.value === "1") {
    const valorInput = Number(input.value);
    const resultado = valorInput / 5;
    resultadoElemento.textContent = "Resultado: " + resultado + " Dollars";
  } else if (select.value === "2") {
    const valorInput = Number(input.value);
    const resultado2 = valorInput / 6;
    resultadoElemento.textContent = "Resultado: " + resultado2 + " Euros";
  }
});
