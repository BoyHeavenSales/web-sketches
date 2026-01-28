const tempo = document.querySelector(".tempo");
// buttons
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

// declarando variaveis que serão modificadas
let setTempo;
let timer = new Date(0); // iniciando no tempo 0

function runTempo() {
    // atualizando o valor do timer
    // timeZone: utc para atualizar o fuso horario
    tempo.textContent = `${timer.toLocaleTimeString("pt-BR", {timeZone: "UTC"})}`;
}
iniciar.addEventListener("click", function (e) {
    // impede que masi de um setInterval seja execultado por vez
    clearInterval(setTempo, 1000);
    // criando um atulização de horario periodica de 1 segundo
    setTempo = setInterval( function () {
        timer.setSeconds(timer.getSeconds() + 1);
        runTempo();
    }, 1000);
})
pausar.addEventListener("click", function (e) {
    // simplesmente para o setInterval em atividade se houver
    clearInterval(setTempo, 1000);
})
zerar.addEventListener("click", function (e) {
    clearInterval(setTempo, 0);
    // atualiza o horario de timer para 00:00:00
    timer.setTime(0,0,0,0);
    runTempo();
})
