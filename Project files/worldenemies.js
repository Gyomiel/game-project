// Creating the world enemies

class Enemy { // Creates the enemy.
    constructor(randomLocationX, randomLocationY) { // Random location.
        this.x = randomLocationX;
        this.y = randomLocationY;
        this.width = 75;
        this.height = 75;
        this.sprite = document.createElement("div");
        this.speed = 1;
        this.timerMove = setInterval(() => this.enemyMovement(), 10)
        this.directionRandom = 0
        this.timerDirection = setInterval(() => this.randomNumber(), 1000)

    }

    insertEnemy() { // Inserts the enemy into the canvas.
        console.log(this.y, this.x)
        this.sprite.setAttribute("id", "enemy");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);

    }

    randomNumber() { // Generates a random direction for the enemies.
        this.directionRandom = Math.floor(Math.random() * 4) + 1;
    }

    enemyMovement() { // Moves the character in its X axis (left and right).
        

        if (this.directionRandom === 1) {
            let enemyMoveX = this.x + this.speed * 1;
            if (enemyMoveX <= 1000 - this.width && enemyMoveX >= 0) {
                this.x = enemyMoveX;
                this.checkCollisions();
                this.sprite.style.left = this.x + "px";
            }}

            if (this.directionRandom === 2) {
                let enemyMoveX = this.x + this.speed * -1;
                if (enemyMoveX <= 1000 - this.width && enemyMoveX >= 0) {
                    this.x = enemyMoveX;
                    this.checkCollisions();
                    this.sprite.style.left = this.x + "px";
                }}
                if (this.directionRandom === 3) {
                    let enemyMoveY = this.y + this.speed * +1;
                    if (enemyMoveY <= 1000 - this.height && enemyMoveY >= 0) {
                        this.y = enemyMoveY;
                        this.checkCollisions();
                        this.sprite.style.top = this.y + "px";
                    }
                }
                if (this.directionRandom === 4) {
                    let enemyMoveY = this.y + this.speed * -1;
                    if (enemyMoveY <= 1000 - this.height && enemyMoveY >= 0) {
                        this.y = enemyMoveY;
                        this.checkCollisions();
                        this.sprite.style.top = this.y + "px";
                    }
                }

            }

            removeEnemy() {
                if (character.attacking === true) {
                canvas.removeChild(this.sprite);
                clearInterval(timerMoveEnemyX);
                clearInterval(timerMoveEnemyY);
                }
                

            }

                   checkCollisions() {

                let enemyX = this.x
                let characterX = character.x

                let enemyY = this.y
                let characterY = character.y
                
                let enemyXRight = this.x + this.width
                let characterXRight = character.x + character.width

                let enemyYBottom = this.y + this.height
                let characterYBottom = character.y + character.height
                if (enemyX < characterXRight + +10 && enemyXRight > characterX + 10 &&
                    enemyY < characterYBottom + 10 && enemyYBottom > characterY + 10 ) {
                        character.directionX = 0;
                    character.directionY = 0;
                    this.speed = 0;
                        this.updateEnemyPosition(); 
                        return true;
                    } else {
                        return false;
                    }
                
            }

            //charVertexBLX >= eVertexBRX && charVertexBLX <= eVertexBRX && eVertexTRY >= charVertexTLY && eVertexTRY <= charVertexBLY
            updateEnemyPosition() {
                let currentPositionX = this.x;
                let currentPositionY = this.y;
                let canvasSize = 1000;
                let characterSize = 40;
                character.directionY = 0;(distanceBetweenEnCX);
                        } else {
                            currentPositionX = 0;
                        }
                    }

                    if (distanceBetweenEnCX >= 0) {
                        if (currentPositionX < canvasSize - characterSize) {
                            currentPositionX += 40 -Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionX = canvasSize - characterSize;
                        }
                    }

                    if (distanceBetweenEnCY <= 0) {
                        if (currentPositionY > 0) {
                            currentPositionY -= 40 - Math.abs(distanceBetweenEnCY);
                        } else {
                            currentPositionY = 0;
                        }
                    }

                    if (distanceBetweenEnCY >= 0) {
                        if (currentPositionY < canvasSize - characterSize) {
                            currentPositionY += 40 - Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionY = canvasSize - characterSize;
                        }
                    }
                    
                }

                this.sprite.style.top = currentPositionY + "px";
                this.sprite.style.left = currentPositionX + "px";
            }

        }




