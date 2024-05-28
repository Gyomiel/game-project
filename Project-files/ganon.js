class Ganon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.sprite = document.createElement("div");
        this.direction = null;
        this.speed = 5;
        this.health = 150;
        this.strenght = 1;
        this.attacking = false;

    }

    insertGanon() { 
        this.sprite.setAttribute("id", "ganon");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        battleScreen.appendChild(this.sprite);
   
    }

    ganonAttacksLink() {
        this.attacking = true;
    }

    linkAttacksGanon() {
        this.attacking = true;

    }
    removeGanon() {
        if (this.health <= 0) {
            battleScreen.removeChild(this.sprite);
        }
    }
}


