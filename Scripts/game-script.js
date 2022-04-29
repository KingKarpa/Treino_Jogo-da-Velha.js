// Iniciando variáveis
// Uma simboliza os 9 espaços no quadro do jogo, outro os possíveis símbolos, já o último o jogador da vez
let gameSquare = ['', '', '', '', '', '', '', '', ''];
let gameSymbol = ['o', 'x'];
let playerTime = 0;
let win = false;
let noWin = 0;
let winStage = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
] 

function playerMove(position){

    // Mesma coisa que "Se win for igual a true"
    if (win){
        return;
    }

    if (gameSquare[position] == ''){
        gameSquare[position] = gameSymbol[playerTime];

        win = gameOver();

        if (win == false){

            playerTime = (playerTime == 0) ? 1 : 0;
            // if (playerTime == 0){
            //     playerTime = 1;
            // } else {
            //     playerTime = 0;
            // }
        }
    }
}

function gameOver(){

    for (i = 0; i < winStage.length; i++){
        let seq = winStage[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (gameSquare[pos1] == gameSquare[pos2] &&
            gameSquare[pos1] == gameSquare[pos3] &&
            gameSquare[pos1] != ''){
                return true;
        }
    }
    noWin +=1;
    // console.log(noWin);
    return false;
}