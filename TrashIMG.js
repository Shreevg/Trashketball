  class TrashIMG{

    constructor(x, y, width, height)
    {
    
    var trashIMGOptions = {
        
        isStatic:true
    }
    
    
    this.ball=Bodies.rectangle(x, y, width, height, trashIMGOptions)
    this.w=width
    this.h=height
    this.image = loadImage("trashCan.png")

   

    World.add(world, this.ball)
    }
    
            
        display(){

 //           push()
   //         translate(this.ball.position.x, this.ball.position.y)
     //       rotate(this.ball.angle) 

    
    imageMode(CENTER)
    image(this.image, 650, 600, this.w*3, this.h*3)    

   // pop()
    
        }

    
    
    }
