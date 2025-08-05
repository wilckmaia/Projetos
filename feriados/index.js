const botao = document.getElementById("botao");
const display = document.getElementById("display");

async function aleatorio() {
  const response = await fetch("https://brasilapi.com.br/api/feriados/v1/2025");
  const result = await response.json();

  const datas = result.map((feriado) => feriado.date);

  display.innerHTML = datas.join("<br>");
}

botao.addEventListener("click", aleatorio);
