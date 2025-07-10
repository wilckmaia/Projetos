const input = document.getElementById("input");
const select = document.getElementById("select");
const display = document.getElementById("p");
const select2 = document.getElementById("select2");

let valorSelect = (select.value1 = 5);
let valorSelect2 = (select.value1 = 1);
let valorInput = Number(input) * valorSelect2;

function change() {
  const resultado = valorInput * valorSelect;
  display.textContent = resultado;
}
