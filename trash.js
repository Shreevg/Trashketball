class Trash{

    constructor(x, y, radius)
    {
    
    var circleOptions = {
        
        restitution:0.3,
        density:2,
        friction:0.5
    }
    
    
    this.ball=Bodies.circle(x, y, radius, circleOptions)
    this.r1=radius
    this.image = loadImage("paper.png")

   

    World.add(world, this.ball)
    }
    
            
        display(){

            push()
            translate(this.ball.position.x, this.ball.position.y)
            rotate(this.ball.angle) 

    
    imageMode(CENTER)
    image(this.image, 0, 0, this.r1*6, this.r1*6)    

    pop()
    
        }

    
    
    }


  //  trash.js
