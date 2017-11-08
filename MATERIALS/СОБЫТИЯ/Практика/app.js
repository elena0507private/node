const EventEmitter = require("events");

class Hunter extends EventEmitter {
	onMoveRabbit(){
		myRabbit.on("move", (data) => myRabbit.getMoving());
	}

};
class Rabbit extends EventEmitter {

  move(){
	  console.log('Rabbit moves (his coordinates):')
	  this.x = parseInt(Math.random() * 100);
	  this.y = parseInt(Math.random() * 200);
  }

  getMoving(){
	this.move();
	console.log('this.x = ', this.x );
    console.log('this.y = ', this.y );
  }
};

const myHunter = new Hunter();
const myRabbit = new Rabbit();

myHunter.onMoveRabbit();
myRabbit.emit("move");
