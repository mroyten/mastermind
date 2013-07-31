//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};

// Constructor function to produce last move's values
MASTER.UserMove = function(slot1, slot2, slot3, slot4) { 
	var allSelect = MASTER.allSelections;
	this.slot0 = allSelect[0].value,
	this.slot1 = allSelect[1].value,
	this.slot2 = allSelect[2].value,
	this.slot3 = allSelect[3].value;
};
