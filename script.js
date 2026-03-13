let texto = document.getElementById("texto");
let btnAlterar = document.getElementById("btnAlterar");

btnAlterar.addEventListener("click", ()=>{
    texto.innerText = "Seu texto foi alterado com sucesso"
})