function corpo() {
    const form = document.querySelector("#formulario");
    
    form.addEventListener("submit", function action(e) {
        e.preventDefault();

        const nome = document.getElementById("termo").value;
        const definicao = document.getElementById("definicao").value;
        const ListaVerbetes = document.getElementById("lista-verbetes");

        const DivNewVerbete = document.createElement("div");
        DivNewVerbete.innerHTML = `<h2>${nome}</h2><p>${definicao}</p>`;
        ListaVerbetes.appendChild(DivNewVerbete);
    })
}
corpo();