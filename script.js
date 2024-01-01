const cellElement = document.querySelectorAll(".boardGame .cell");
const player1 = document.querySelector(".player .player1");
const player2 = document.querySelector(".player .player2");

const result =document.querySelector(".result");
const result_text =document.querySelector(".result h1");
const result_btn =document.querySelector(".result button");


const winning_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const playerO = "O";
const playerX ="X";
let toggleTurn = true;
cellElement.forEach((cell)=>{
    cell.onclick=()=>{
        let currentPlayer = toggleTurn ? playerO : playerX 
        cell.classList.add("disabled"); 

        addCell(cell , currentPlayer);
        
        if(win(currentPlayer)){
            result.classList.remove("inactive");
            result_text.innerHTML = currentPlayer + " Win the Game"
        }
       else if(isDraw()){
        result.classList.remove("inactive");
        result_text.innerHTML = "Draw the Game"
           }
     else{
        swapPlayer();
     

        }
    }

});

function isDraw(){
    return [...cellElement].every(cell=>{
        return cell.classList.contains(playerX) || cell.classList.contains(playerO)
    })
}


function swapPlayer(){
    toggleTurn = !toggleTurn;
    if(toggleTurn){
    player1.classList.add("active");
    player2.classList.remove("active");
    }
    else
    {
    player2.classList.add("active");
    player1.classList.remove("active"); 
    }
}

function addCell(cell , currentPlayer){
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer);
}

function win(currentPlayer){
    return winning_condition.some(condition=>{
     return   condition.every(index=>{
            return cellElement[index].classList.contains(currentPlayer);
        })
    })

}

result_btn.onclick=()=>{
    location.reload();
}