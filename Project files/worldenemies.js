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
        this.speed = 10;
        
    }
    
    insertEnemy() { // Inserts the enemy into the canvas.
        console.log(this.y, this.x)
        this.sprite.setAttribute("id", "enemy");
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        canvas.appendChild(this.sprite);
        
    }}

