// Exercício 3:

const tarefas = [
    "Lavar a louça",
    "Fazer um lanche",
    "Nem acredito que fiz sozinho essa!"
]

const tarefa = process.argv[2]

const adiciona = () => {
    tarefas.push(tarefa)
}

adiciona()
console.log(tarefas)