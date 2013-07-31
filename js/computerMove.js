//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};

//computer move constructor function, to create a new same function each time to destroy
MASTER.ComputerMove = function(){	
	this.slot0 = MASTER.droidSlot[0], 
	this.slot1 = MASTER.droidSlot[1],
	this.slot2 = MASTER.droidSlot[2],
	this.slot3 = MASTER.droidSlot[3];
};

console.log(MASTER);
