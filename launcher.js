class launcher{
    constructor(bodyA, pointB) {
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.0,
        length:10
    }
    this.pointB=pointB;
    this.launcher = Constraint.create(options);
    World.add(world, this.launcher);
}
fly(){
this.launcher.bodyA=null;
}

display(){

}
}