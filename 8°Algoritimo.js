let tarefasLimpeza = [];

for (let i = 0; i < 4; i++) {
    let tarefa = prompt("Digite uma tarefa de limpeza:");
    tarefasLimpeza.push(tarefa);
}

tarefasLimpeza.splice(2, 1);

tarefasLimpeza[1] = "limpar banheiro";

console.log("Tarefas de limpeza atualizadas:", tarefasLimpeza);
