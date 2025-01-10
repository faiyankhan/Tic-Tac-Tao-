const board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

function renderBoard(){
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach((boxElement, i)=>{
        if(board[i] ==='X'){
            boxElement.innerHTML = 'X';
        }
        else{
            boxElement.innerHTML = 'O';
        }
    })


}
renderBoard();