const nomeProduto = document.querySelector(".nome");
const precoProduto = document.querySelector(".preco");
const bttnAdd = document.querySelector(".adicionar");
const itensCarrinho = document.querySelector(".lista-itens");
const total = document.querySelector(".total");

let itens = [];
function criaLi(texto) {
    const li = document.createElement("li");
    li.innerText = texto;
    li.appendChild(criaButton());
    itensCarrinho.appendChild(li);
}
function criaButton() {
    const bttn = document.createElement("button");
    bttn.setAttribute("class", "apagar");
    bttn.textContent = "Remover";
    return bttn;
}
function apagarInput() {
    nomeProduto.value = "";
    precoProduto.value = "";
    nomeProduto.focus();
}

function atualizaTotal() {
    let soma = 0;
    document.querySelectorAll(".lista-itens li").forEach(li => {
        const valor = parseFloat(li.innerText.split("R$")[1]);
        if (valor) soma += valor;
    });
    total.innerText = soma.toFixed(2);
}

bttnAdd.addEventListener("click", function (e) {
    if(!precoProduto.value || !nomeProduto.value) return;
    
    criaLi(`${nomeProduto.value} - R$ ${precoProduto.value}`);
    salvarItens(); 
    apagarInput();
    atualizaTotal();
})

document.addEventListener("click", function (e) {
    const elementClick = e.target;
    if (elementClick.classList.contains("apagar")) {
        elementClick.parentElement.remove();
        salvarItens();
        atualizaTotal();
    }
});
function salvarItens() {

    const liItems = document.querySelectorAll("li");
    const listaDeTextos = [];

    for (let li of liItems) {
        let textoNo = li.innerText.replace("Remover", "").trim();
        listaDeTextos.push(textoNo);
    }

    const listJSON = JSON.stringify(listaDeTextos); 
    localStorage.setItem("itens", listJSON);
    
}
function addItens() {
    const itensStorage = localStorage.getItem("itens");
    if (!itensStorage) return; 

    const listaDeNomes = JSON.parse(itensStorage);

    for (let texto of listaDeNomes) {
        criaLi(texto);
    }
    atualizaTotal();
}
addItens();