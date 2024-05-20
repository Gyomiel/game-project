class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.sprite = document.createElement("div");
        this.direction = null;
        this.speed = 5;
    }

    insertCharacter() {
        this.sprite.setAttribute("id", "character");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);
    }

    characterMovement() {

    }
}