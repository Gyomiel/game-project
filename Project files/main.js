// Necessary variables

var canvas = document.getElementById("screen"); // Makes the id="screen" into a variable named canvas.
var startButton = document.getElementsByClassName("btn")[0]; // Button that starts the game from the title screen.
var startScreen =  document.getElementById("startScreen"); // Makes the id="startScreen" into a variable named startScreen.
var heyListen = document.getElementById("heyListen"); // "Hey, listen!" sound effect for the button.

// Character

var character = new Character(475, 500); // Sets the character into the canvas.

// Starting the game

var bgOST = document.getElementById("bgOST"); // "The Hero of Rhyme" soundtrack for the title screen.

function startGame() { // Starts the game.
    character.insertCharacter(); // Inserts the character into the game.
    
    timerMoveCharacter = setInterval(() => 
        character.characterMovementX() , 100)
}


// Title screen "Start" button

startButton.addEventListener("click", () => {
    
    heyListen.play(); // Plays the "Hey, Listen!" sound effect when the button is clicked.
    
    setTimeout(() => {
        canvas.style.display = "block"; // Hides the canvas while the title screen is on.
    startScreen.style.display = "none"; // Shows the title screen.
    startButton.style.display = "none"; // Shows the "Start" button.
    }, 2000);
    
    startGame(); // Starts the game.
});


