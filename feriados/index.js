const botao = document.getElementById("botao");

async function dados() {
  const response = await fetch(
    " https://brasilapi.com.br/api/feriados/v1/2025"
  );
  const result = await response.json();
  const dados = result["date"];
  console.log(dados);
  return dados;
}

botao.addEventListener("click", async function () {
  const displayIt = await dados();
});
