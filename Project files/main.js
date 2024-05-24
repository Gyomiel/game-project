// Necessary variables

let canvas = document.getElementById("screen"); // Makes the id="screen" into a variable named canvas.
canvas.style.width = 1000 + "px";
canvas.style.height = 1000 + "px";
let startButton = document.getElementsByClassName("btn")[0]; // Button that starts the game from the title screen.
let startScreen = document.getElementById("startScreen"); // Makes the id="startScreen" into a variable named startScreen.
let heyListen = document.getElementById("heyListen"); // "Hey, listen!" sound effect for the button.
let stOST = document.getElementById("stOST"); // "The Hero of Rhyme" soundtrack for the title screen.
let timerMoveCharacterX; // Moving time interval on X axis.
let timerMoveCharacterY; // Moving time interval on Y axis.
let timerCreateEnemy;


// Create obstacles

let obstaclesCentralTrees = new Obstacles(82, 365, 333, 135);

let obstaclesFirstTrunk = new Obstacles(275, 30, 60, 225);

let obstaclesSecondTrunk = new Obstacles(275, 30, 60, 440);

let obstaclesThirdTrunk = new Obstacles(275, 30, 392, 225);

let obstaclesFirstTreeRow = new Obstacles(420, 85, 0, 0);

let obstaclesSecondTreeRow = new Obstacles(420, 85, 580, 0);

let obstaclesFirstTreeColumn = new Obstacles(80, 1000, 0, 0);

let obstaclesSecondTreeColumn = new Obstacles(80, 1000, 920, 0);



// Enemies array

let enemyArray = [];

function createEnemy() {
    if (enemyArray.length <= 2) {
        
        //we add a conservative margin for the position + tree's on the side

    let marginSize = 1000 - 120;

    let randomLocationY = Math.floor(Math.random() * (marginSize - 110) + 110);

    let randomLocationX = Math.floor(Math.random() * (marginSize - 110) + 110)

    let enemy = new Enemy(randomLocationX, randomLocationY);

    enemy.insertEnemy();
    enemyArray.push(enemy); }
}


// Character

let widthInt = canvas.style.width.slice(0, 4);
let heightInt = canvas.style.width.slice(0, 4);
let character = new Character(475, 500); // Sets the character into the canvas.


// Starting the game

function startGame() { // Starts the game.
    character.insertCharacter(); // Inserts the character into the game.
    
    timerMoveCharacterX = setInterval(() =>
        character.characterMovementX(), 20);

    timerMoveCharacterY = setInterval(() =>
        character.characterMovementY(), 20);


    timerCreateEnemy = setInterval(() =>
        createEnemy(), 1000)

    obstaclesCentralTrees.insertObstacles();
    obstaclesFirstTrunk.insertObstacles();
    obstaclesSecondTrunk.insertObstacles();
    obstaclesThirdTrunk.insertObstacles();
    obstaclesFirstTreeRow.insertObstacles();
    obstaclesSecondTreeRow.insertObstacles();
    obstaclesFirstTreeColumn.insertObstacles();
    obstaclesSecondTreeColumn.insertObstacles();
/////////////////////////
console.log("Character position:", character.x, character.y);

console.log("SOYYYYYYYYYYYYYYYY EL CHARACTERRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
///////////////////////
}


// Title screen "Start" button

startScreen.addEventListener("click", () => {
    let bgST = setInterval(() => {
        stOST.play();
    }, 10);

})

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

let enemySize = 85;
        
/* let distanceBetweenEnCX = character.x - enemy.x;
let distanceBetweenEnCY = character.y - enemy.y;
 */
window.addEventListener("keydown", function (e) {
   let collision = updateCharacterPosition();

    switch (e.key) {
        case "a":
            console.log("LA DIRECCION ESSSSSSSSSS: " + character.directionX)
            console.log(character.directionX)
            if(!collision) {
                character.directionX = -1
                console.log("INCORRECTA ")
            } 
                break;
        case "d":
            console.log("LA DIRECCION ESSSSSSSSSS: " + character.directionX)
            if(!collision) {
                character.directionX = 1
                console.log("INCORRECTA ")
            } 
            break;
        case "w":
            console.log("LA DIRECCION ESSSSSSSSSS: " + character.directionX)
            if(!collision) {
                character.directionY = -1
                console.log("INCORRECTA ")
            } 
            break;
        case "s":
            console.log("LA DIRECCION ESSSSSSSSSS: " + character.directionX)
            if(!collision) {
                character.directionY = 1
                console.log("INCORRECTA ")
            } 
            break;
        case "g":
            character.attacking = true;
            break;
    }
})

window.addEventListener("keyup", function (e) {
    switch (e.key) {
        case "a":
        case "d":
            character.directionX = 0;
            break;
        case "w":
        case "s":
            character.directionY = 0;
            break;
        case "g":
            character.attacking = false;
            break;
    }
})



function updateCharacterPosition() {


    console.log("UPDATING POSITIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")


    let collisionDetected = false;

    //we change the character position to the previous one, so we can revert the advancement

    let characterPositionBeforeX = character.x;
    let characterPositionBeforeY = character.y;

   
    enemyArray.forEach(enemy => {
        let distanceX = character.x - enemy.x;
        let distanceY = character.y - enemy.y;

        console.log("Distance X:", distanceX, "Distance Y:", distanceY);

        if (Math.abs(distanceX) <= enemySize && Math.abs(distanceY) <= enemySize) {
            if (character.directionX > 0 && distanceX > 0) {

                console.log("colisionandoooooooo")

                character.directionX = 0;

                console.log(character.directionX)

                character.x = characterPositionBeforeX - 5;
                collisionDetected = true;
            }
                
                if (character.directionX < 0 && distanceX < 0) {
                
                    console.log("colisionandoooooooo")

                    character.directionX = 0;

                    console.log(character.directionX)

                character.x = characterPositionBeforeX + 5;
                collisionDetected = true;
            } if (character.directionY > 0 && distanceY > 0) {
                character.directionY = 0;
                console.log("colisionandoooooooo")

              
                
                console.log(character.directionY)
                character.y = characterPositionBeforeY + 5
                collisionDetected = true;
            }
                
               if (character.directionY < 0 && distanceY < 0) {
                character.directionY = 0;
                console.log("colisionandoooooooo")

              
                
                console.log(character.directionY)
                character.y = characterPositionBeforeY - 5
                collisionDetected = true;
            }
        }
    });

    /* let distanceX = character.x - obstacles.x;
    let distanceY = character.y - obstacles.y;

    if (Math.abs(distanceX) <= obstacleSize && Math.abs(distanceY) <= obstacleSize) {
        if ((character.directionX > 0 && distanceX > 0) || (character.directionX < 0 && distanceX < 0)) {
            character.directionX = 0;
            collisionDetected = true;
        }
        
        if ((character.directionY > 0 && distanceY > 0) || (character.directionY < 0 && distanceY < 0)) {
            character.directionY = 0;
            collisionDetected = true;
        }
    } */

    return collisionDetected;
}


