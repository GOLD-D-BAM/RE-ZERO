async function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { error } = await supabase.auth.signUp({
    email: email,
    password: senha
  });

  if (error) {
    alert("Erro: " + error.message);
  } else {
    alert("Conta criada!");
    window.location.href = "index.html"; // volta pro login
  }
}