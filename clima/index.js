const estados = document.getElementById("estados");
const display = document.getElementById("display");
const clima = document.getElementById("clima");
const butao2 = document.getElementById("button2");

const sp = "1";
const rj = "2";
const br = "3";

async function saoPaulo() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true"
  );
  const result = await response.json();
  const temperatura = result["current_weather"]["temperature"];
  const vento = result["current_weather"]["windspeed"];
  const exiba =
    "Temperatura :  " +
    temperatura +
    " ° " +
    " Velocidade Vento :  " +
    vento +
    " km/h  ";
  return exiba;
}
async function mostrarDadosSP() {
  const dados = await saoPaulo();
  console.log(dados);
  display.textContent = dados;
}

async function rioDeJaneiro() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-22.91&longitude=-43.17&current_weather=true"
  );
  const result = await response.json();
  const temperatura = result["current_weather"]["temperature"];
  const vento = result["current_weather"]["windspeed"];
  const exiba =
    "Temperatura :  " +
    temperatura +
    " ° " +
    " Velocidade Vento :  " +
    vento +
    " km/h ";
  return exiba;
}
async function mostrarDadosRj() {
  const dados = await rioDeJaneiro();
  console.log(dados);
  display.textContent = dados;
}

async function brasilia() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-15.79&longitude=-47.88&current_weather=true"
  );
  const result = await response.json();
  const temperatura = result["current_weather"]["temperature"];
  const vento = result["current_weather"]["windspeed"];
  const exiba =
    "Temperatura :  " +
    temperatura +
    " ° " +
    " Velocidade Vento :  " +
    vento +
    " km/h ";
  return exiba;
}
async function mostrarDadosBr() {
  const dados = await brasilia();
  display.textContent = dados;
}

butao2.addEventListener("click", async function () {
  if (estados.value === sp) {
    const climasp = await mostrarDadosSP();
  } else if (estados.value === rj) {
    const climarj = await mostrarDadosRj();
  } else if (estados.value === br) {
    const climabrvalue = mostrarDadosBr();
  }
});
