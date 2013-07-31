//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};

//This creates the user's previous moves row within the DOM
MASTER.createPreviousMove = function(exactMatch, closeMatch) {
	var pastMove = this.doc.createElement("div"),
		divRow = this.doc.createElement("div"),
		divMove = this.doc.createElement("div"),
		pastPicksRow = this.doc.createElement("div"),
		userMoveRow = this.doc.getElementById("userMoveRow"),
		gameContainer = this.doc.getElementById("game-container");
		
		moveRow = pastPicksRow.childNodes,
		pastPicksRow.className = "pastPicksRow", 
		divMove.className = this.selection,
		pastMove.className = "moveRow",
		docFrag = this.doc.createDocumentFragment(); 
		
	var pastPicks,
		previousMoves,
		colorColumns = 4,
		allSelect = MASTER.allSelections,
		parentSelct = MASTER.parentSelectNode;
		
	for (pastPicks=0; pastPicks < colorColumns; pastPicks++){ 
		pastPicksRow.appendChild(divMove.cloneNode(false));
	}
		
		
	// loop through each div of previous move and add className to it
	for (var previousMoves = 0;  previousMoves < moveRow.length; previousMoves++) { 
		moveRow[previousMoves].className = parentSelct[previousMoves].className;
		
		// if user doesn't select a color, run function
		if (allSelect[previousMoves].value === this.select) { 
			this.messageDisplay.completeMovePlease();
			return false;
		}
		
		parentSelct[previousMoves].className = this.selection,  //remove the colored class name from the current move's div
		allSelect[previousMoves].value = this.select; // set select list default value to select, post move
	} 

	this.createHint(exactMatch, closeMatch),  //	create hints for move
	pastMove.appendChild(docFragHints), 
	pastMove.appendChild(pastPicksRow), 
	docFrag.appendChild(pastMove),
	gameContainer.insertBefore(docFrag, userMoveRow); 
	
	// intialize a bunch of functions upon making a move.
	this.features.userScore(),//count the number of moves from the user
	this.features.slideSubmitMoveButton(),  // slide the submit button down
	this.features.slideSelectLists(),  //slide the selEct lists along with the move.
	this.removeEmptyRow();//deletes a row once the new one is created
}

//deletes a row once the new one is created
MASTER.removeEmptyRow = function() {
	var pastPickArray = this.doc.getElementsByClassName("moveRow");
	pastPickArray[10].parentNode.removeChild(pastPickArray[10]);
};


	
