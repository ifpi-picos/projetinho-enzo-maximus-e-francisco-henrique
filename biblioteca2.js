/*
Adicionar Novo Livro
Descrição:Permitir que o usuário adicione um novo livro à biblioteca.
Campos Necessários:
Título do Livro
Autor
Ano de Publicação
Gênero
ID Único (gerado automaticamente)
Validação:Todos os campos são obrigatórios.
*/


let continuar = true
let biblioteca = [
    {
        nomeDoLivro: "Como Flechas ",
        tituloDoLivro: "O mesmo Nome ",
        anoDePublicacao: "2010 ",
        generoDoLivro: "Espiritualidade ",
        geradorDeId: crypto.randomUUID()
    }
]

while (continuar) {
    
    let quantidadeDeLivros = biblioteca.length
    

    console.log("[1] Para adicionar livros\n[2] Para ver os livros na biblioteca\n[0] Encerra o programa")
    let opcoes = prompt("Qual opção vc escolhe?")

    if (opcoes == 1) {
        biblioteca.push({
            nomeDoLivro: prompt("Digite o nome do livro: "),
            tituloDoLivro: prompt("Título: "),
            anoDePublicacao: prompt("Ano de Publicação: "),
            generoDoLivro: prompt("Gênero: "),
            geradorDeId: crypto.randomUUID()
        })
        console.log("Livro adicionado!")
        console.log(`A quantidade de livros adicionados é ${quantidadeDeLivros}`)
    }
    else if (opcoes == 2) {
        console.log(biblioteca)
        console.log(`A quantidade livros guardados é de: ${quantidadeDeLivros}`)
        
    }
    else if (opcoes == 0) {
        continuar = false
        console.log("Vc encerrou a operação.")
        console.log(`A quantidade de livros adicionados é ${quantidadeDeLivros}`)
    }
    else {
        console.log("Operação inválida. Tente novamente");
        
    }
}

