// Creating the main character

class Character { // Creates the character.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.sprite = document.createElement("div");
        this.directionX = null;
        this.directionY = null;
        this.speed = 10;
        this.health = 90;
        this.strenght = 30;
        this.attacking = false;
        this.jump = false;
        this.final = false
    }


    removeHearts() {
        let healthBar = document.getElementById("healthbar");

        if (this.health === 60 || this.health === 30) {
            healthBar.lastElementChild.remove();
        }
    }

    linkAttacksEnemies(enemies) {
    
        if (this.attacking) {
            for (let enemy of enemies) {
                let enemyX = enemy.x;
                let enemyXRight = enemy.x + enemy.width;
                let enemyY = enemy.y;
                let enemyYBottom = enemy.y + enemy.height;

                let characterXRight = this.x + this.width;
                let characterYBottom = this.y + this.height;

                if (this.x < enemyXRight + 20 && characterXRight > enemyX - 20 &&
                    this.y < enemyYBottom + 20 && characterYBottom > enemyY - 20) {
                        enemy.health -= this.strenght;
                        enemyOuch.play();
                        if(enemy.health <= 0) {
                            enemy.removeEnemy();
                        }
                    }
        }
    }
    this.attacking = false;
 }

        linkAttacksGanon(boss) {
            if(this.final){
                this.attacking = true;
    
                boss.health = boss.health - this.strenght;
                ganonOuch.play();
                if(boss.health <= 0) {
                    boss.removeGanon();
                    let youWon = document.getElementById("youWon");
                    youWon.play();
                    alert("YOU WIN!");
                    setTimeout(() => {
                        //hard reload
                        location.href = location.href.split('?')[0] + '?cacheBuster=' + new Date().getTime();
                    }, 1000);
                }
            }


        }

     removeLink() {
        let gameOver = document.getElementById("gameOver");
        gameOver.play();
        alert("GAME OVER");
        setTimeout(() => {
            //hard reload
            location.href = location.href.split('?')[0] + '?cacheBuster=' + new Date().getTime();
        }, 1000);
    }


    insertCharacter() { // Inserts the character into the canvas.
        this.sprite.setAttribute("id", "character");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);
   
    }


    insertCharacterIntoBattleScreen() {
        this.sprite.setAttribute("id", "character");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        battleScreen.appendChild(this.sprite);
    }



    characterMovementX() { // Moves the character in its X axis (left and right).
        let previousX = this.x;
        let moveX = this.x + this.speed * this.directionX;

        if (moveX <= 1000 - this.width && moveX >= 0) {
            this.x = moveX;
        }

        if (this.checkCollisionsWithEnemies(enemyArray) || this.checkCollisionsWithObstacles(arrayObstacles) || this.collisionWithGanon() || this.collisionWithGanon() || this.checkCollisionsWithObstaclesBattleScreen(arrayObstaclesBattleScreen)) {
            this.x = previousX;
        }

        this.sprite.style.left = this.x + "px";
    }

    characterMovementY() { // Moves the character in its Y axis (up and down).
        let previousY = this.y;
        let moveY = this.y + this.speed * this.directionY;

        if (moveY <= 1000 - this.height && moveY >= 0) {
            this.y = moveY;
        }
        

        if (this.checkCollisionsWithEnemies(enemyArray)  || this.checkCollisionsWithObstacles(arrayObstacles) || this.collisionWithGanon() || this.checkCollisionsWithObstaclesBattleScreen(arrayObstaclesBattleScreen)) {
            this.y = previousY;
        }

        this.sprite.style.top = this.y + "px";
    }

    //we check collisions in the character perspective and in the enemy's

 checkCollisionsWithEnemies(enemies) {
    for (let enemy of enemies) {
        let enemyX = enemy.x;
        let enemyXRight = enemy.x + enemy.width;
        let enemyY = enemy.y;
        let enemyYBottom = enemy.y + enemy.height;

        let characterXRight = this.x + this.width;
        let characterYBottom = this.y + this.height;

        if (this.x < enemyXRight && characterXRight > enemyX &&
            this.y < enemyYBottom && characterYBottom > enemyY) {

            if (characterXRight > enemyX && this.x <= enemyX) {
                this.x = enemyX - this.width;
            } else if (this.x < enemyXRight && characterXRight >= enemyXRight) {
                this.x = enemyXRight;
            }

            if (characterYBottom > enemyY && this.y <= enemyY) {
                this.y = enemyY - this.height;
            } else if (this.y < enemyYBottom && characterYBottom >= enemyYBottom) {
                this.y = enemyYBottom;
            }

            this.speed = 0;//to prevent overlapping from keydown action
            return true;
        }
    }

    this.speed = 8;
    return false;
}

//checks collisions with obstacles too
checkCollisionsWithObstacles(obstacles) {
    let jumping = false;
    
    for (let obstacle of obstacles) {
        let obstacleX = obstacle.x;
        let obstacleXRight = obstacle.x + obstacle.width;
        let obstacleY = obstacle.y;
        let obstacleYBottom = obstacle.y + obstacle.height;

        let characterXRight = this.x + this.width;
        let characterYBottom = this.y + this.height;

        if (this.x < obstacleXRight && characterXRight > obstacleX &&
            this.y < obstacleYBottom && characterYBottom > obstacleY && 
            !(this.x >= 200 && this.x <= 500 && this.y <= 80 && this.y >= 20)) {

            if (this.directionY == 1 && (
                (this.x >= 90 && this.x <= 270 && this.y <= 600 && this.y >= 20) ||
                (this.x >= 190 && this.x <= 950 && this.y <= 800 && this.y >= 100))) {

                jumping = true;
                continue; //goes to the next obstacle directly
            }

            if (characterXRight > obstacleX && this.x <= obstacleX) {
                this.x = obstacleX - this.width;
            } else if (this.x < obstacleXRight && characterXRight >= obstacleXRight) {
                this.x = obstacleXRight;
            }

            if (characterYBottom > obstacleY && this.y <= obstacleY) {
                this.y = obstacleY - this.height;
            } else if (this.y < obstacleYBottom && characterYBottom >= obstacleYBottom) {
                this.y = obstacleYBottom;
            }

            this.speed = 0;//to prevent overlapping from keydown action
            return true;
        }
    }
    if (jumping) {
        this.jump = true;
        this.jumpFence();
    }
    else {
        this.jump = false;
        this.jumpFence();
    }

    this.jump = false;
    jumping = false;
    this.speed = 8;
    return false;
}

jumpFence() {
    if (this.jump) {
        this.sprite.setAttribute("class","jumping");
        this.speed = 0.5;
        console.log(this.sprite)
    } else {
        this.sprite.removeAttribute("class", "jumping");
    }
    
}

checkCollisionsWithObstaclesBattleScreen(obstacles) {
    
    for (let obstacle of obstacles) {
        let obstacleX = obstacle.x;
        let obstacleXRight = obstacle.x + obstacle.width;
        let obstacleY = obstacle.y;
        let obstacleYBottom = obstacle.y + obstacle.height;

        let characterXRight = this.x + this.width;
        let characterYBottom = this.y + this.height;

        if (this.x < obstacleXRight && characterXRight > obstacleX &&
            this.y < obstacleYBottom && characterYBottom > obstacleY) {


            if (characterXRight > obstacleX && this.x <= obstacleX) {
                this.x = obstacleX - this.width;
            } else if (this.x < obstacleXRight && characterXRight >= obstacleXRight) {
                this.x = obstacleXRight;
            }

            if (characterYBottom > obstacleY && this.y <= obstacleY) {
                this.y = obstacleY - this.height;
            } else if (this.y < obstacleYBottom && characterYBottom >= obstacleYBottom) {
                this.y = obstacleYBottom;
            }

            this.speed = 0;//to prevent overlapping from keydown action
            return true;
        }
    } 
}

//ganon collision

collisionWithGanon() {

    //ganon attacks
    
    if (ganon) {
    
        
       let ganonX = ganon.x;
       let ganonXRight = ganon.x + ganon.width;
       let ganonY = ganon.y;
       let ganonYBottom = ganon.y + ganon.height;
    
       let characterXRight = this.x + this.width;
       let characterYBottom = this.y + this.height;
    
       if (this.x < ganonXRight  && characterXRight  > ganonX &&
           this.y  < ganonYBottom && characterYBottom  > ganonY) {
            linkOuch.volume = 1;
            linkOuch.play();
            if (character.attacking = true) { ganonOuch.volume = 1; ganonOuch.play() };
            this.health -= ganon.strenght;
            this.removeHearts()
            if(this.health <= 0) {
                this.removeLink()
            }

           if (characterXRight > ganonX && this.x <= ganonX) {
               this.x = ganonX - this.width;
               
           } else if (this.x < ganonXRight && characterXRight >= ganonXRight) {
               this.x = ganonXRight;
           }
    
           if (characterYBottom > ganonY && this.y <= ganonY) {
               this.y = ganonY - this.height;
           } else if (this.y < ganonYBottom && characterYBottom >= ganonYBottom) {
               this.y = ganonYBottom;
           }
    
          this.speed = 0;
          return true;
       }
    }
}

}
