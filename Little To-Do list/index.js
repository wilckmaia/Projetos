const novoItem = document.getElementById("adicionarTarefa");
const resultado = document.getElementById("listaTarefas");
const input = document.getElementById("novaTarefa");

novoItem.addEventListener("click", function () {
  const valorDoInput = input.value.trim();

  if (valorDoInput !== "") {
    const li = document.createElement("li");
    li.textContent = valorDoInput;

    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "X";
    botaoDeletar.style.marginLeft = "10px";

    botaoDeletar.addEventListener("click", function () {
      resultado.removeChild(li);
    });

    li.appendChild(botaoDeletar);
    resultado.appendChild(li);
    input.value = "";
  }
});
