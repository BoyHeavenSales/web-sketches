function corpo() {
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const capitalIncial = Number(document.getElementById("capital-inicial").value);
        const unidadeCapital = document.getElementById("unidade-capital").value;
        const taxaJuros = Number(document.getElementById("taxa-juros").value)/100;
        const quantidadePeriodos = Number(document.getElementById("periodos").value);

        const montante = capitalIncial*((1 + taxaJuros)**quantidadePeriodos);
        const juros = montante - capitalIncial;

        const divResultado = document.getElementById("resultado");
        divResultado.innerHTML = `<p>Montante: ${montante.toFixed(2)} ${unidadeCapital}</p>
        <p>Juros: ${juros.toFixed(2)} ${unidadeCapital}</p>`;
        
    })
}
corpo();