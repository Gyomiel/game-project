// Creating the world enemies

class Enemy { // Creates the enemy.
    constructor(randomLocationX, randomLocationY) { // Random location.
        this.x = randomLocationX;
        this.y = randomLocationY;
        this.width = 40;
        this.height = 40;
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
                let eVertexTLX = this.x;
                let eVertexTLY = this.y;
                let eVertexTRX = this.x + this.width;
                let eVertexTRY = this.y;

                let eVertexBLX = this.x;
                let eVertexBLY = this.y + this.height;
                let eVertexBRX = this.x + this.width;
                let eVertexBRY = this.y + this.height;


                let charVertexTLX = character.x;
                let charVertexTLY = character.y;
                let charVertexTRX = character.x + character.width;
                let charVertexTRY = character.y;

                let charVertexBLX = character.x;
                let charVertexBLY = character.y + character.height;
                let charVertexBRX = character.x + character.width;
                let charVertexBRY = character.y + character.height;


                if (eVertexBLX >= charVertexTLX && eVertexBLX <= charVertexTRX && eVertexTRY >= charVertexTLY && eVertexTRY <= charVertexBLY || eVertexTRX >= charVertexTLX && eVertexTRX <= charVertexTRX && eVertexBLY >= charVertexTRY && eVertexBRY <= charVertexBRY) {
                    this.updateEnemyPosition();
                    this.removeEnemy();
        
                }
            }

            updateEnemyPosition() {
                let currentPositionX = this.x;
                let currentPositionY = this.y;
                let canvasSize = 1000;
                let characterSize = 40;
                
                let distanceBetweenEnCX = this.x - character.x;
                let distanceBetweenEnCY = this.y - character.y;

                if (distanceBetweenEnCX < characterSize && distanceBetweenEnCY < characterSize) {
                    if (distanceBetweenEnCX <= 0) {
                        if (currentPositionX > 0) {
                            currentPositionX -= 40 - Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionX = 0;
                        }
                    }

                    if (distanceBetweenEnCX >= 0) {
                        if (currentPositionX < canvasSize - characterSize) {
                            currentPositionX += 40 - distanceBetweenEnCX;
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
                            currentPositionY += 40 - distanceBetweenEnCY;
                        } else {
                            currentPositionY = canvasSize - characterSize;
                        }
                    }
                    
                }

                this.sprite.style.top = currentPositionY + "px";
                this.sprite.style.left = currentPositionX + "px";
            }

        }




