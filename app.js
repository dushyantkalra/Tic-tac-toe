//variables
let pScore = 0;
let cScore = 0;
const playButton = document.querySelector('.play-btn button');
const chooseO = document.querySelector('.O');
const chooseX = document.querySelector('.X');
const selectionScreen = document.querySelector('.selection');
const gameScreen = document.querySelector('.game');
const introScreen = document.querySelector('.intro');
const winner = document.querySelector('.winner h2');
const line = document.querySelector('.strike');
const newGame = document.querySelector('.next button');
const next = document.querySelector('.next');
const compScore = document.querySelector('.computer-score p');
const playerScore = document.querySelector('.player-score p');
const modeScreen = document.querySelector('.modes');
const pvp = document.querySelector('.pvp');
const pvc = document.querySelector('.pvc');
var playerCharacter;
var computerCharacter;
var comp;
let count = 1;
let arr =[0,0,0,0,0,0,0,0,0];
let newArr =[];
let result;
let something ;
const gridButtons = document.querySelectorAll('.grid button');
//Event listeners
playButton.addEventListener('click',startGame);
chooseO.addEventListener('click',onToGameScreen);
chooseX.addEventListener('click',onToGameScreen);
newGame.addEventListener('click',Newgame);
pvp.addEventListener('click',onToCharacterScreenp);
pvc.addEventListener('click',onToCharacterScreenc);
gridButtons.forEach((gridButton,index)=>{
    gridButton.addEventListener('click',function(){
        newArr.push(arr.slice(0,3),arr.slice(3,6),arr.slice(6));
        console.log(checkWinner(newArr));
        if(something == 1){
            if(checkWinner(newArr)){
                winner.textContent = result;
                playerScore.textContent =  `${pScore/2}`;
                compScore.textContent =`${cScore/2}`;
                newGame.classList.add('dash');
            }
            else{
                newArr = [];
                this.textContent = playerCharacter;
                this.style.pointerEvents = "none";
                arr[index] = 1;
                newArr.push(arr.slice(0,3),arr.slice(3,6),arr.slice(6));
                let val = Math.floor(Math.random()*8);
                console.log(checkWinner(newArr));
                if(checkWinner(newArr)){
                    winner.textContent = result;
                    playerScore.textContent =  `${pScore/2}`;
                    compScore.textContent =`${cScore/2}`;
                    newGame.classList.add('dash');
                    return;
                }
                else{
                    newArr = [];
                    if(arr.indexOf(0) != -1){
                        for(let i= 0;i <20 ;i++){
                            if(val == index || arr[val] != 0){
                                val++;
                            }
                            else{
                                break;
                            }
                            if(val >8){
                                val = 0;
                            }
                       }
                       console.log(val);
                       arr[val] = 2;
                       gridButtons[val].textContent = `${computerCharacter}`;
                       gridButtons[val].style.pointerEvents = "none";
                       newArr.push(arr.slice(0,3),arr.slice(3,6),arr.slice(6));
                       if(checkWinner(newArr)){
                        winner.textContent = result;
                        playerScore.textContent =  `${pScore/2}`;
                        compScore.textContent =`${cScore/2}`;
                        newGame.classList.add('dash');
                        return;
                    }
                    }
                    
                    else{
                        winner.textContent = "It's a Tie";
                        newGame.classList.add('dash');
                        compScore.textContent = `${cScore/2}`;
                            playerScore.textContent = `${pScore/2}`;
                    }
                   
                   
                }

            }
        }
        else if(something == 0){
        
            let temp = arr.slice(0,3);
            let temp1 = arr.slice(3,6);
            let temp2 = arr.slice(6);
            newArr.push(temp,temp1,temp2);
        console.log(checkWinner(newArr));
        if(!checkWinner(newArr)){
            newArr =[];
            if(count % 2 != 0)
            {this.textContent = playerCharacter;
            this.style.pointerEvents = "none";
            let player = Number(this.classList[0])-1;
            arr[player] = 1;
            let temp = arr.slice(0,3);
            let temp1 = arr.slice(3,6);
            let temp2 = arr.slice(6);
            newArr.push(temp,temp1,temp2);
            console.log(newArr);
            console.log(checkWinner(newArr),count);
            if(checkWinner(newArr)){
                winner.textContent = "Player 1 Wins";
                newGame.classList.add('dash');
                compScore.textContent = `${cScore/2}`;
                playerScore.textContent = `${pScore/2}`;
                return;
            }
            newArr = [];
        count++;
        if(count == 10)
                {
                    winner.textContent = "It's a Tie";
            newGame.classList.add('dash');
            compScore.textContent = `${cScore/2}`;
                playerScore.textContent = `${pScore/2}`;
                }
    }
            else{
                
        if(arr.indexOf(0) != -1){
            this.textContent = computerCharacter;
                this.style.pointerEvents = "none";
                 val = Number(this.classList[0])-1;
                arr[val] = 2;
                let temp = arr.slice(0,3);
                let temp1 = arr.slice(3,6);
                let temp2 = arr.slice(6);
                newArr.push(temp,temp1,temp2);
                console.log(checkWinner(newArr));
                if(checkWinner(newArr)){
                    winner.textContent = "Player 2 Wins";
                    newGame.classList.add('dash');
                    compScore.textContent = `${cScore/2}`;
                    playerScore.textContent = `${pScore/2}`;
                    return;
                }
                newArr = [];
                count++;
        }
        else{
            winner.textContent = "It's a Tie";
            newGame.classList.add('dash');
            compScore.textContent = `${cScore/2}`;
                playerScore.textContent = `${pScore/2}`;
        }}
    }
        else{
            winner.textContent = result;
            compScore.textContent = `${cScore/2}`;
                playerScore.textContent = `${pScore/2}`;
                newGame.classList.add('dash');
        }
        newArr =[];
        }
        });
        
})
//Functions
function startGame(event){
    event.preventDefault();
    introScreen.classList.toggle('fadeOut');
    modeScreen.classList.toggle('fadeOut');
    pvp.style.cursor = "pointer";
    pvp.style.pointerEvents = "all";
    pvc.style.cursor = "pointer";
    pvc.style.pointerEvents = "all";
}
function onToCharacterScreenp(){
    selectionScreen.classList.toggle('fadeIn');
    modeScreen.classList.toggle('fadeOut');   
    chooseO.style.cursor = "pointer";
    chooseO.style.pointerEvents = "all";
    chooseX.style.cursor = "pointer";
    chooseX.style.pointerEvents = "all";
    document.querySelector('.choose h2').textContent ="Choose for Player 1";
    document.querySelector('.computer-score h2').textContent = "Player 2 Score";
    document.querySelector('.player-score h2').textContent = "Player 1 Score";
    something = 0;
}
function onToCharacterScreenc(){
    selectionScreen.classList.toggle('fadeIn');
    modeScreen.classList.toggle('fadeOut');   
    chooseO.style.cursor = "pointer";
    chooseO.style.pointerEvents = "all";
    chooseX.style.cursor = "pointer";
    chooseX.style.pointerEvents = "all";
    something = 1;
}
function onToGameScreen(event){
    event.preventDefault();
    selectionScreen.classList.toggle('fadeIn');
    gameScreen.classList.toggle('fadeIn');
    playerCharacter = event.target.textContent;
    if(playerCharacter == "X"){
        computerCharacter = "O";
    }
    else{
        computerCharacter = "X";
    }
    gridButtons.forEach(gridButton=>{
        gridButton.style.cursor = "pointer";
    });
}

const checkWinner = (newArr)=>{
    if(newArr[0][0] == newArr[0][1] && newArr[0][0] == newArr[0][2] && newArr[0][0] != 0){
        if(newArr[0][0] == 1){
            result = "Player Wins";
            line.classList.add('lineone');
            pScore++;
            return true;
        }
        else if(newArr[0][0] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('lineone');
            return true;
        }
    }
    else if(newArr[0][0] == newArr[1][0] && newArr[0][0] == newArr[2][0] && newArr[0][0] != 0){
        if(newArr[0][0] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linecolone');
            return true;
        }
        else if(newArr[0][0] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linecolone');
            return true;
        }
    }
    else if(newArr[0][0] == newArr[1][1] && newArr[0][0] == newArr[2][2] && newArr[0][0] != 0){
        if(newArr[0][0] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linediagone');
            return true;
        }
        else if(newArr[0][0] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linediagone');
            return true;
        }
    }
    else if(newArr[0][2] == newArr[1][1] && newArr[0][2] == newArr[2][0] && newArr[0][2] != 0){
        if(newArr[0][2] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linediagtwo');
            return true;
        }
        else if(newArr[0][2] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linediagtwo');
            return true;
        }
    }
    else if(newArr[0][1] == newArr[1][1] && newArr[1][1] == newArr[2][1] && newArr[0][1] != 0){
        if(newArr[0][1] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linecoltwo');
            return true;
        }
        else if(newArr[0][1] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linecoltwo');
            return true;
        }

    }
    else if(newArr[0][2] == newArr[1][2] && newArr[1][2] == newArr[2][2] && newArr[0][2] != 0){
        if(newArr[0][2] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linecolthree');
            return true;
        }
        else if(newArr[0][2] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linecolthree');
            return true;
        }
    }
    else if(newArr[1][0] == newArr[1][1] && newArr[1][0] == newArr[1][2] && newArr[1][0] != 0){
        if(newArr[1][0] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linetwo');
            return true;
        }
        else if(newArr[1][0] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linetwo');
            return true;
        }
    }
    else if(newArr[2][0] == newArr[2][1] && newArr[2][0] == newArr[2][2] && newArr[2][0] != 0){
        if(newArr[2][0] == 1){
            result = "Player Wins";
            pScore++;
            line.classList.add('linethree');
            return true;
        }
        else if(newArr[2][0] == 2){
            result = "Computer Wins";
            cScore++;
            line.classList.add('linethree');
            return true;
        }
    }
    else{
        return false;
    }
}
function Newgame(){
    gridButtons.forEach(gridButton=>{
        gridButton.textContent = "";
        gridButton.style.pointerEvents = "all";
        
        
        
    });
    count = 1;
    line.classList.remove(line.classList[1]);
    arr = [0,0,0,0,0,0,0,0,0];
        newArr = [];
    newGame.classList.remove(newGame.classList[1]);
    winner.textContent = "Game Start";
}