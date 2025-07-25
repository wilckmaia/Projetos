const estados = document.getElementById("estados");
const cidadeSp = document.getElementById("cidades-sp");
const cidadeMg = document.getElementById("cidades-mg");
const butao = document.getElementById("button");
const display = document.getElementById("display");
const clima = document.getElementById("clima");

const sp = "1";
const mg = "2";
const campinas = "1";
const ubatuda = "2";
const BeloHorizonte = "1";
const uberlandia = "2";

butao.addEventListener("click", () => {
  if (estados.value === sp) {
    console.log("tudo certinho, chefe!");
    cidadeMg.style.display = "none";
    cidadeSp.style.display = "inline-block";
    display.style.display = "inline-block";
    clima.style.display = "inline-block";
  } else if (estados.value === mg) {
    cidadeSp.style.display = "none";
    cidadeMg.style.display = "inline-block";
    display.style.display = "inline-block";
    clima.style.display = "inline-block";
  }
});
