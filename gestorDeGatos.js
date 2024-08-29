let texto01 = document.getElementById("texto01")
let div01 = document.getElementById("div01")
let divResultado = document.getElementById("res")
let divVisualizacao = document.getElementById("visu")
let divFundo = document.getElementById("fun")

let gastos = []

let botaoMostrarOpcoes = document.createElement("button")
botaoMostrarOpcoes.type = "button"
botaoMostrarOpcoes.id = "botaoMostrarOpcoes"
botaoMostrarOpcoes.innerText = "Mostrar Opções"
div01.appendChild(botaoMostrarOpcoes)

botaoMostrarOpcoes.addEventListener("click", function() {
    botaoMostrarOpcoes.style.display = "none"
    let botaoAdicionar = document.createElement("button")
    botaoAdicionar.type = "button"
    botaoAdicionar.id = "botaoMostrarOpcoes"
    botaoAdicionar.innerText = "Adicionar"
    div01.appendChild(botaoAdicionar)

    let botaoVisualizar = document.createElement("button")
    botaoVisualizar.type = "button"
    botaoVisualizar.id = "botaoMostrarOpcoes"
    botaoVisualizar.innerText = "Visualizar"
    div01.appendChild(botaoVisualizar)

    let botaoDeletar = document.createElement("button")
    botaoDeletar.type = "button"
    botaoDeletar.id = "botaoMostrarOpcoes"
    botaoDeletar.innerText = "Deletar"
    div01.appendChild(botaoDeletar)

    botaoAdicionar.addEventListener("click", function() {
        texto01.style.display = "none"
        botaoAdicionar.style.display = "none"
        botaoVisualizar.style.display = "none"
        botaoDeletar.style.display = "none"

    
        let descricao = document.createElement("input")
        descricao.type = "text"
        descricao.id = "descricaoDasDespesas"
        descricao.placeholder = "descrição"
        divResultado.appendChild(descricao)
    
        let valor = document.createElement("input")
        valor.type = "parseFloat"
        valor.id = "valorDaDespesa"
        valor.placeholder = "valor"
        divResultado.appendChild(valor)
    
        let dados = document.createElement("input")
        dados.type = "date"
        dados.id = "dadosDasDespesas"
        dados.placeholder = "dados"
        divResultado.appendChild(dados)
    
        let categoria = document.createElement("input")
        categoria.type = "text"
        categoria.id = "categoriasDasDespesas"
        categoria.placeholder = "categorias"
        divResultado.appendChild(categoria)
    
        let botaoEnviar01 = document.createElement("button")
        botaoEnviar01.type = "button"
        botaoEnviar01.innerText = "Enviar"
        botaoEnviar01.id = "botaoEnviar01"
        divFundo.appendChild(botaoEnviar01)
    
        let botaoLimpar = document.createElement("button")
        botaoLimpar.type = "reset"
        botaoLimpar.innerText = "Limpar não está funcionando"
        divFundo.appendChild(botaoLimpar)
        

        botaoEnviar01.addEventListener("click", function() {
            valorDescricao = descricao.value.trim();
            valorValor = valor.value.trim();
            valorDados = dados.value.trim();
            valorCategoria = categoria.value.trim();
    
            if (valorDescricao == "") {
                alert("Esqueceu a Descrição")
            } else if (valorDados == "") {
                alert("Esqueceu os Dados")
            } else if (valorValor == "") {
                alert("Esqueceu o Valor")
            } else if (valorCategoria == "") {
                alert("Esqueceu a Categoria")
            } else {
                let novaDespesa = {
                    descricao: valorDescricao,
                    dados: valorDados,
                    valor: valorValor,
                    categoria: valorCategoria
                }
                gastos.push(novaDespesa)
                divResultado.innerHTML = ""
            }
            botaoEnviar01.style.display = "none"
            botaoLimpar.style.display = "none"
            botaoMostrarOpcoes.style.display = "block"
        })
    
    }); 
    
    botaoVisualizar.addEventListener("click", function() {

        if (gastos.length == 0) {
            alert("Vc não adicionou nenhum gasto")
        } else {
            divResultado.innerHTML = "" 
            botaoAdicionar.style.display = "none"
            botaoVisualizar.style.display = "none"
            botaoDeletar.style.display = "none"

            gastos.forEach(function(despesa) {
                let mostraDespesa = document.createElement("p")
                mostraDespesa.innerHTML = `Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Data: ${despesa.dados}<br>Categoria: ${despesa.categoria}`
                divFundo.appendChild(mostraDespesa)
            })

            let botaoFiltrarData = document.createElement("button")
            botaoFiltrarData.type = "button";
            botaoFiltrarData.innerText = "Filtrar por Data";
            divFundo.appendChild(botaoFiltrarData);
            
            let botaoFiltrarCategoria = document.createElement("button")
            botaoFiltrarCategoria.type = "button";
            botaoFiltrarCategoria.innerText = "Filtrar por Categoria";
            divFundo.appendChild(botaoFiltrarCategoria);
            
            botaoFiltrarCategoria.addEventListener("click", function() {
                // Função de filtro por categoria
                divFundo.style.display = "none"
                botaoFiltrarData.style.display = "none"
                botaoFiltrarCategoria.style.display = "none"

                let categoriaFiltrada = prompt("Digite a categoria que deseja filtrar:");
                let categoriaFiltradaUpper = categoriaFiltrada.trim().toUpperCase(); // Converte para maiúsculas
            
                let despesasFiltradas = gastos.filter(despesa => 
                    despesa.categoria.toUpperCase() === categoriaFiltradaUpper // Compara em maiúsculas
                );
                mostrarDespesasFiltradas(despesasFiltradas);
            });
        
            function mostrarDespesasFiltradas(despesas) {
                divResultado.innerHTML = "" // Limpa a div antes de mostrar as despesas filtradas
                divFundo.innerHTML = ""
                despesas.forEach(function(despesa) {
                    let despesaInfo = document.createElement("p");
                    mostraDespesa.innerHTML = `Despesas Filtartadas pela Categoria<br>Descrição: ${despesa.descricao}<br>Valor: $R${despesa.valor}<br>Data: ${despesa.dados}<br>Categoria: ${despesa.categoria}`
                    divFundo.appendChild(mostraDespesa)
                });

            }
            

    }

    botaoDeletar.addEventListener("click", function() {
        let descricaoParaDeletar = prompt("Digite a descrição da despesa que deseja deletar:");
        let descricaoParaDeletarUpper = descricaoParaDeletar.trim().toUpperCase(); // Converte para maiúsculas
    
        let index = gastos.findIndex(function(despesa) {
            return despesa.descricao.toUpperCase() === descricaoParaDeletarUpper; // Compara em maiúsculas
        });
    
        if (index !== -1) {
            gastos.splice(index, 1);
            alert("Despesa deletada com sucesso!");
        } else {
            alert("Despesa não encontrada.");
        }
    });
    })
})
/*
    botaoVisualizar.addEventListener("click", function() {
        divResultado.innerHTML = ""; // Limpa a div antes de mostrar as despesas
        
        // Exibe todas as despesas na divResultado
        gastos.forEach(function(despesa) {
            let despesaInfo = document.createElement("p");
            despesaInfo.textContent = `Descrição: ${despesa.descricao}, Valor: ${despesa.valor}, Dados: ${despesa.dados}, Categoria: ${despesa.categoria}`;
            divResultado.appendChild(despesaInfo);
        });
    
        // Cria botões para filtro
        let botaoFiltrarData = document.createElement("button");
        botaoFiltrarData.type = "button";
        botaoFiltrarData.innerText = "Filtrar por Data";
        divResultado.appendChild(botaoFiltrarData);
    
        let botaoFiltrarValor = document.createElement("button");
        botaoFiltrarValor.type = "button";
        botaoFiltrarValor.innerText = "Filtrar por Valor";
        divResultado.appendChild(botaoFiltrarValor);
    
        let botaoFiltrarCategoria = document.createElement("button");
        botaoFiltrarCategoria.type = "button";
        botaoFiltrarCategoria.innerText = "Filtrar por Categoria";
        divResultado.appendChild(botaoFiltrarCategoria);
    
        // Adiciona eventos aos botões de filtro
        botaoFiltrarData.addEventListener("click", function() {
            // Função de filtro por data
            let despesasFiltradas = gastos.sort((a, b) => new Date(a.dados) - new Date(b.dados));
            mostrarDespesasFiltradas(despesasFiltradas);
        });
    
        botaoFiltrarValor.addEventListener("click", function() {
            // Função de filtro por valor
            let despesasFiltradas = gastos.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor));
            mostrarDespesasFiltradas(despesasFiltradas);
        });
    
        botaoFiltrarCategoria.addEventListener("click", function() {
            // Função de filtro por categoria
            let categoriaFiltrada = prompt("Digite a categoria que deseja filtrar:");
            let categoriaFiltradaUpper = categoriaFiltrada.trim().toUpperCase(); // Converte para maiúsculas
        
            let despesasFiltradas = gastos.filter(despesa => 
                despesa.categoria.toUpperCase() === categoriaFiltradaUpper // Compara em maiúsculas
            );
            mostrarDespesasFiltradas(despesasFiltradas);
        });
    
        function mostrarDespesasFiltradas(despesas) {
            divResultado.innerHTML = ""; // Limpa a div antes de mostrar as despesas filtradas
            despesas.forEach(function(despesa) {
                let despesaInfo = document.createElement("p");
                despesaInfo.textContent = `Descrição: ${despesa.descricao}, Valor: ${despesa.valor}, Dados: ${despesa.dados}, Categoria: ${despesa.categoria}`;
                divResultado.appendChild(despesaInfo);
            });
        }
    });

*/
