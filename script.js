let colorOfBox = "black";
function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    let noOfSquares = size*size;
    for(let i =0 ;i<noOfSquares;i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        /*square.style.border = "1px solid black";*/
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = colorOfBox;
        });

        board.insertAdjacentElement("beforeend",square);
    }
}
function changeSize(){
    let input = this.value;
    if(input>=2 && input<=100){
        populateBoard(input);
    }
    else{
        alert("Please enter a valid value !");
    }
}

function changeColor(){
    if(this.dataset.key == "reset"){
        let squares = document.querySelectorAll(".board>div");
        squares.forEach((square)=>{
            square.style.backgroundColor = "white";
        });
    }
    else if(this.dataset.key == "random"){
        colorOfBox = `hsl(${Math.random()*360},100%,50%)`
    }
    else{
    colorOfBox = this.dataset.key;
    }
}
populateBoard(16);
let inputSize = document.querySelector("input");
inputSize.addEventListener("change",changeSize);
let buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",changeColor);
})