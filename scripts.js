const board = [-1,-1, -1, -1, -1,-1, -1, -1, -1];
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


function selectBox(boxNumber){
    if(board[boxNumber] !== -1){
        alert(" Invalid Move : : Select Unfilled Box");
        return;
    }


  board[boxNumber] = currentPlayer;
  renderBoard();

  if(currentPlayer === "X"){
    currentPlayer = "O";
  }
  else{
    currentPlayer = "X";
  }

  const currentPlayerElement = document.getElementById("currentPlayer");
  currentPlayerElement.innerText = currentPlayer;
}