let tarefas = [];

for (let i = 0; i < 3; i++) {
    let tarefa = prompt("Digite uma tarefa para adicionar à lista:");
    tarefas.push(tarefa);
}

tarefas.splice(1, 1);

tarefas.push("ligar para o médico");

console.log("Lista de tarefas atualizada:", tarefas);

