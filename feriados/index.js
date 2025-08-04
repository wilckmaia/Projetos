const botao = document.getElementById("botao");
const display = document.getElementById("display");

async function aleatorio() {
  const response = await fetch(
    " https://brasilapi.com.br/api/feriados/v1/2025"
  );
  const result = await response.json();
  const carta = result["date"];
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
