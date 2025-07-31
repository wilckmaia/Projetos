const botao = document.getElementById("button");
const display = document.getElementById("display");

async function aleatorio() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
  );
  const result = await response.json();
  const exiba = result["cards"];
  return exiba;
}

async function dados() {
  const dados = await aleatorio();
  console.log(dados);
  dados.forEach((carta) => {
    const p = document.createElement("p");
    p.textContent = `${carta.value} of ${carta.suit}`;
    display.appendChild(p);
  });
}

botao.addEventListener("click", async function () {
  console.log(dados);
  const mostrar = await dados();
});
