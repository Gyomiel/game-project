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
        
        //conservative margin + tree`s width
        let margin = 170;
        if (this.directionRandom === 1 && this.x < 850) {
            let enemyMoveX = this.x + this.speed * 1;
            if (enemyMoveX <= 1000 - margin && enemyMoveX >= 0) {
                this.x = enemyMoveX;
                this.checkCollisions();
                this.sprite.style.left = this.x + "px";
            }}

            if (this.directionRandom === 2 && this.x > 120) {
                let enemyMoveX = this.x + this.speed * -1;
                if (enemyMoveX <= 1000 - margin && enemyMoveX >= 0) {
                    this.x = enemyMoveX;
                    this.checkCollisions();
                    this.sprite.style.left = this.x + "px";
                }}
                if (this.directionRandom === 3 && this.y < 900) {
                    let enemyMoveY = this.y + this.speed * +1;
                    if (enemyMoveY <= 1000 - margin && enemyMoveY >= 0) {
                        this.y = enemyMoveY;
                        this.checkCollisions();
                        this.sprite.style.top = this.y + "px";
                    }
                }
                if (this.directionRandom === 4 && this.y > 120) {
                    let enemyMoveY = this.y + this.speed * -1;
                    if (enemyMoveY <= 1000 - margin && enemyMoveY >= 0) {
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


                if (eVertexTRX >= charVertexTLX && eVertexTRX <= charVertexTRX && eVertexTRY >= charVertexTLX && eVertexTRY <= charVertexBLX || eVertexTLX >= charVertexTLX && eVertexTLX <= charVertexTRX && eVertexTLY >= charVertexTRX && eVertexTLY <= charVertexBRY ||  eVertexBRX >= charVertexTLX && eVertexBRX <= charVertexTRX && eVertexBRY >= charVertexTLX && eVertexBRY <= charVertexBLX || eVertexBLX >= charVertexTLX && eVertexBLX <= charVertexTRX && eVertexBLY >= charVertexTRX && eVertexBLY <= charVertexBRY ) {
                    this.updateEnemyPosition();
                    this.removeEnemy();
            
                }
            }

            updateEnemyPosition() {
                let currentPositionX = this.x;
                let currentPositionY = this.y;
                let canvasSize = 1000;
                let characterSize = 90;
                
                let distanceBetweenEnCX = this.x - character.x;
                let distanceBetweenEnCY = this.y - character.y;

                if (Math.abs(distanceBetweenEnCX) < characterSize && Math.abs(distanceBetweenEnCY) < characterSize) {
                    if (distanceBetweenEnCX <= 0) {
                        if (currentPositionX > 0) {
                            currentPositionX -= 75 - Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionX = 0;
                        }
                    }

                    if (distanceBetweenEnCX >= 0) {
                        if (currentPositionX < canvasSize - characterSize) {
                            currentPositionX += 70 -Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionX = canvasSize - characterSize;
                        }
                    }

                    if (distanceBetweenEnCY <= 0) {
                        if (currentPositionY > 0) {
                            currentPositionY -= 75 - Math.abs(distanceBetweenEnCY);
                        } else {
                            currentPositionY = 0;
                        }
                    }

                    if (distanceBetweenEnCY >= 0) {
                        if (currentPositionY < canvasSize - characterSize) {
                            currentPositionY += 75 - Math.abs(distanceBetweenEnCX);
                        } else {
                            currentPositionY = canvasSize - characterSize;
                        }
                    }
                    
                }

                this.sprite.style.top = currentPositionY + "px";
                this.sprite.style.left = currentPositionX + "px";
            }

        }




