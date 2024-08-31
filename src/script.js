let gastos = []
let filtrados = []

const containerPadrao = document.querySelector("#containerPadrao")

const bttMostrarOp = document.querySelector("#botaoMostrarOpcoes")
const containerInicio = document.querySelector("#containerInicio")

bttMostrarOp.addEventListener("click", () => {
    containerInicio.style.display = "block"
    containerPadrao.style.display = "none"
})


const bttAdicionar = document.querySelector("#bttAdicionar")
const containerAdicionar = document.querySelector("#containerAdicionar")

bttAdicionar.addEventListener("click", () => {
    containerInicio.style.display = "none"
    containerAdicionar.style.display = "block"
})

// Opções de adicionar

const descricaoValue = document.querySelector("#descricao")
const valorValue = document.querySelector("#valor")
const categoriaValue = document.querySelector("#categoria")
const dataValue = document.querySelector("#data")

const bttEnviar = document.querySelector("#bttEnviar")

bttEnviar.addEventListener("click", () => {
    descricaoVv = descricaoValue.value.trim();
    valorVv = valorValue.value.trim();
    categoriaVv = categoriaValue.value.trim();
    dataVv = dataValue.value;

    if (descricaoVv == "") {
        alert("Esqueceu a Descrição")
    } else if (valorVv == "") {
        alert("Esqueceu o Valor")
    } else if (categoriaVv == "") {
        alert("Esqueceu a Categoria")
    } else if (dataVv == "") {
        alert("Esqueceu a Data")
    } else {
        let novaDespesa = {
            descricao: descricaoVv,
            valor: valorVv,
            categoria: categoriaVv,
            data: dataVv
        }
        gastos.push(novaDespesa)
    }

    containerPadrao.style.display = "block"
    containerAdicionar.style.display = "none"
})

// Opções de visualizar

const bttVisualizar = document.querySelector("#bttVisualizar")

const containerVisualizar = document.querySelector("#containerVisualizar")

const bttFiltrarData = document.querySelector("#filtrarData")
const bttFiltrarCategoria = document.querySelector("#filtrarCategoria")
const voltarInicio = document.querySelector("#voltarInicio")

const visualizacao = document.querySelector("#visualizacao")
const visualizacaoNoResumo = document.querySelector("#visualizacaoNoResumo")

bttVisualizar.addEventListener("click", () => {
    containerInicio.style.display = "none"
    containerVisualizar.style.display = "block"

    if (gastos.length == 0) {
        alert("Vc não adicionou nenhum gasto")
    } else {
        visualizacaoNoResumo.innerHTML = ""
        gastos.forEach(function(despesa) {
            let mostraDespesa = document.createElement("p")
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${despesa.data}`
            visualizacaoNoResumo.appendChild(mostraDespesa)
        })
    }
})

voltarInicio.addEventListener("click", () => {
    containerVisualizar.style.display = "none"
    containerInicio.style.display = "block"
})

// Opções de Filtrar

const filtrarCategoria = document.querySelector("#filtrarCategoria")
const filtrarData = document.querySelector("#filtrarData")
const filtrarSemana = document.querySelector("#filtroSemana")
const filtrarMes = document.querySelector("#filtroMes")
const filtraPeriodoSemana = document.querySelector("#containerFiltrarPeriodoSemana")

const dataInicio = document.querySelector("#dataInicio").value
const dataFim = new Date(dataInicio)

const bttConfirmarData = document.querySelector("#bttConfirmarData")
filtrarData.addEventListener("click", () => {
    /*
    1. Criar botões com opções de filtrar por semana ou mês
    2. Em ambos vai aparecer a data de início, que pode ser qualquer dia e o fim que vai ser uma semana ou um mês depois.
    3. Caso a pessoa escolha uma data de início com um intervalo menor que uma semana ou um mês, então a data final vai ser a data escolhida até o período de uma semana ou mês depois, pois algum doido pode colocar algo como uma fatura de cartão que vai vencer naquela semana ou mês
    */
    containerVisualizar.style.display = "none"
    containerFiltrarData.style.display = "block"
})

// filtrarSemana.addEventListener("click", () => {
//     containerFiltrarData.style.display = "none"
//     containerFiltrarPeriodoSemana.style.display = "block"
//     dataInicio = new Date(dataInicio)
//     dataFim.setDate(dataInicio.getDate() + 7)
// })

// bttConfirmarData.addEventListener("click", () => {
//     alert(`Deu certo ${dataFim}`)
//     containerFiltrarData.style.display = "none"
//     containerInicio.style.display = "block"
// })

filtrarCategoria.addEventListener("click", () => {
    let categoriaFiltrada = prompt("Digite a categoria que deseja filtrar:");
    let categoriaFiltradaUpper = categoriaFiltrada.trim().toUpperCase(); // Converte para maiúsculas

    let despesasFiltradas = gastos.filter(despesa => 
        despesa.categoria.toUpperCase() === categoriaFiltradaUpper // Compara em maiúsculas
    );
    mostrarDespesasFiltradas(despesasFiltradas);
})

function mostrarDespesasFiltradas(despesas) {
    divResultado.innerHTML = "" // Limpa a div antes de mostrar as despesas filtradas
    divFundo.innerHTML = ""
    despesas.forEach(function(despesa) {
        let despesaInfo = document.createElement("p");
        mostraDespesa.innerHTML = `Despesas Filtartadas pela Categoria<br>Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Data: ${despesa.dados}<br>Categoria: ${despesa.categoria}`
        divFundo.appendChild(mostraDespesa)
    });

}

// Opções de Edição

// const bttEditar = document.querySelector("#bttEditar")

// const containerEditar = document.querySelector("#containerEditar")

// bttEditar.addEventListener("click", () => {
//     containerInicio.style.display = "none"
//     containerEditar.style.display = "block"
// })



// Opções de deletar

const visualizacaoDeletar = document.querySelector("#visualizacaoDeletar")


const bttDeletar = document.querySelector("#bttDeletar")
const bttConfirmar = document.querySelector("#bttConfirmar")
const voltarInicioDeletar = document.querySelector("#voltarInicioDeletar")

const containerDeletar = document.querySelector("#containerDeletar")
let paraRemover = document.querySelector("#paraRemover")

bttDeletar.addEventListener("click", () => {
    containerInicio.style.display = "none"
    containerDeletar.style.display = "block"

    if (gastos.length == 0) {
        alert("A lista está vazia.")
    } else {
        visualizacaoDeletar.innerHTML = ""
        gastos.forEach(function(despesa) {
            let mostraDespesa = document.createElement("p")
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${despesa.data}`
            visualizacaoDeletar.appendChild(mostraDespesa)
        })
    }
})

bttConfirmar.addEventListener("click", () => {
    paraRemover = paraRemover.value.toUpperCase(); // Converte para maiúsculas
    
    let index = gastos.findIndex(function(despesa) {
        return despesa.descricao.toUpperCase() === paraRemover; // Compara em maiúsculas
    });

    if (index !== -1) {
        gastos.splice(index, 1);
        visualizacaoDeletar.innerHTML = ""
        gastos.forEach(function(despesa) {
            let mostraDespesa = document.createElement("p")
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${despesa.data}`
            visualizacaoDeletar.appendChild(mostraDespesa)
        })
        console.log(gastos);
        
        alert("Despesa deletada com sucesso!");
    } else {
        alert("Despesa não encontrada.");
    }

    if (gastos.length == 0) {
        visualizacaoDeletar.innerHTML = ""
        visualizacaoDeletar.innerHTML = "A lista está vazia"
    } else {
        visualizacaoDeletar.innerHTML = ""
        gastos.forEach(function(despesa) {
            let mostraDespesa = document.createElement("p")
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${despesa.data}`
            visualizacaoDeletar.appendChild(mostraDespesa)
        })
    }
})

voltarInicioDeletar.addEventListener("click", () => {
    containerInicio.style.display = "block"
    containerDeletar.style.display = "none"
})

// Opções Resumo 

const bttResumo = document.querySelector("#bttResumo")
const containerResumo = document.querySelector("#containerResumo")
const bttGastoNoMes = document.querySelector("#gastoNoMes")

bttResumo.addEventListener("click", () => {
    if (gastos.length == 0) {
        alert("A lista está vazia.")
    } else {
            containerInicio.style.display = "none"
            containerResumo.style.display = "block"

            visualizacao.innerHTML = ""
            gastos.forEach(function(despesa) {
                let mostraDespesa = document.createElement("p")
                mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${despesa.data}`
                visualizacao.appendChild(mostraDespesa)
            })
        }

    }
)