const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", ()=>{

    const texto = input.value;

    if(texto === ""){
        
        mensagem.textContent = "Digite algo para adicionar há lista!";
        mensagem.className = "text-danger fw-bold";

        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = texto;

    novaTarefa.className = "list-group-item";

    lista.appendChild(novaTarefa);

    input.value = "";

    mensagem.textContent = "Item adicionado com sucesso!";
    mensagem.className = "text-success fw-bold";

});