class chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length:3,
            stiffness:4
        }   
     this.chain = Constraint.create(options);
     World.add(world,chain);
    }

    display(){
        var body1= this.chain.bodyA.position
        var body2= this.chain.bodyB.position
        strokeWeight(3);
        line (body1.x, body1.y,body2.x,body2.y);
    }
}