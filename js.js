let b = document.getElementById("ttt");
let board = [];
let data = "";
let h = 1;
let result = document.getElementById('result');

for (let i = 0; i < 5; i++) {
    board[i] = ['-', '-', '-', '-', '-'];
    data += '<br>';
    for (let j = 0; j < 5; j++) {
        data += `${board[i][j]} &nbsp;`;
    }
}
b.innerHTML = data;

function changeValue() {
    data = '';
    let X = +prompt('X:');
    let Y = +prompt('Y:');
    if (h % 2 == 0) {
        board[X][Y] = 'o';
    } else {
        board[X][Y] = 'x';
    }
    h++;
    for (let i = 0; i < 5; i++) {
        data += '<br>';
        for (let j = 0; j < 5; j++) {
            data += `${board[i][j]} &nbsp;`;
        }

    }
    b.innerHTML = data;

    for(let i= 0; i<5; i++) {
        for (let j = 0; j < 5; j++) {
            if (board[i][j] === 'x' && board[i][j + 1] === 'x' && board[i][j + 2] === 'x' ||
                board[i][j] === 'x' && board[i + 1][j] === 'x' && board[i + 2][j] === 'x') {
                result.innerHTML = "x thắng";
            } else if (board[i][j] === 'o' && board[i][j + 1] === 'o' && board[i][j + 2] === 'o' ||
                board[i][j] === 'o' && board[i + 1][j] === 'o' && board[i + 2][j] === 'o') {
                result.innerHTML = "o thắng";
            }
        }
    }
}
