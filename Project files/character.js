class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.sprite = document.createElement("div");
        this.directionX = null;
        this.directionY = null;
        this.speed = 10;
    }

    insertCharacter() {
        this.sprite.setAttribute("id", "character");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);
    }

    characterMovementX() {

        this.directionX = 1;
        var moveX = this.x + this.speed * this.directionX
      
        if (moveX <= 1000 - this.width && moveX >= 0 && this.directionX === 1) {
            this.directionX= -1
            this.x = moveX;
            this.sprite.style.left = this.x + "px";

        }

    }


    characterMovementY() {

        this.directionY = 1;
        var moveY = this.y + this.speed * this.directionY
      
        if (moveY <= 1000 - this.height && moveY >= 0 && this.directionY === 1) {
            this.directionY= -1
            this.y = moveY;
            this.sprite.style.left = this.y + "px";

        }

    }
}