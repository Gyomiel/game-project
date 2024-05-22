// Necessary variables

var canvas = document.getElementById("screen"); // Makes the id="screen" into a variable named canvas.
canvas.style.width = 1000 + "px";
canvas.style.height = 1000 +"px";
var startButton = document.getElementsByClassName("btn")[0]; // Button that starts the game from the title screen.
var startScreen =  document.getElementById("startScreen"); // Makes the id="startScreen" into a variable named startScreen.
var heyListen = document.getElementById("heyListen"); // "Hey, listen!" sound effect for the button.
var timerMoveCharacterX; // Moving time interval on X axis.
var timerMoveCharacterY; // Moving time interval on Y axis.

// Character

var character = new Character(475, 500); // Sets the character into the canvas.

// Enemies

var widthInt = canvas.style.width.slice(0, 4);
var heightInt = canvas.style.width.slice(0, 4);

var randomLocationX = Math.floor(Math.random() * (widthInt) - 40)
console.log(randomLocationX);

var randomLocationY = Math.floor(Math.random() * (heightInt - 800 + 1) + 800 - 40);
var enemy = new Enemy(randomLocationX, randomLocationY); // Sets the enemy into the canvas.
console.log(heightInt)

// Starting the game

var bgOST = document.getElementById("bgOST"); // "The Hero of Rhyme" soundtrack for the title screen.

function startGame() { // Starts the game.
    character.insertCharacter(); // Inserts the character into the game.
    enemy.insertEnemy(); // Inserts enemies into the game.

    
    timerMoveCharacterX = setInterval(() => 
        character.characterMovementX() , 20);

    timerMoveCharacterY = setInterval(() => 
        character.characterMovementY() , 20);

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


// Keybinding 

window.addEventListener("keydown", function(e) {
    switch(e.key) {
        case "a":
            character.directionX = -1;
            break;
        case "d":
            character.directionX = 1;
            break;
        case "w":
            character.directionY = -1;
            break;
        case "s":
            character.directionY = 1;
            break;
    }
})

window.addEventListener("keyup", function(e) {
    switch(e.key) {
        case "a":
        case "d":
            character.directionX = 0;
            break;
        case "w":
        case "s":
            character.directionY = 0;
            break;
    }
})
