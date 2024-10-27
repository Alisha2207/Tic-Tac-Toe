let boxes= document.querySelectorAll(".box");
let resetButton= document.querySelector("#reset");
let newButton= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
// let isDraw= document.querySelector(".isDraw");
let count=0;


let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=> { 
box.addEventListener("click", ()=>{
    console.log("box was clicked");

    if(turnO){
        box.innerText="O";
        turnO=false;
        // count++;
    }

    else{
        box.innerText="X";
        turnO=true;
       
    }

    box.disabled=true;
     count++;
    checkWinner();
})
})

function checkWinner(){

    let foundWinner=false;
    for(pattern of winPatterns){       
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!=""&& pos3Val!=""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            showWinner(pos1Val);
            foundWinner=true;
        }
    }
    }

    if(!foundWinner && count===9){
        showDraw();
    }

}

function showDraw() { // Function to handle a draw
    msg.innerText = `It's a Draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

 
function disableBoxes(){
 for(let box of boxes){
    box.disabled=true;
 }

}

function enableBoxes(){
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
   
   }


function showWinner(winner){
    msg.innerText=`Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   
}

// function showDraw(){
//     isDraw.innerText=`DRAW!!`;
//     isDraw.classList.remove("hide");
//     disableBoxes();

   
// }

function resetGame(){
turnO=true;
count = 0;
enableBoxes();
msgContainer.classList.add("hide");
}

newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);

