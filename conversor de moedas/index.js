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
  return diferençaDolarIene;
}

async function valorMoedaIene() {
  const response = await fetch("https://cdn.moeda.info/api/latest.json");
  const result = await response.json();
  const iene = result["rates"]["JPY"];
  return iene;
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

async function diferençaDolarParaEuro() {
  const response = await fetch("https://cdn.moeda.info/api/latest.json");
  const result = await response.json();
  const euro = result["rates"]["EUR"];
  return euro;
}

botaoPausar.addEventListener("click", async function () {
  let valorInput = Number(input.value);
  const dollarToReal = await obterValorReal();
  const multiplicadorEuro = await obtermultiplicadorEuro();
  const multiplicadorIene = await obtermultiplicadorIene();
  const diffDolarParaEuro = await diferençaDolarParaEuro();
  const moedaIenevalor = await valorMoedaIene();

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
      const resultadoRealParaIene =
        valorInput / dollarToReal / multiplicadorIene;
      resultadoElemento.textContent = resultadoRealParaIene + " Ienes";
      console.log(multiplicadorIene);
    }
  } else if (selecionar.value === dollarValor) {
    if (select.value === RealValor) {
      valorInput = Number(input.value);
      const DolarRealParaReal = valorInput * dollarToReal;
      resultadoElemento.textContent = DolarRealParaReal + " reais";
      console.log(DolarRealParaReal);
    } else if (select.value === dollarValor) {
      valorInput = Number(input.value);
      const dolarParaDolar = valorInput;
      resultadoElemento.textContent = dolarParaDolar + " Dolares";
    } else if (select.value === euroValor) {
      valorInput = Number(input.value);
      const resultadoDolarParaEuro = valorInput * diffDolarParaEuro;
      resultadoElemento.textContent = resultadoDolarParaEuro + " Euros";
    } else if (select.value === ieneValor) {
      valorInput = Number(input.value);
      const resultadoDolarParaIene = valorInput * moedaIenevalor;
      resultadoElemento.textContent = resultadoDolarParaIene + " Ienes";
    }
  }
});
