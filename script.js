const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click",  ()=> {

    const texto = input.value;

    if (texto === "") {
        mensagem.textContent = "Digite sua tarefa na lista!";
        mensagem.className = "text-danger fw-bold";
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = texto;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover Tarefa";
    btnRemover.className = "btn btn-danger btn-sm";

    btnRemover.addEventListener("click",  ()=> {
        lista.removeChild(novaTarefa);
    });

    novaTarefa.appendChild(span);
    novaTarefa.appendChild(btnRemover);


    lista.appendChild(novaTarefa);

    input.value = "";

    mensagem.textContent = "Tarefa adicionado com sucesso!";
    mensagem.className = "text-success fw-bold";
})