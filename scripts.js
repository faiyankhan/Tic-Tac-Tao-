const board = [X, -1, -1, -1, -1, -1, -1, -1, -1];

function renderBoard() {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach((boxElement, i) => {
        if (board[i] === 'X') {
            boxElement.innerHTML = '<img src=".IMG/player1.png" height="50px" />';
        }
        else if (board[i] === 'O') {
            boxElement.innerHTML = '<img src=".IMG/player2.png" height="50px" />';
        }
        else {
            boxElement.innerHTML = '';
        }
    })

}
renderBoard();