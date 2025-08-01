const botao = document.getElementById("button");
const display = document.getElementById("display");

async function aleatorio() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );
  const result = await response.json();
  const carta = result.cards[0];
  return carta;
}

async function dados() {
  display.textContent = "";

  const carta = await aleatorio();
  console.log(carta);

  const p = document.createElement("p");
  p.textContent = `${carta.value} of ${carta.suit}`;
  display.appendChild(p);
}

botao.addEventListener("click", dados);
