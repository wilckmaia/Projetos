const select = document.getElementById("select");
const input = document.getElementById("input");
const botaoPausar = document.getElementById("botaoPausar");
const resultadoElemento = document.getElementById("resultado");
const selecionar = document.getElementById("selecionar");

botaoPausar.addEventListener("click", function () {
  if (selecionar.value === "1") {
    if (select.value === "1") {
      const valorInput = Number(input.value);
      const resultado = valorInput / 5;
      resultadoElemento.textContent = resultado + " Dollars";
    } else if (select.value === "2") {
      const valorInput = Number(input.value);
      const resultado2 = valorInput / 6;
      resultadoElemento.textContent = resultado2 + " Euros";
    } else if (select.value === "3") {
      const valorInput = Number(input.value);
      const resultado3 = valorInput * 26;
      resultadoElemento.textContent = resultado3 + " Ienes";
    }
  } else if (selecionar.value === "2") {
    const valorInput = Number(input.value);
    const resultado4 = valorInput;
    resultadoElemento.textContent = resultado4 + " Dollars";
  } else if (select.value === "2") {
    const valorInput = Number(input.value);
    const resultado5 = valorInput / 2;
    resultadoElemento.textContent = resultado5 + " Euros";
  } else if (select.value === "3") {
    const valorInput = Number(input.value);
    const resultado6 = valorInput * 120;
    resultadoElemento.textContent = resultado6 + " Ienes";
  }
});
