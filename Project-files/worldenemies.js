// Creating the world enemies

class Enemy { // Creates the enemy.
    constructor(randomLocationX, randomLocationY) { // Random location.
        this.x = randomLocationX;
        this.y = randomLocationY;
        this.width = 75;
        this.height = 75;
        this.sprite = document.createElement("div");
        this.speed = 1;
        this.health = 60;
        this.strength = 5;
        this.attacking = false;
        this.timerMove = setInterval(() => this.enemyMovement(), 10)
        this.directionRandom = 0
        this.timerDirection = setInterval(() => this.randomNumber(), 1000)//changes direction to emulate random movement
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


    enemyMovement() {//if there is a collision, the enemies keeps the previous direction
        let previousX = this.x;
        let previousY = this.y;
    
        //margin

        let marginRight = this.width + 95;
        let marginLeft = 95; 
        let marginBottomAndTop = 95;
        
        if (this.directionRandom === 1) {
            let enemyMoveX = this.x + this.speed * 1;
            if (enemyMoveX <= 1000 - marginRight && enemyMoveX >= marginLeft ) {
                this.x = enemyMoveX;
            }
        }
    
        if (this.directionRandom === 2) {
            let enemyMoveX = this.x + this.speed * -1;
            if (enemyMoveX <= 1000 - marginRight && enemyMoveX >= marginLeft) {
                this.x = enemyMoveX;
            }
        }
    
        if (this.directionRandom === 3) {
            let enemyMoveY = this.y + this.speed * 1;
            if (enemyMoveY <= 1000 - marginBottomAndTop &&  enemyMoveY >= marginBottomAndTop) {
                this.y = enemyMoveY;
            }
        }
    
        if (this.directionRandom === 4) {
            let enemyMoveY = this.y + this.speed * -1;
            if (enemyMoveY <= 1000 - marginBottomAndTop && enemyMoveY >= marginBottomAndTop) {
                this.y = enemyMoveY;
            }
        }
    
        if (this.checkCollisions()) {
            this.x = previousX;
            this.y = previousY;
        }
    
        this.sprite.style.left = this.x + "px";
        this.sprite.style.top = this.y + "px";
    }
    
    removeEnemy() {
        let a = enemyArray.indexOf(this)
        enemyArray.splice(a, 1)
        canvas.removeChild(this.sprite);
        clearInterval(this.timerMove);
        clearInterval(this.timerDirection);
        console.log(enemyArray)
    }

    checkCollisions() {
        let enemyX = this.x;
        let characterX = character.x;
    
        let enemyY = this.y;
        let characterY = character.y;
    
        let enemyXRight = this.x + this.width;
        let characterXRight = character.x + character.width;
    
        let enemyYBottom = this.y + this.height;
        let characterYBottom = character.y + character.height;
    
        if (enemyX < characterXRight && enemyXRight > characterX &&
            enemyY < characterYBottom && enemyYBottom > characterY) {

  
            if (enemyXRight > characterX && enemyX <= characterX) {
                this.x = characterX - this.width;
            
            } else if (enemyX < characterXRight && enemyXRight >= characterXRight) {
                this.x = characterXRight;
            }
    
            if (enemyYBottom > characterY && enemyY <= characterY) {
                this.y = characterY - this.height;
            } else if (enemyY < characterYBottom && enemyYBottom >= characterYBottom) {
                this.y = characterYBottom;
            }
    
            character.speed = 0;
            this.speed = 0;
    
            return true;
        }
    
        this.speed = 1;
        return false;
    }
}




