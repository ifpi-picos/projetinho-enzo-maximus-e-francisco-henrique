const bttMostrarOp = document.querySelector("#botaoMostrarOpcoes")
const opcoesIniciais = document.querySelector("#opcoesIniciais")
const botaoMostrarOpcoes = document.querySelector("#botaoMostrarOpcoes")

bttMostrarOp.addEventListener("click", () => {
    opcoesIniciais.style.display = "block"
    botaoMostrarOpcoes.style.display = "none"
})

