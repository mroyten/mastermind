//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};

//This creates the hint table from the user's move.
MASTER.createHint = function(exactMatch, closeMatch) {		
	var previousHints,
		pastHints = this.doc.createElement("div"),
		hint = this.doc.createElement("div"),
		pastMove = this.doc.createElement("div");
		
		pastHints.appendChild(hint),	
		pastMove.className = "pastMove",
		pastHints.className = "pastHints",	
		hint.className = "hint",
		hintNodes = pastHints.children,
		docFragHints = this.doc.createDocumentFragment(); 
	
	for (previousHints=0; previousHints < 3; previousHints++) {				// clones the hint table cells
		pastHints.appendChild(hint.cloneNode(true));
	}
	
	//apply the hint colors
	var exactMatches,
		closeMatches,
		hints,
		exactMatchCount = 0,
		closeMatchCount = 0,
		hintCloseMatch = "hint closeMatch",
		hintExactMatch = "hint exactMatch";
	
	for (exactMatches in exactMatch) {
		if (exactMatch.hasOwnProperty(exactMatches)) {
			exactMatchCount++;
		}
	}
	
	for (closeMatches in closeMatch) {
		if (closeMatch.hasOwnProperty(closeMatches)) {
			closeMatchCount++;
		}
	}
	
	for (hints in hintNodes){
		if (closeMatchCount > 0) {
			hintNodes[hints].className = hintCloseMatch,
			closeMatchCount--;
			continue;
		}
		
		if (exactMatchCount > 0) {
			hintNodes[hints].className = hintExactMatch,
			exactMatchCount--;
		}
	}

	docFragHints.appendChild(pastHints);
	return docFragHints;
}
