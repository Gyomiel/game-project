var canvas = document.getElementById("screen");
var startButton = document.getElementsByClassName("btn")[0];
var startScreen =  document.getElementById("startScreen");

// Character

let character = new Character(475, 500);

// Starting the game

function startGame() {
    character.insertCharacter();
    
    

}

startButton.addEventListener("click", () => {
    
    
    canvas.style.display = "block";
    startScreen.style.display = "none";
    startButton.style.display = "none";
    
    startGame();
})


