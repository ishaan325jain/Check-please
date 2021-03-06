class Chain{
    constructor(object1,object2){
        var options = {
            bodyA: object2,
            pointB:  object1,
            stiffness : 0.4,
            length : 100
        }
       this.chain = Constraint.create(options);
       this.pointB = object1;
       World.add(world,this.chain);         

    }

    display(){
     var pointA =   this.chain.bodyA.position ;
     var pointB =   this.pointB ;
     strokeWeight(3);
     stroke("#FFFFFF");
    line(pointA.x,pointA.y,pointB.x,pointB.y);      
    }
}
