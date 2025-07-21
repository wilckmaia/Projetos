const select = document.getElementById("select");
const input = document.getElementById("input");
const botaoPausar = document.getElementById("botaoPausar");
const resultadoElemento = document.getElementById("resultado");
const selecionar = document.getElementById("selecionar");

const RealValor = "1";
const dollarValor = "2";
const euroValor = "3";
const ieneValor = "4";

async function obterValorReal() {
  const response = await fetch("https://cdn.moeda.info/api/latest.json");
  const result = await response.json();
  return result["rates"]["BRL"];
}

async function obtermultiplicadorIene() {
  const response = await fetch("https://cdn.moeda.info/api/latest.json");
  const result = await response.json();
  const iene = result["rates"]["JPY"];
  const dolar = 1;
  const diferençaDolarIene = dolar / iene;
  const multiplicador = dolar + diferençaDolarIene;
  return multiplicador;
}

async function obtermultiplicadorEuro() {
  const response = await fetch("https://cdn.moeda.info/api/latest.json");
  const result = await response.json();
  const euro = result["rates"]["EUR"];
  const dolar = 1;
  const diffDolarEuro = dolar - euro;
  const multiplicador = dolar + diffDolarEuro;
  return multiplicador;
}

botaoPausar.addEventListener("click", async function () {
  let valorInput = Number(input.value);
  const dollarToReal = await obterValorReal();
  const multiplicadorEuro = await obtermultiplicadorEuro();
  const multiplicadorIene = await obtermultiplicadorIene();

  if (selecionar.value === RealValor) {
    if (select.value === RealValor) {
      const resultadoRealParaReal = valorInput;
      resultadoElemento.textContent = resultadoRealParaReal + " Reais";
    } else if (select.value === dollarValor) {
      const resultadoRealParaDollar = valorInput / dollarToReal;
      resultadoElemento.textContent = resultadoRealParaDollar + " Dollars";
    } else if (select.value === euroValor) {
      valorInput = Number(input.value);
      const resultadoRealParaEuro =
        valorInput / dollarToReal / multiplicadorEuro;
      resultadoElemento.textContent = resultadoRealParaEuro + " Euros";
    } else if (select.value === ieneValor) {
      valorInput = Number(input.value);
      const resultadoRealParaEuro =
        valorInput * dollarToReal * multiplicadorIene;
      resultadoElemento.textContent = resultadoRealParaEuro * 5 + " Ienes";
      console.log(multiplicadorIene);
    }
  } else if (selecionar.value === dollarValor) {
    if (select.value === RealValor) {
    } else if (select.value === dollarValor) {
    } else if (select.value === euroValor) {
    } else if (select.value === ieneValor) {
    }
  }
});
