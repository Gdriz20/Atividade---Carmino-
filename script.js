document.getElementById("btnLogin").addEventListener("click", () => {
  alert("Função de login em desenvolvimento! 😊");
});

document.getElementById("newsletterBtn").addEventListener("click", () => {
  const email = prompt("Digite seu e-mail para assinar a newsletter:");
  if (email) {
    alert(`Obrigado! ${email} foi cadastrado com sucesso!`);
  }
});

document.getElementById("btnSearch").addEventListener("click", () => {
  const query = document.getElementById("search").value;
  if (query.trim() === "") {
    alert("Digite algo para buscar!");
  } else {
    alert(`Resultados para: "${query}"`);
  }
});
