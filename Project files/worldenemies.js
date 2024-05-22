// Creating the world enemies

class Enemy { // Creates the enemy.
    constructor(randomLocationX, randomLocationY) { // Random location.
        this.x = randomLocationX;
        this.y = randomLocationY;
        this.width = 40;
        this.height = 40;
        this.sprite = document.createElement("div");
        this.directionX = null;
        this.directionY = null;
        this.speed = 35;
        
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
    
    enemyMovementX() { // Moves the character in its X axis (left and right).
        let enemyDirectionArrayX = [0, 1, -1];
        let enemyRandomDirectionX = enemyDirectionArrayX[Math.floor(Math.random() * 3)];
        let enemyMoveX = this.x + this.speed * enemyRandomDirectionX;
        
        if (enemyMoveX <= 1000 - this.width && enemyMoveX >= 0) {
            this.x = enemyMoveX;
            this.sprite.style.left = this.x + "px";
        }
    }

    enemyMovementY() { // Moves the character in its Y axis (up and down).
        let enemyDirectionArrayY = [0, 1, -1];
        let enemyRandomDirectionY = enemyDirectionArrayY[Math.floor(Math.random() * 3)];        
        let enemyMoveY = this.y + this.speed * enemyRandomDirectionY;
      
        if (enemyMoveY <= 1000 - this.height && enemyMoveY >= 0) {
            this.y = enemyMoveY;
            this.sprite.style.top = this.y + "px";
        }
    }

    removeEnemy() {
        canvas.removeChild(this.sprite);
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


        if (eVertexBLX >= charVertexTLX && eVertexBLX <= charVertexTRX || eVertexBRX >= charVertexTLX && eVertexBRX <= charVertexTRX) {
            this.removeEnemy();
        }
    }




}




