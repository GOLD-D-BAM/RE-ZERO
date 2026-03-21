async function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: senha
  });

  if (error) {
    alert("Erro: " + error.message);
  } else {
    alert("Login feito!");
    window.location.href = "pagina3.html"; // área logada
  }
}