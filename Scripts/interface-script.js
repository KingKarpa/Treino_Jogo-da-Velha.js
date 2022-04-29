// Função que, ao carregar a página, agrega evento aos quadrados do jogo
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach( (square) => {
        square.addEventListener('click', playerClick);
    })
})

// Variável para definição de display do botão de restart
let btnClear = document.getElementById("clear");

// Função que determina o que ocorre ao clicar no quadrado
// Define o alvo e o turno para desenhar o determinado símbolo (X ou O)
function playerClick(event){

    let square = event.target;
    let movePosition = square.id;
    playerMove(movePosition);
    drawMove(movePosition);
    endVerify()
}

// Função que, ao receber a posição e o turno, desenha o símbolo correspondente
function drawMove(position){

    let square = document.getElementById(position.toString());
    let symbol = gameSquare[position];
    if (symbol != ''){
        square.innerHTML = `<div class='${symbol}'></div>`
    }
}

// Função que, a cada turno, verifica se há vencedor ou empate, afim de definir o fim do jogo
// Ao confirmar o fim de jogo, exibe o botão para recomeçar o mesmo
function endVerify(){
    if (noWin == 9){
         setTimeout(() => {
            btnClear.style.display = "inline-block";
            alert("Fim de Jogo, sem vencedor.");
        }, 10)
        return
    };
    if (win){
        playerTime = (playerTime == 0) ? "O" : "X";
        setTimeout(() => {
            btnClear.style.display = "inline-block";
            alert(`Fim de Jogo, ${playerTime} venceu a partida!!`);
        }, 10)
        return
    }
    return
}

// Função que redefine as variáveis e o quadro, afim de recomeçar o jogo do zero
// Ao finalizar as redefinições, esconde o botão de recomeço
function gameClear(){
    let squares = document.querySelectorAll(".square");
    squares.forEach( (square) => {
        square.innerHTML = "<div class=''></div>"
    })
    gameSquare = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    win = false;
    noWin = 0;
    btnClear.style.display = "none";
}