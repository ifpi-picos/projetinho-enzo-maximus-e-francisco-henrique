
let tarefas = []

let continua = true

while(continua) {
    let opcoes = prompt("O que vc quer fazer?\n[1] Adicionar uma tarefa\n[2] Exibir lista de tarefas\n[0] Encerrar o programa\n")

    if (opcoes == 1) {
        let titulo, descricao, vencimento, prioridade
        while (true) {
            titulo = prompt("\nTítulo da Tarefa: ")
            if (titulo. trim() !== "") break;
            console.log("Cloque o título!");
        }

        descricao = prompt("\nTodos os campos são obrigatórios, exceto a descrição, que é opcional: ")

        while (true) {
            vencimento = prompt("\nData em que a tarefa deve ser concluída: ")
            if (vencimento.trim() !== "") break
            console.log("Coloque o vencimento!")
        }
        while (true) {
            prioridade = prompt("\nNível de importância da tarefa (Baixa, Média, Alta): ")
            if (prioridade.trim() !== "") break
            console.log("Coloque a prioridade!")
        }

        tarefas.push({
            titulo: titulo,
            descricao: descricao,
            vencimento: vencimento,
            prioridade: prioridade            
        })
        
    } else if (opcoes == 2) {
        console.log(`A quantidade de tarefas é de: ${tarefas.length}`);
        
        console.log(tarefas);
        
    } else if (opcoes == 3) {
        let maisOpcoes = prompt(parseInt(`Escolha como vc quer visualizar as tarefas:\n[1] Tarefas pendentes e concuídas\n[2] Ordenar por data de vencimento\n [3] Prioridade\n [4] Data de criação.`))
        if (maisOpcoes == 1) {
            console.log(tarefas.vencimento)
        }
    }
      else if (opcoes == 0) {
        console.log(`Vc encerrou o programa. A quantidade de tarefas adicionadas foi de ${tarefas.length}`)
        continua = false
    } else {
        console.log("Digite algo válido.");
        
    }
}
