 // Necessary variables
let canvas = document.getElementById("screen"); // Makes the id="screen" into a variable named canvas.
canvas.style.width = 1000 + "px";
canvas.style.height = 1000 + "px";
let startButton = document.getElementsByClassName("startbtn")[0]; // Button that starts the game from the title screen.
let startScreen = document.getElementById("startScreen"); // Makes the id="startScreen" into a variable named startScreen.
let creditsButton = document.getElementsByClassName("creditsbtn")[0];
let creditsScreen = document.getElementById("creditsScreen");
let backtostartfromcredits = document.getElementsByClassName("backtostartfromcredits")[0];
let heyListen = document.getElementById("heyListen"); // "Hey, listen!" sound effect for the button.
let bgOST = document.getElementById("bgOST"); 
let stOST = document.getElementById("stOST"); // "Let's fighting love" soundtrack for the title screen.
let ganonOST = document.getElementById("ganonOST") // "Dale, Zelda, dale" soundtrack for the battle with Ganon.
let linkOuch = document.getElementById("linkDamage");
let enemyOuch = document.getElementById("enemyDamage");
let ganonOuch = document.getElementById("ganonDamage");
let timerMoveCharacterX; // Moving time interval on X axis.
let timerMoveCharacterY; // Moving time interval on Y axis.
let timerCreateEnemy;
let healthBar = document.getElementById("healthbar");
healthBar.style.display = "none";
let heart = document.getElementsByClassName("heart")[0];
let sword = document.getElementById("sword")

let enemyArray = [];

// Creating obstacles

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
 
let ganon;
let arrayObstaclesBattleScreen = [];;

function accessBattle() {
    
    character.final = true
    if (character.x > 333 && character.x < 500 && character.y < 30) {
        ganon = new Ganon(400, 200);
        arrayObstacles = []
        clearInterval(timerCreateEnemy)
        enemyArray = []
        character.x = 730;
        character.y = 880;
        battleScreen.style.display = "block";
        canvas.style.display = "none"; 
        character.insertCharacterIntoBattleScreen();
        bgOST.pause();
        ganonOST.volume = 0.5;
        ganonOST.play();
        ganon.insertGanon();
        battleScreen.appendChild(healthBar);
        

        //obstacles battlescreen


        let topWall = new Obstacles(1000, 100, 0, 0);
        arrayObstaclesBattleScreen.push(topWall)
        topWall.insertObstaclesGanon()

        let leftWall1 = new Obstacles(150, 500, 0, 0);
        arrayObstaclesBattleScreen.push(leftWall1)
        leftWall1.insertObstaclesGanon()

        let leftWall2 = new Obstacles(60, 300, 0, 505);
        arrayObstaclesBattleScreen.push(leftWall2)
        leftWall2.insertObstaclesGanon()

        let bottomWall = new Obstacles(650, 300, 0, 700);
        arrayObstaclesBattleScreen.push(bottomWall);
        bottomWall.insertObstaclesGanon()

        let rightWall = new Obstacles(200, 1000, 850, 100);
        arrayObstaclesBattleScreen.push(rightWall);
        rightWall.insertObstaclesGanon()
 

    }
    }

// Enemies array
let counterEnemies = 0;

function createEnemy() {
    if (enemyArray.length <= 2 && counterEnemies <= 3) {
        
    let randomLocationY = Math.floor(Math.random() * ((1000 - 75 - 120) - 250 ) + 300);

    let randomLocationX = Math.floor(Math.random() * ((1000 - 75 - 120) - 400) + 400)

    let enemy = new Enemy(randomLocationX, randomLocationY);
    counterEnemies++;

    enemy.insertEnemy();
    enemyArray.push(enemy); }};

// Character

let widthInt = canvas.style.width.slice(0, 4);
let heightInt = canvas.style.width.slice(0, 4);
let character = new Character(475, 500); // Sets the character into the canvas.
character.sprite.appendChild(sword)


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
 
};

/// Credits button
creditsButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    creditsScreen.style.display = "block";
    startButton.style.display = "none";
    creditsButton.style.display = "none";

    creditsScreen.style.position = "relative";

    backtostartfromcredits.style.display = "inline-block";
});

//back to start

backtostartfromcredits.addEventListener("click", () => {
    startScreen.style.display = "block";
    creditsScreen.style.display = "none";
    startButton.style.display = "inline-block";
    creditsButton.style.display = "inline-block";
    backtostartfromcredits.style.display = "none";
});

// Title screen "Start" button


startButton.addEventListener("click", () => {
    heyListen.play(); // Plays the "Hey, Listen!" sound effect when the button is clicked.
    stOST.pause();
    setTimeout(() => {
        bgOST.volume = 0.7;
        bgOST.play();
    }, 1500);

    canvas.appendChild(healthBar);
    
    canvas.style.display = "block"; // Hides the canvas while the title screen is on.
    startScreen.style.display = "none"; // Shows the title screen.
    startButton.style.display = "none"; // Shows the "Start" button.
    healthBar.style.display = "inline-block";


    
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

      
        if (enemyArray[i].x < linkXRight + 2 && enemyXRight > linkX - 2 &&
            enemyArray[i].y < linkYBottom + 2 && enemyYBottom > linkY - 2) {

                if(character.directionX === 1 || (character.directionX === 1 && character.directionY 
                    === 1)|| (character.directionX === 1 && character.directionY 
                    === -1) || character.directionX === 0 || character.directionY === 0) {
                    character.sprite.style.backgroundImage = "url('./sprites/Linkierightdmg.gif')";
                } else if (character.directionX === -1|| (character.directionX === -1 && character.directionY 
                    === -1) || (character.directionX === -1 && character.directionY 
                        === 1 || character.directionX === 0 || character.directionY === 0)){

                    character.sprite.style.backgroundImage = "url('./sprites/Linkieleftdmg.gif')";
                } 
                enemyArray[i].sprite.classList.add('hit');
                linkOuch.volume = 1;
                linkOuch.play();
                character.health -= enemyArray[i].strength;
                character.removeHearts()
            
                if (character.health <= 0) {
                    gameOver.play();
                    alert("GAME OVER");
                    setTimeout(() => {
                        location.href = location.href.split('?')[0] + '?cacheBuster=' + new Date().getTime();
                    }, 1000);
                }
            
           
             if (character.checkCollisionsWithEnemies(enemyArray)) {
            collisionDetected = true;
            break;
        }
        }
    
}

character.collisionWithGanon();
if (!collisionDetected || !ganonCollision) {
    switch (e.key) {
        case "a":
            accessBattle();
            character.directionX = -1;
            character.speed = 10;
            character.characterMovementX();
            
            character.sprite.style.backgroundImage = "url('../sprites/Linkieleft.gif')";
          
            break;
        case "d":
            accessBattle();
            character.directionX = 1;
            character.speed = 10;
            character.characterMovementX();
            character.sprite.style.backgroundImage = "url('../sprites/Linkieright.gif')";
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
            if (ganon) {
                character.linkAttacksGanon(ganon)}; 
                sword.style.display = "inline-block"
                
            break;
    }


}
     
});


window.addEventListener("keyup", function (e) {
     sword.style.display = "none"
    for (let i = 0; i < enemyArray.length; i++) {
        let linkX = character.x;
        let linkXRight = character.x + character.width;
        let linkY = character.y;
        let linkYBottom = character.y + character.height;

        let enemyXRight = enemyArray[i].x + enemyArray[i].width;
        let enemyYBottom = enemyArray[i].y + enemyArray[i].height;

        if (enemyArray[i].x < linkXRight + 2 && enemyXRight > linkX - 2 &&
            enemyArray[i].y < linkYBottom + 2 && enemyYBottom > linkY - 2) {
                
            if (character.directionX === 1 || (character.directionX === 1 && character.directionY === 1) ||
                (character.directionX === 1 && character.directionY === -1) || character.directionX === 0 ||
                character.directionY === 0) {
                character.sprite.style.backgroundImage = "url('../sprites/Linkierightdmg.gif')";
            } else if (character.directionX === -1 || (character.directionX === -1 && character.directionY === -1) ||
                (character.directionX === -1 && character.directionY === 1) || character.directionX === 0 ||
                character.directionY === 0) {
                character.sprite.style.backgroundImage = "url('../sprites/Linkieleftdmg.gif')";
            }
        }
    }
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

