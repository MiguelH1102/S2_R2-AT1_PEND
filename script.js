let nome = document.getElementById("nome");
let btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", ()=>{
    alert(`Bem Vindo ${nome.value}`);
})