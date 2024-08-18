// Constantes:

const botao_modo_escuro = document.getElementById("dark_mode");

const botao_modo_claro = document.getElementById("light_mode");

// Eventos:

botao_modo_escuro.addEventListener("click", () => {

    document.querySelector("html").classList.add("dark_mode");

    botao_modo_escuro.style.display = "none";

    botao_modo_claro.style.display = "flex";

});

botao_modo_claro.addEventListener("click", () => {

    document.querySelector("html").classList.remove("dark_mode");

    botao_modo_escuro.style.display = "flex";

    botao_modo_claro.style.display = "none";

});