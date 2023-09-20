type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

let colorOfBox: Color = "rgb(0, 0, 0)"; // Assign a HEX value

function populateBoard(size:number){
    let board:HTMLElement = document.querySelector(".board")!;
    let squares:NodeListOf<HTMLDivElement> = board.querySelectorAll("div")!;
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    let noOfSquares:number = size*size;
    for(let i =0 ;i<noOfSquares;i++){
        let square:HTMLElement = document.createElement("div");
        square.style.backgroundColor = "white";
        /*square.style.border = "1px solid black";*/
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = colorOfBox;
        });

        board.insertAdjacentElement("beforeend",square);
    }
}
function changeSize(this: HTMLInputElement){
    let input:number = parseInt(this.value);
    if(input>=2 && input<=100){
        populateBoard(input);
    }
    else{
        alert("Please enter a valid value !");
    }
}

function changeColor(this: HTMLButtonElement){
    if(this.dataset.key == "reset"){
        let squares:NodeListOf<HTMLDivElement> = document.querySelectorAll(".board>div");
        squares.forEach((square)=>{
            square.style.backgroundColor = `rgb(255, 255, 255)`;
        });
    }
    else if(this.dataset.key == "random"){
        colorOfBox = `rgb(${Math.random()*254+1}, ${Math.random()*254+1}, ${Math.random()*254+1})`
    }
    else if(this.dataset.key == "black"){
    // console.log(this.dataset.key)
        colorOfBox = `rgb(0, 0, 0)`;
    }
    else{
        colorOfBox = `rgb(255, 0, 0)`
    }
}
populateBoard(16);
let inputSize:HTMLElement = document.querySelector("input")!;
inputSize?.addEventListener("change",changeSize);
let buttons:NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",changeColor);
})