let gastos = [
    {
        descricao: "Carro",
        valor: 4,
        categoria: "Transorte",
        data: new Date("2024-09-09")
    },
    {
        descricao: "Moto",
        valor: 40000,
        categoria: "Transorte",
        data: new Date("2024-10-09")
    },
    {
        descricao: "Caminhão",
        valor: 7826316,
        categoria: "Dormir",
        data: new Date("2024-09-09")
    },
    {
        descricao: "Camelo",
        valor: 50,
        categoria: "Viajar",
        data: new Date("2024-10-09")
    }
]


// let filtrados = []

const containerPadrao = document.querySelector("#containerPadrao")

const bttMostrarOp = document.querySelector("#botaoMostrarOpcoes")
const containerInicio = document.querySelector("#containerInicio")

bttMostrarOp.addEventListener("click", () => {
    containerInicio.style.display = "block"
    containerPadrao.style.display = "none"
})

// é o seguinte Chat, assim como "bttAdicionar", "bttVisualizar", "bttResumo"

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
const voltarInicioAdicionar = document.querySelector("#voltarInicioAdicionar")
// const ultimaDespesa = gastos[gastos.length - 1]
// const idDespesa = (ultimaDespesa.id + 1).value

bttEnviar.addEventListener("click", () => {
    descricaoVv = descricaoValue.value.trim();
    valorVv = valorValue.value.trim();
    categoriaVv = categoriaValue.value;
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
            data: new Date(dataVv)
        }
        gastos.push(novaDespesa)
        // alert(idDespesa)

    }
    
    containerPadrao.style.display = "block"
    containerAdicionar.style.display = "none"
})

voltarInicioAdicionar.addEventListener("click", () => {
    containerPadrao.style.display = "block"
    containerAdicionar.style.display = "none"
    containerVisualizar.style.display = "none"
})

// Opções de visualizar

const bttVisualizar = document.querySelector("#bttVisualizar")

const containerVisualizar = document.querySelector("#containerVisualizar")

const bttFiltrarCategoria = document.querySelector("#filtrarCategoria")
const voltarInicio = document.querySelector("#voltarInicio")

const visualizacao = document.querySelector("#visualizacao")

bttVisualizar.addEventListener("click", () => {
    containerInicio.style.display = "none"
    containerVisualizar.style.display = "block"

    if (gastos.length == 0) {
        alert("Vc não adicionou nenhum gasto")
    } else {
        visualizacao.innerHTML = ""
        gastos.forEach(function(despesa) {
            let dia = String(despesa.data.getDate()).padStart(2, "0")
            let mes = String(despesa.data.getMonth() + 1).padStart(2, "0")
            let ano = despesa.data.getFullYear()

            let dataFormatada = `${dia}/${mes}/${ano}`

            let mostraDespesa = document.createElement("p")
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`
            visualizacao.appendChild(mostraDespesa)
        })
    }
})

voltarInicio.addEventListener("click", () => {
    containerVisualizar.style.display = "none"
    containerInicio.style.display = "block"
})

// Opções de Filtrar

const filtrarCategoria = document.querySelector("#filtrarCategoria")

filtrarCategoria.addEventListener("click", () => {
    let categoriaFiltrada = prompt("Digite a categoria que deseja filtrar:");
    let categoriaFiltradaUpper = categoriaFiltrada.trim().toUpperCase(); // Converte para maiúsculas

    let despesasFiltradas = gastos.filter(despesa => 
        despesa.categoria.toUpperCase() === categoriaFiltradaUpper // Compara em maiúsculas
    );
    mostrarDespesasFiltradas(despesasFiltradas);
})

function mostrarDespesasFiltradas(despesas) {
    visualizacao.innerHTML = ""
    despesas.forEach(function(despesa) {
        let dia = String(despesa.data.getDate()).padStart(2, "0");
        let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
        let ano = despesa.data.getFullYear();
        let dataFormatada = `${dia}/${mes}/${ano}`;

        let mostraDespesa= document.createElement("p");
        mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
        visualizacao.appendChild(mostraDespesa)
    });
}

// Opções de Edição

const bttEditarInicio = document.querySelector("#bttEditar")

bttEditarInicio.addEventListener("click", () => {
    containerInicio.style.display = "none"
    containerEditar.style.display = "block"
})

const bttPesquisar = document.querySelector("#bttPesquisar")
const containerEditar = document.querySelector("#containerEditar")

const inputPesquisaEditar = document.querySelector("#pesquisaEditar")
const bttVoltarDoEditar = document.querySelector("#bttVoltarDoEditar")

bttVoltarDoEditar.addEventListener("click", () => {
    containerEditar.style.display = "none"
    containerInicio.style.display = "block"
})

function verificarData(campoData) {
    // Verifica se a data está no formato correto usando regex
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(campoData)) {
        return false;
    }

    // Verifica se a data é válida
    let data = new Date(campoData);
    return !isNaN(data.getTime());
}


bttPesquisar.addEventListener("click", () => {
    containerInicio.style.display = "none";
    containerEditar.style.display = "block";

    let index = gastos.findIndex((elemento) => {
        return elemento.descricao.toUpperCase() === inputPesquisaEditar.value.toUpperCase();
    });

    if (index === -1) {
        alert("Despesa não encontrada");
    } else {
        let desc = window.prompt("Digite a descrição:");
        let val = window.prompt("Digite o valor:");
        let categ = window.prompt("Digite a categoria:");
        let data = window.prompt("Digite a data no formato AAAA-MM-DD:");

        // Verificação dos campos
        if (
            desc === null || desc === "" ||
            val === null || val === "" || isNaN(Number(val)) ||
            categ === null || categ === "" ||
            data === null || data === "" || !verificarData(data)
        ) {
            alert("Por favor, preencha todos os campos corretamente");
            return;
        } else {
            gastos[index] = {
                descricao: desc,
                valor: Number(val),
                categoria: categ,
                data: new Date(data)
            };
            alert("Despesa editada com sucesso!");
        }
    }
});


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
            let dia = String(despesa.data.getDate()).padStart(2, "0");
            let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
            let ano = despesa.data.getFullYear();
            let dataFormatada = `${dia}/${mes}/${ano}`;

            let mostraDespesa = document.createElement("p");
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
            visualizacaoDeletar.appendChild(mostraDespesa);
        })
    }
})

bttConfirmar.addEventListener("click", () => {
    
    let index = gastos.findIndex(function(despesa) {
        return despesa.descricao.toUpperCase() === paraRemover.value.toUpperCase(); // Compara em maiúsculas
    });

    if (index !== -1) {
        gastos.splice(index, 1);
        visualizacaoDeletar.innerHTML = ""
        if (gastos.length !== 0){
            gastos.forEach(function(despesa) {
                let dia = String(despesa.data.getDate()).padStart(2, "0");
                let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
                let ano = despesa.data.getFullYear();
                let dataFormatada = `${dia}/${mes}/${ano}`;

                let mostraDespesa = document.createElement("p");
                mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
                visualizacaoDeletar.appendChild(mostraDespesa);
            })
            
            alert("Despesa deletada com sucesso!");
        } else {
            visualizacaoDeletar.innerHTML = ""
            visualizacaoDeletar.innerHTML = "A lista está vazia"
        }
        
    } else {
        alert("Despesa não encontrada.");
    }
})

voltarInicioDeletar.addEventListener("click", () => {
    containerInicio.style.display = "block"
    containerDeletar.style.display = "none"
})

// Opções Resumo 

const bttResumo = document.querySelector("#bttResumo")

const containerResumo = document.querySelector("#containerResumo")

const containerOpResumo = document.querySelector("#containerOpResumo")

const bttVoltarInicioResumo = document.querySelector("#voltarInicioResumo")
const selecionarMeses = document.querySelector("#selecionarMeses")
const valorSelecionarMeses = selecionarMeses.value
const confirmarMes = document.querySelector("#confirmarMes")

bttVoltarInicioResumo.addEventListener("click", () => {
    containerResumo.style.display = "none"
    containerInicio.style.display = "block"
})

bttResumo.addEventListener("click", () => {
    if (gastos.length == 0) {
        alert("A lista está vazia.")
    } else {
            containerInicio.style.display = "none"
            containerOpResumo.style.display = "block"
        }
    }
)

const visualizacaoNoResumo = document.querySelector("#visualizacaoNoResumo")

// Total gasto no mês
confirmarMes.addEventListener("click", () => {
    visualizacaoNoResumo.innerHTML = "";

    let valorSelecionarMeses = selecionarMeses.value; // Certifique-se de obter o valor dentro do evento de clique

    // Filtra os gastos pelo mês selecionado
    let gastosFiltrados = gastos.filter((elemento) => {
        let mes = String(elemento.data.getMonth() + 1).padStart(2, "0").trim();
        return mes === valorSelecionarMeses;
    });

    // Verifica se há gastos filtrados
    if (gastosFiltrados.length === 0) {
        visualizacaoNoResumo.innerHTML = "<p>Nenhum gasto encontrado para o mês selecionado.</p>";
    } else {
        // Exibe os gastos filtrados
        gastosFiltrados.forEach(function(despesa) {
            let dia = String(despesa.data.getDate()).padStart(2, "0");
            let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
            let ano = despesa.data.getFullYear();
            let dataFormatada = `${dia}/${mes}/${ano}`;

            let mostraDespesa = document.createElement("p");
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
            visualizacaoNoResumo.appendChild(mostraDespesa);
        });

        let totalGastos = 0

        for (const element of gastosFiltrados) {
            totalGastos += element.valor
        }

        visualizacaoNoResumo.innerHTML += `<p>Gastos no mês: R$ ${totalGastos}</p>`;
    }

    
});

// Total gasto de categoria

const bttVoltarOpResumo = document.querySelector("#voltarInicioResumoOp")

bttVoltarOpResumo.addEventListener("click", () => {
    containerOpResumo.style.display = "none"
    containerInicio.style.display = "block"
})


const bttGastoNoMes = document.querySelector("#gastoNoMes")

bttGastoNoMes.addEventListener("click", () => {
    containerOpResumo.style.display = "none"
    containerResumo.style.display = "block"
})

const bttGastoPorCategoria = document.querySelector("#gastoPorCategoria")

const containerResumoCategoria = document.querySelector("#containerResumoCategoria")

bttGastoPorCategoria.addEventListener("click", () => {
    containerOpResumo.style.display = "none"
    containerResumoCategoria.style.display = "block"
})


const inputCategoria = document.querySelector("#inputCategoria")

const visualizacaoNoResumoCategoria = document.querySelector("#visualizacaoNoResumoCategoria")

const bttConfirmarCategoria = document.querySelector("#confirmarCategoria")

bttConfirmarCategoria.addEventListener("click", () => {

    visualizacaoNoResumoCategoria.innerHTML = "";

    let valorSelecionarCategoria = inputCategoria.value.toUpperCase();

    // Filtra os gastos pelo mês selecionado
    let gastosFiltrados = gastos.filter((elemento) => {
        return elemento.categoria.toUpperCase() === valorSelecionarCategoria;
    });
    console.log(gastosFiltrados);
    
    // Verifica se há gastos filtrados
    if (gastosFiltrados.length === 0) {
        visualizacaoNoResumoCategoria.innerHTML = "<p>Nenhum gasto encontrado para a categoria selecionado.</p>";
    } else {
        // containerResumoCategoria.style.display = "none"
        // visualizacaoNoResumoCategoria.style.display = "block"
        // Exibe os gastos filtrados
        gastosFiltrados.forEach(function(despesa) {
            let dia = String(despesa.data.getDate()).padStart(2, "0");
            let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
            let ano = despesa.data.getFullYear();
            let dataFormatada = `${dia}/${mes}/${ano}`;

            let mostraDespesa = document.createElement("p");
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
            visualizacaoNoResumoCategoria.appendChild(mostraDespesa);
        });

        let totalGastos = 0

        for (const element of gastosFiltrados) {
            totalGastos += element.valor
        }

        visualizacaoNoResumoCategoria.innerHTML += `<p>Gastos na categoria: R$ ${totalGastos}</p>`;
    }
})

const voltarInicioResumoCategoria = document.querySelector("#voltarInicioResumoCategoria")

voltarInicioResumoCategoria.addEventListener("click", () => {
    containerResumoCategoria.style.display = "none"
    containerOpResumo.style.display = "block"    
})


// Media 

const gastoMedioDiario = document.querySelector("#gastoMedioDiario")
const containerResumoMedia = document.querySelector("#containerResumoMedia")
const voltarInicioResumoMedia = document.querySelector("#voltarInicioResumoMedia")


gastoMedioDiario.addEventListener("click", () => {
    containerOpResumo.style.display = "none"
    containerResumoMedia.style.display = "block"
})

voltarInicioResumoMedia.addEventListener("click", () => {
    containerResumoMedia.style.display = "none"
    containerOpResumo.style.display = "block"
})

const selecionarMesesMedia = document.querySelector("#selecionarMesesMedia")
const confirmarMesMedia = document.querySelector("#confirmarMesMedia")

const visualizacaoNoResumoMedia = document.querySelector("#visualizacaoNoResumoMedia")

confirmarMesMedia.addEventListener("click", () => {
    visualizacaoNoResumoMedia.innerHTML = "";
    let valorSelecionarMesesMedia = selecionarMesesMedia.value;

    let gastosFiltradosMedia = gastos.filter((elemento) => {
        let mes = String(elemento.data.getMonth() + 1).padStart(2, "0").trim();
        return mes === valorSelecionarMesesMedia;
    });
    
    if (gastosFiltradosMedia.length === 0) {
        visualizacaoNoResumoMedia.innerHTML = "<p>Nenhum gasto encontrado para o mês selecionado.</p>";
    } else {
        // Exibe os gastos filtrados
        gastosFiltradosMedia.forEach(function(despesa) {
            let dia = String(despesa.data.getDate()).padStart(2, "0");
            let mes = String(despesa.data.getMonth() + 1).padStart(2, "0");
            let ano = despesa.data.getFullYear();
            let dataFormatada = `${dia}/${mes}/${ano}`;

            let mostraDespesa = document.createElement("p");
            mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: R$${despesa.valor}<br>Categoria: ${despesa.categoria}<br>Data: ${dataFormatada}`;
            visualizacaoNoResumoMedia.appendChild(mostraDespesa);
        });

        let totalGastos = 0

        for (const element of gastosFiltradosMedia) {
            totalGastos += element.valor
        }

        visualizacaoNoResumoMedia.innerHTML += `<p>Média de gasto diário no mês: R$ ${(totalGastos / 30).toFixed(2)}</p>`;
    }
})
