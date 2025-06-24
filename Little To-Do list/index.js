const botao = document.getElementById("adicionarTarefa");
const input = document.getElementById("novaTarefa");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", adicionar);

function adicionar() {
  const li = document.createElement("li");
  li.textContent = input.value;

  const botaoX = document.createElement("button");
  botaoX.textContent = "X";

  botaoX.addEventListener("click", function () {
    lista.removeChild(li);
  });

  li.appendChild(botaoX);
  lista.appendChild(li);
  input.value = "";
}
