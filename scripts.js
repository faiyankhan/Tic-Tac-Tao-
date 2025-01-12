const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = 'X';

function renderBoard() {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach((boxElement, i) => {
        if (board[i] === 'X') {
            boxElement.innerHTML = '<img src="player1.png" height="70px" />';
        }
        else if (board[i] === 'O') {
            boxElement.innerHTML = '<img src="player2.png" height="70px" />';
        }
        else {
            boxElement.innerHTML = '';
        }
    })
}
renderBoard();


function selectBox(boxNumber) {
    if (board[boxNumber] !== -1) {
        alert(" Invalid Move : : Select Unfilled Boxes");
        return;
    }

    board[boxNumber] = currentPlayer;
    renderBoard();

    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}


function resetBoard() {
    board.fill(-1);
    renderBoard();

    currentPlayer = "X";
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}

function isPlayerPresent(places, player) {

    const a = places[0];
    const b = places[1];
    const c = places[2];

    if (board[a] == player && board[b] == player && board[c] == player) {
        return true;
    }
    else {
        return false;
    }
}


function checkForWinner() {
    if (isPlayerPresent ([0,1,2], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([3,4,5], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([6,7,8], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([0,3,6], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([1,4,7], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([2,5,8], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([0,4,8], "X")) {
        alert('Player X Wins 🎉');
    }
    else if (isPlayerPresent ([2,4,6], "X")) {
        alert('Player X Wins 🎉');
    }
}