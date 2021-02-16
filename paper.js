class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("paper.png")
        

        World.add(world, this.body);
    }
    display() {
        var paperpos = this.body.position;
        image(this.image,200,350,this.width,this.height)
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(1.9);
        fill(255,0,255)
        ellipse(2,2,this.r,this.r);
        pop()
    }
}