const board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

function renderBoard(){
    const box1 = document.getElementById('b1');

    if(board[0] === '0'){
        box1.innerText = '0';
    }
    else{
        box1.innerText = 'X';
    }

}
renderBoard();