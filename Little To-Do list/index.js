const botao = document.getElementById("adicionarTarefa");
const input = document.getElementById("novaTarefa");
const lista = document.getElementById("listaTarefas");

if (localStorage.getItem("tarefas")) {
  lista.innerHTML = localStorage.getItem("tarefas");

  const botoesX = lista.querySelectorAll("button");
  botoesX.forEach((botaoX) => {
    botaoX.addEventListener("click", function () {
      botaoX.parentElement.remove();
      localStorage.setItem("tarefas", lista.innerHTML);
    });
  });
}

botao.addEventListener("click", adicionar);

function adicionar() {
  const li = document.createElement("li");
  li.textContent = input.value;

  const botaoX = document.createElement("button");
  botaoX.textContent = "🗑️";

  botaoX.addEventListener("click", function () {
    lista.removeChild(li);
    localStorage.setItem("tarefas", lista.innerHTML);
  });

  li.appendChild(botaoX);
  lista.appendChild(li);
  input.value = "";

  localStorage.setItem("tarefas", lista.innerHTML);
}
