class rope {
	constructor(body1,body2, pointA, pointB)
	{
		this.pointA = pointA
		this.pointB = pointB

	line(x=300,y=100,x=300,y=300)


		var options = {
			bodyA : body1,
			bodyB : body2,
			pointB : {x : this.pointA, y : this.pointB}
		}
	//create rope constraint here
	rope1 = Matter.Constraint.create(options);
	World.add(world, rope1);
	}


    //create display() here 
display() {

	var pointA = this.bodyA.bodyA.position;
	var pointB = this.bodyB.bodyB.position;

	strokeWeight(2);
 }
}
