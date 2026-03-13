let itemDigite = document.getElementById("itemDigite");
let btnListar = document.getElementById("btnListar");
let lista = document.getElementById("lista");

btnListar.addEventListener("click", ()=>{

    let texto = itemDigite.value;

    if(texto != ""){

        let novoItem = document.createElement("li");
        novoItem.innerText = texto;
        novoItem.className = "list-group-item";
        
        lista.appendChild(novoItem);

        itemDigite.value = "";
    }

})
