class Ganon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 160;
        this.height = 160;
        this.sprite = document.createElement("div");
        this.direction = null;
        this.speed = 5;
        this.health = 150;
        this.strenght = 60;
        this.attacking = false;

    }
}