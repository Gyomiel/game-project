window.addEventListener("keydown", function (e) {
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
                break;
            case "d":
                character.directionX = 1;
                character.speed = 10;
                character.characterMovementX();
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
            case " ":
                character.attacking = true;
                break;
        }
    }
});


/////////
enemyMovement() {
    let previousX = this.x;
    let previousY = this.y;

    if (this.directionRandom === 1) {
        let enemyMoveX = this.x + this.speed * 1;
        if (enemyMoveX <= 1000 - this.width && enemyMoveX >= 0) {
            this.x = enemyMoveX;
        }
    }

    if (this.directionRandom === 2) {
        let enemyMoveX = this.x + this.speed * -1;
        if (enemyMoveX <= 1000 - this.width && enemyMoveX >= 0) {
            this.x = enemyMoveX;
        }
    }

    if (this.directionRandom === 3) {
        let enemyMoveY = this.y + this.speed * 1;
        if (enemyMoveY <= 1000 - this.height && enemyMoveY >= 0) {
            this.y = enemyMoveY;
        }
    }

    if (this.directionRandom === 4) {
        let enemyMoveY = this.y + this.speed * -1;
        if (enemyMoveY <= 1000 - this.height && enemyMoveY >= 0) {
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
    if (character.attacking === true) {
        canvas.removeChild(this.sprite);
        clearInterval(this.timerMove);
        clearInterval(this.timerDirection);
    }
}

///////

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

///

character:
characterMovementX() { // Moves the character in its X axis (left and right).
        let previousX = this.x;
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
        }

        if (this.checkCollisionsWithEnemies(enemyArray)) {
            this.y = previousY;
        }

        this.sprite.style.top = this.y + "px";
    }

    ///

    ```js
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

                this.speed = 0;
                return true;
            }
        }

        this.speed = 8;
        return false;
    }
```
