document.addEventListener("DOMContentLoaded", function(){
    createBoard(8);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    });
    
});


function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = window.prompt("What size of the board would you like Sir?");

    let message = document.querySelector("#message");
    if(isNaN(input)){
        message.innerHTML = "Provide a number";
    } 
    else if(input < 1 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "now you can play";
        return input;
    }
}