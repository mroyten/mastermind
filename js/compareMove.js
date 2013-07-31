//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};

//compares the users and computers moves
MASTER.compareSlots = function(lastMove, pcMove){
	
	//Checks to see if user Won the game, if so, it is over!!
	if (lastMove.slot0 === pcMove.slot0 
		&& lastMove.slot1 === pcMove.slot1 
		&& lastMove.slot2 === pcMove.slot2 
		&& lastMove.slot3 === pcMove.slot3) {
		this.revealCode(),
		this.messageDisplay.congratsYouHaveWon();
	}
	
	var exactMatch = {},
		closeMatch = {},
		slotNumber,
		lastMoveSlot,
		pcMoveSlot;
	
	// check for exact Matches first
	for (slotNumber in lastMove) {
		if (lastMove[slotNumber] === pcMove[slotNumber]) {		
			exactMatch[slotNumber] = lastMove[slotNumber],
			delete lastMove[slotNumber], 
			delete pcMove[slotNumber];
		}
	}
	
	// check for close Matches next		
	for (pcMoveSlot in lastMove) {								
		for (lastMoveSlot in pcMove) {							
			if(lastMove[pcMoveSlot] === pcMove[lastMoveSlot] 
			&& lastMove[pcMoveSlot] !== pcMove[pcMoveSlot]) {		
			closeMatch[pcMoveSlot] = lastMove[pcMoveSlot],
			delete lastMove[pcMoveSlot], 
			delete pcMove[lastMoveSlot];
			}
		}
	}
	
	// populate User's Last Move
	this.createPreviousMove(exactMatch, closeMatch);  
};





