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
obstaclesCentralTrees.sprite.style.backgroundColor = "#FF0000";
let obstaclesFirstTrunk = new Obstacles(275, 30, 60, 225);
obstaclesFirstTrunk.sprite.style.backgroundColor = "#FF0000";
let obstaclesSecondTrunk = new Obstacles(275, 30, 60, 440);
obstaclesSecondTrunk.sprite.style.backgroundColor = "#FF0000";
let obstaclesThirdTrunk = new Obstacles(275, 30, 392, 225);
obstaclesThirdTrunk.sprite.style.backgroundColor = "#FF0000";


let obstaclesFirstTreeRow = new Obstacles(420, 85, 0, 0);
obstaclesFirstTreeRow.sprite.style.backgroundColor = "#FF0000";

let obstaclesSecondTreeRow = new Obstacles(420, 85, 580, 0);
obstaclesSecondTreeRow.sprite.style.backgroundColor = "#FF0000";

let obstaclesFirstTreeColumn = new Obstacles(80, 1000, 0, 0);
obstaclesFirstTreeColumn.sprite.style.backgroundColor = "#FF0000";

let obstaclesSecondTreeColumn = new Obstacles(80, 1000, 920, 0);
obstaclesSecondTreeColumn.sprite.style.backgroundColor = "#FF0000";







// Enemies array

let enemyArray = [];

function createEnemy() {
    if (enemyArray.length <= 2) {
        
    let randomLocationY = Math.floor(Math.random() * (heightInt - 800 + 1) + 800 - 40);

    let randomLocationX = Math.floor(Math.random() * (widthInt) - 40)

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

let enemySize = 40;
        
/* let distanceBetweenEnCX = character.x - enemy.x;
let distanceBetweenEnCY = character.y - enemy.y;
 */
window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "a":
           character.directionX = -1;
            updateCharacterPosition(); 
            break;
        case "d":
            character.directionX = 1;
            updateCharacterPosition();
            break;
        case "w":
            character.directionY = -1;
            updateCharacterPosition();
            break;
        case "s":
            character.directionY = 1;
            updateCharacterPosition();
            break;
        case " ":
            character.attacking = true;
            character.sprite.style.backgroundImage = "url('../sprites/Link-attacking.gif')"
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
        case " ":
            character.attacking = false;
            character.sprite.style.backgroundImage = "url('../sprites/Link-standing.gif')"
            break;
    }
})



function updateCharacterPosition() {

    let enemySize = 40;
    let obstacleSize = 220
    
    let distanceBetweenEnCX = character.x - enemyArray[0].x;
    let distanceBetweenEnCY = character.y - enemyArray[0].y;

    let distanceBetweenEnCX1 = character.x - enemyArray[1].x;
    let distanceBetweenEnCY1 = character.y - enemyArray[1].y;

    let distanceBetweenEnCX2 = character.x - enemyArray[2].x;
    let distanceBetweenEnCY2 = character.y - enemyArray[2].y;
 
    let distanceBetweenObstaclesX = character.x - obstacles.x;
    let distanceBetweenObstaclesY = character.y - obstacles.y;
 

    console.log(enemyArray[0].x)
    
    if (Math.abs(distanceBetweenEnCX) <= enemySize && Math.abs(distanceBetweenEnCY) <= enemySize) {
        if (distanceBetweenEnCX <= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCX >= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCY <= 0) {
            character.directionY = 0;
        }

        if (distanceBetweenEnCY >= 0) {
            character.directionY = 0;
        }
        
    }

    if (Math.abs(distanceBetweenEnCX1) <= enemySize && Math.abs(distanceBetweenEnCY1) <= enemySize) {
        if (distanceBetweenEnCX1 <= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCX1 >= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCY1 <= 0) {
            character.directionY = 0;
        }

        if (distanceBetweenEnCY1 >= 0) {
            character.directionY = 0;
        }
        
    }

    if (Math.abs(distanceBetweenEnCX2) <= enemySize && Math.abs(distanceBetweenEnCY2) <= obstacleSize) {
        if (distanceBetweenEnCX2 <= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCX2 >= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenEnCY2 <= 0) {
            character.directionY = 0;
        }

        if (distanceBetweenEnCY2 >= 0) {
            character.directionY = 0;
        }
        
    }

    if (Math.abs(distanceBetweenObstaclesX) <= enemySize && Math.abs(distanceBetweenObstaclesY) <= obstacleSize) {
        if (distanceBetweenObstaclesX <= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenObstaclesX >= 0) {
            character.directionX = 0;
        }

        if (distanceBetweenObstaclesY <= 0) {
            character.directionY = 0;
        }

        if (distanceBetweenObstaclesY >= 0) {
            character.directionY = 0;
        }
    }
}

/* console.log
let distanceBetweenEnCX = character.x - e.x;
let distanceBetweenEnCY = character.y - e.y;
if (Math.abs(distanceBetweenEnCX) <= enemySize && Math.abs(distanceBetweenEnCY) <= enemySize) {
    if (distanceBetweenEnCX <= 0) {
        character.directionX = 0;
    }

    if (distanceBetweenEnCX >= 0) {
        character.directionX = 0;
    }

    if (distanceBetweenEnCY <= 0) {
        character.directionY = 0;
    }

    if (distanceBetweenEnCY >= 0) {
        character.directionY = 0;
    }
    
}
}); */