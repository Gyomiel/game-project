// Necessary variables

let canvas = document.getElementById("screen"); // Makes the id="screen" into a variable named canvas.
canvas.style.width = 1000 + "px";
canvas.style.height = 1000 +"px";
let startButton = document.getElementsByClassName("btn")[0]; // Button that starts the game from the title screen.
let startScreen =  document.getElementById("startScreen"); // Makes the id="startScreen" into a variable named startScreen.
let heyListen = document.getElementById("heyListen"); // "Hey, listen!" sound effect for the button.
let timerMoveCharacterX; // Moving time interval on X axis.
let timerMoveCharacterY; // Moving time interval on Y axis.
let timerMoveEnemyX;
let timerMoveEnemyY;

// Character

let character = new Character(475, 500); // Sets the character into the canvas.

// Enemies

let widthInt = canvas.style.width.slice(0, 4);
let heightInt = canvas.style.width.slice(0, 4);

let randomLocationX = Math.floor(Math.random() * (widthInt) - 40)
console.log(randomLocationX);

let randomLocationY = Math.floor(Math.random() * (heightInt - 800 + 1) + 800 - 40);
let enemy1 = new Enemy(randomLocationX, randomLocationY); // Sets the enemy into the canvas.
let randomLocationX2 = Math.floor(Math.random() * (widthInt) - 40)
let randomLocationY2 = Math.floor(Math.random() * (heightInt - 200 + 1) + 200 - 40);
let enemy2 = new Enemy(randomLocationX2, randomLocationY2);
let randomLocationX3 = Math.floor(Math.random() * (widthInt) - 40)
let randomLocationY3 = Math.floor(Math.random() * (heightInt - 400  + 1) + 400 - 40);
let enemy3 = new Enemy(randomLocationX3, randomLocationY3);


// Starting the game

let stOST = document.getElementById("stOST"); // "The Hero of Rhyme" soundtrack for the title screen.

function startGame() { // Starts the game.
    character.insertCharacter(); // Inserts the character into the game.
    enemy1.insertEnemy(); // Inserts enemies into the game.
    enemy2.insertEnemy();
    enemy3.insertEnemy();
    
    
    timerMoveCharacterX = setInterval(() => 
        character.characterMovementX() , 20);

    timerMoveCharacterY = setInterval(() => 
        character.characterMovementY() , 20);

    timerMoveEnemyX = setInterval(() =>
        enemy1.enemyMovementX(), 250);

    timerMoveEnemyX = setInterval(() =>
        enemy2.enemyMovementX(), 250);

    timerMoveEnemyX = setInterval(() =>
        enemy3.enemyMovementX(), 250);
    
    timerMoveEnemyY = setInterval(() =>
        enemy1.enemyMovementY(), 250);

    timerMoveEnemyY = setInterval(() =>
        enemy2.enemyMovementY(), 250);

    timerMoveEnemyY = setInterval(() =>
        enemy3.enemyMovementY(), 250);

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
