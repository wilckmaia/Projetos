function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "a" && senha == "a") {
    alert("Sucesso");
    location.href = "index2.html";
  } else {
    alert("Usuario ou senha incorretos");
  }
}
