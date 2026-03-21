
async function verificarUser() {
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    window.location.href = "index.html"; // bloqueia acesso
  }
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "index.html";
}