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

let arrayObstacles = [];

let obstaclesCentralTrees = new Obstacles(82, 365, 333, 135);
arrayObstacles.push(obstaclesCentralTrees);

let obstaclesFirstTrunk = new Obstacles(275, 30, 60, 225);
arrayObstacles.push(obstaclesFirstTrunk);

let obstaclesSecondTrunk = new Obstacles(275, 30, 60, 440);
arrayObstacles.push(obstaclesSecondTrunk)

let obstaclesThirdTrunk = new Obstacles(275, 30, 392, 225);
arrayObstacles.push(obstaclesThirdTrunk)

let obstaclesFirstTreeRow = new Obstacles(420, 85, 0, 0);
arrayObstacles.push(obstaclesFirstTreeRow)

let obstaclesSecondTreeRow = new Obstacles(420, 85, 580, 0);
arrayObstacles.push(obstaclesSecondTreeRow)

let obstaclesFirstTreeColumn = new Obstacles(80, 1000, 0, 0);
arrayObstacles.push(obstaclesFirstTreeColumn);

let obstaclesSecondTreeColumn = new Obstacles(80, 1000, 920, 0);
arrayObstacles.push(obstaclesSecondTreeColumn);

// battle screen

let battleScreen = document.getElementById("battlescreen"); // Makes the id="battleScreen" into a variable named canvas.
battleScreen.style.width = 1000 + "px"; // Setting dimensions
battleScreen.style.height = 1000 + "px";
 

/* function accessBattle() {
    if (character.x > 550 && character.x < 650 && character.y < 10) {
       
        battleScreen.style.display = "block";
        canvas.style.display = "none";
      
    
}
    }
 */


// Enemies array
let enemyArray = [];

function createEnemy() {
    if (enemyArray.length <= 2) {
        
    let randomLocationY = Math.floor(Math.random() * ((1000 - 75 - 120) - 130 ) + 130);

    let randomLocationX = Math.floor(Math.random() * ((1000 - 75 - 120) - 130) + 130)

    let enemy = new Enemy(randomLocationX, randomLocationY);

    enemy.insertEnemy();
    enemyArray.push(enemy); }
}


// Character

let healthHeart1 = document.createElement("div");
healthHeart1.setAttribute("id", "heart1");

let healthHeart2 = document.createElement("div");
healthHeart2.setAttribute("id", "heart2");

let healthHeart3 = document.createElement("div");
healthHeart3.setAttribute("id", "heart3");


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



//restriction to just one key preshed at a time
let preshedKey = {};
let firstKey = null;
let counter = 0;
// Keybinding 
window.addEventListener("keydown", function (e) {
   
    if (firstKey && firstKey !== e.key) {
        return
    }

    if(!firstKey) {
        firstKey = e.key
    }

    preshedKey[e.key] = true;

    if (e.key === firstKey) {
        counter++;
    }

    for(let key in preshedKey) {
        if (preshedKey[key]) {
            counter++;
        }
    }
    console.log(counter)
    //event method to not press 2 keys at a time
    if (counter > 1) {
        for (let key in preshedKey) {
            if (key !== firstKey && preshedKey[key]) {
                delete preshedKey[key];
            }
        }
    }

    console.log(preshedKey)

    let collisionDetected = false;
    for (let i = 0; i < enemyArray.length; i++) {
        if (character.checkCollisionsWithEnemies(enemyArray)) {
            collisionDetected = true;
            break;
        }
    }

    if (!collisionDetected) {
        switch (e.key) {
            case "a":
                character.directionX = -1;
                character.speed = 10;
                character.characterMovementX();
                character.sprite.style.backgroundImage = "url('../sprites/linkieleft.gif')"
                break;
            case "d":
                character.directionX = 1;
                character.speed = 10;
                character.characterMovementX();
                character.sprite.style.backgroundImage = "url('../sprites/linkieright.gif')"
                break;
            case "w":
                character.directionY = -1;
                character.speed = 10;
                character.characterMovementY();
                break;
            case "s":
                character.directionY = 1;
                character.speed = 10;
                character.characterMovementY();
                break;
            case "g":
                character.attacking = true;
                break;
        }
    }
});


window.addEventListener("keyup", function (e) {

  //we empty the preshedKey object
  if (e.key === firstKey) {
    firstKey = null;
}

    delete preshedKey[e.key];
    counter = 0;
    console.log(preshedKey);
    console.log(counter);
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

