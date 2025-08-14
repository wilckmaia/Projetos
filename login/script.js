document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  let valido = true;

  if (email === "") {
    emailError.textContent = "O e-mail é obrigatório.";
    valido = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Digite um e-mail válido.";
    valido = false;
  }

  if (password === "") {
    passwordError.textContent = "A senha é obrigatória.";
    valido = false;
  }
  if (valido) {
    alert("Login realizado com sucesso!");
  }
});
