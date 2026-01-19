let contador = 1;
function corpo() {
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const unidadeAltura = document.getElementById("unidade-altura").value;
        const alturaInput = Number(document.getElementById("altura").value);
        let altura;
        if (unidadeAltura === "metros") {
            altura = alturaInput;
        } else {
            altura = 1000*alturaInput;
        }
 
        const angulo = Number(document.getElementById("angulo-inicial").value);

        const unidadeVelocidade = document.getElementById("unidade-velocidade").value;
        const velocidadeInput = Number(document.getElementById("velocidade-inicial").value);
        let velocidade;
        
        if (unidadeVelocidade === "m/s") {
            velocidade = velocidadeInput;
        } else {
            velocidade = velocidadeInput/3.6;
        }
        
        const resultado = document.getElementById("resultado");

        let componenteVertical = Math.sin(angulo*(Math.PI/180))*velocidade;
        let tempo;
        tempo = (Math.sqrt(Math.pow(componenteVertical,2)+ 2*9.8*altura)+componenteVertical)/(9.8);
        
        const NewDiv = document.createElement("div");
        NewDiv.innerHTML = `
            <h4>Resultado ${contador}<h4>
            <p>Componente vertical da velocidade: ${componenteVertical.toFixed(2)}</p>
            <p>Tempo de queda(s): ${tempo.toFixed(2)}</p>
        `;
        resultado.appendChild(NewDiv);
        contador++;
    })
}
corpo();