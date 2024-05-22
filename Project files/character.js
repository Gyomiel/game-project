// Creating the main character

class Character { // Creates the character.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.sprite = document.createElement("div");
        this.directionX = null;
        this.directionY = null;
        this.speed = 10;}
       /* this.health = health;
        this.strenght = strenght;
    }
    characterAttack() {
        return this.strenght
    }

    receiveDamage(dmg) {
        this.health -= dmg
        if(this.health > 0) {

        }
    }*/

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
            this.sprite.style.left = this.x + "px";
        }
    }

    characterMovementY() { // Moves the character in its Y axis (up and down).

        let moveY = this.y + this.speed * this.directionY;
      
        if (moveY <= 1000 - this.height && moveY >= 0) {
            this.y = moveY;
            this.sprite.style.top = this.y + "px";
        }
    }
}