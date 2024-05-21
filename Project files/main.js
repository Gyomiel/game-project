var canvas = document.getElementById("screen");
var startButton = document.getElementsByClassName("btn")[0];
var startScreen =  document.getElementById("startScreen");
var heyListen = document.getElementById("heyListen")
// Character

let character = new Character(475, 500);

// Starting the game
var bgOST = document.getElementById("bgOST");

function startGame() {
    character.insertCharacter();
    
    timerMoveCharacter = setInterval(() => 
        character.characterMovement() , 100)

}

startButton.addEventListener("click", () => {
    
    heyListen.play();
    

    setTimeout(() => {
        canvas.style.display = "block";
    startScreen.style.display = "none";
    startButton.style.display = "none";
    }, 2000);
    
    
    
    startGame();
})


