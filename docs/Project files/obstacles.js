class Obstacles {
    constructor (width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.sprite = document.createElement("div");
        
    }
    
    insertObstacles() { // Inserts the obstacles into the canvas.
    console.log(this.y, this.x)
    this.sprite.setAttribute("id", "obs");
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";

    console.log(this.x + "obstaculo")
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    canvas.appendChild(this.sprite);
}

insertObstaclesGanon() { // Inserts the obstacles into the canvas.
    console.log(this.y, this.x)
    this.sprite.setAttribute("id", "obs");
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";

    console.log(this.x + "obstaculo")
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    battleScreen.appendChild(this.sprite);
}

} 


