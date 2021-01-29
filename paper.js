class Paper{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,25,25, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        
        imageMode(CENTER);
        image(this.image,800,350,30,30);   
        if (keyCode === UP_ARROW) {
          this.body.position.y = -50
          this.body.position.x = 1200
          Matter.Body.setStatic(this.body,true);
          
            } 
        if(this.body.position.y === -50){
          Matter.Body.setStatic(this.body,false);
        }
        pop();
      }
}
