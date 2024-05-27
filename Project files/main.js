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
let healthBar = document.getElementById("healthbar");
healthBar.style.display = "none";

let enemyArray = [];
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

// Battle screen & Ganon

let battleScreen = document.getElementById("battlescreen"); // Makes the id="battleScreen" into a variable named canvas.
battleScreen.style.width = 1000 + "px"; // Setting dimensions
battleScreen.style.height = 1000 + "px";
 
let ganon
function accessBattle() {
    ganon = new Ganon(400, 200);
    character.final = true
    if (character.x > 333 && character.x < 500 && character.y < 30) {
        arrayObstacles = []
        clearInterval(timerCreateEnemy)
        for (let i = 0; i<= enemyArray.length; i++) {
            enemyArray[i].removeEnemy();
        }
        character.x = 730;
        character.y = 880;
        battleScreen.style.display = "block";
        canvas.style.display = "none"; 
        character.insertCharacterIntoBattleScreen();
        ganon.insertGanon();
        battleScreen.appendChild(healthBar);

    }

    }





// Enemies array

function createEnemy() {
    if (enemyArray.length <= 2) {
        
    let randomLocationY = Math.floor(Math.random() * ((1000 - 75 - 120) - 250 ) + 300);

    let randomLocationX = Math.floor(Math.random() * ((1000 - 75 - 120) - 400) + 400)

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

    /*setTimeout(() => {
        character.receiveDamage();
    }, 3000);*/

    
}


// Title screen "Start" button

startScreen.addEventListener("click", () => {
    let bgST = setInterval(() => {
        stOST.play();
    }, 10);

})

startButton.addEventListener("click", () => {


    heyListen.play(); // Plays the "Hey, Listen!" sound effect when the button is clicked.

    canvas.appendChild(healthBar);
    
    canvas.style.display = "block"; // Hides the canvas while the title screen is on.
    startScreen.style.display = "none"; // Shows the title screen.
    startButton.style.display = "none"; // Shows the "Start" button.
    healthBar.style.display = "inline-block";
    setTimeout(() => {

    }, 2000);

    
    startGame(); // Starts the game.
    
});


// Keybinding 

window.addEventListener("keydown", function (e) {
    let collisionDetected = false;
    for (let i = 0; i < enemyArray.length; i++) {
        let linkX = character.x;
        let linkXRight = character.x + character.width;
        let linkY = character.y;
        let linkYBottom = character.y + character.height;

        let enemyXRight = enemyArray[i].x + enemyArray[i].width;
        let enemyYBottom = enemyArray[i].y + enemyArray[i].height;

        // Reducir la salud del personaje principal solo una vez por enemigo

        // Verificar colisión
        if (enemyArray[i].x < linkXRight + 5 && enemyXRight > linkX - 5 &&
            enemyArray[i].y < linkYBottom + 5 && enemyYBottom > linkY - 5) {
                
                character.health -= enemyArray[i].strength;
                character.removeHearts()
                if(character.directionX === 1) {
                    character.sprite.style.backgroundImage = "url('../sprites/linkierightdmg.gif')";
                } else if (character.directionX === -1){

                    character.sprite.style.backgroundImage = "url('../sprites/linkieleftdmg.gif')";
                }
            if (character.health <= 0) {
                character.removeLink();
            }
            collisionDetected = true;
            break;
        }
    
}


     //ganon attacks
     let ganonCollision = false;
     if (ganon) {

         
        let ganonX = ganon.x;
        let ganonXRight = ganon.x + ganon.width;
        let ganonY = ganon.y;
        let ganonYBottom = ganon.y + ganon.height;

        let characterXRight = character.x + character.width;
        let characterYBottom = character.y + character.height;

        if (character.x < ganonXRight && characterXRight > ganonX &&
            character.y < ganonYBottom && characterYBottom > ganonY) {
                console.log("HAY COLISIÓN")
            if (characterXRight > ganonX && character.x <= ganonX) {
                character.x = ganonX - character.width;
                console.log("a")
            } else if (character.x < ganonXRight && characterXRight >= ganonXRight) {
                character.x = ganonXRight;
                console.log("b")
            }

            if (characterYBottom > ganonY && character.y <= ganonY) {
                character.y = ganonY - character.height;
                console.log("c")
            } else if (character.y < ganonYBottom && characterYBottom >= ganonYBottom) {
                character.y = ganonYBottom;
                console.log("d")
            }

           ganonCollision = true;
           character.speed = 0;
        }
    }

    
   

     
if (!collisionDetected || !ganonCollision) {
    switch (e.key) {
        case "a":
            accessBattle();
            character.directionX = -1;
            character.speed = 10;
            character.characterMovementX();
            character.sprite.style.backgroundImage = "url('../sprites/linkieleft.gif')";
          
            break;
        case "d":
            accessBattle();
            character.directionX = 1;
            character.speed = 10;
            character.characterMovementX();
            character.sprite.style.backgroundImage = "url('../sprites/linkieright.gif')";

            break;
        case "w":
            accessBattle();
            character.directionY = -1;
            character.speed = 10;
            character.characterMovementY();

            break;
        case "s":
            accessBattle();
            character.directionY = 1;
            character.speed = 10;
            character.characterMovementY();

            break;
        case "g":
            character.attacking = true;
            character.linkAttacksEnemies(enemyArray);
            character.linkAttacksGanon(ganon);

            break;
    }

}
     
});


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

