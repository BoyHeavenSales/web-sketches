function action() {
    const form = document.querySelector(".formulario");
    const listaVerbetes = document.querySelector("#lista-verbetes");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Captura os valores no momento do clique
        const titulo = document.querySelector("#titulo").value;
        const conteudo = document.querySelector("#conteudo").value;
        const imagemSrc = document.querySelector("#imagem").value;

        // Validação simples
        if (titulo && conteudo) {
            criarVerbetes(titulo, conteudo, imagemSrc, listaVerbetes);
            form.reset(); // Limpa os campos após adicionar
        } else {
            alert("Por favor, preencha o título e o conteúdo.");
        }
    });
}

function criarVerbetes(titulo, conteudo, imagemSrc, listaVerbetes) {
    const verbeteDiv = document.createElement("div");
    verbeteDiv.classList.add("verbete-item"); // Adiciona uma classe para estilizar via CSS
    
    verbeteDiv.innerHTML = `
        <h3>${titulo}</h3>
        <p>${conteudo}</p>
        ${imagemSrc ? `<img src="${imagemSrc}" alt="${titulo}" style="max-width: 200px;">` : ''}
    `;

    listaVerbetes.appendChild(verbeteDiv);
}

action();