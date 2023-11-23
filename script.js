
let colorChoice = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(8);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
        }

        let draw = document.querySelector("#toggleDrawing");

        if(click){
            draw.innerHTML = "You can draw your masterpiece now!";
        }
        else{
            draw.innerHTML = "click your mouse to draw!";
        }
    });

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
        div.addEventListener("mouseover", changeColor);
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

function getColor(newColor){
    colorChoice = newColor;
}

function changeColor(){
    if(click){
        if(colorChoice == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = 'black';
        }
    }
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = 'white');
}
