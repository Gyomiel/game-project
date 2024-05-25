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
    }

    receiveDamage() {
        
    }


    insertCharacter() { // Inserts the character into the canvas.
        this.sprite.setAttribute("id", "character");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);
    }

    characterMovementX() { // Moves the character in its X axis (left and right).
        
        let moveX = this.x + this.speed * this.directionX;

        if (moveX <= 1000 - this.width && moveX >= 0) {
            this.x = moveX;
        }

        if (this.checkCollisionsWithEnemies(enemyArray)) {
            this.x = previousX;
        }

        this.sprite.style.left = this.x + "px";
    }

    characterMovementY() { // Moves the character in its Y axis (up and down).
        let previousY = this.y;
        let moveY = this.y + this.speed * this.directionY;

        if (moveY <= 1000 - this.height && moveY >= 0) {
            this.y = moveY;
            this.sprite.style.top = this.y + "px";
        }
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
}

 