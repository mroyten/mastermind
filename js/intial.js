//Initialize States

//create objects and start triggering functions when the user makes a move.
MASTER.compareMove = function(event) { 
	var lastMove = new MASTER.UserMove(), // create new instance of UserMove Constructor
		pcMove = new MASTER.ComputerMove(); // create new instance of ComputerMove Constructor
	
	MASTER.compareSlots(lastMove, pcMove); // run the compare slot function
}

// event handler to submit the move
MASTER.submitMove = MASTER.doc.getElementById("submitMove"),
MASTER.submitMove.addEventListener("click", MASTER.compareMove, true);

//adding handlers to each select list 
(function() {
	MASTER.allSelections = MASTER.doc.getElementsByTagName("select"),
	MASTER.parentSelectNode = [];
	
	var masSelect = MASTER.allSelections, 
		masParentSelect = MASTER.parentSelectNode;
	
	var userPick = MASTER.doc.getElementById("userPick"),
		allSelectionsLength = masSelect.length,
		makeSelection; 
		
	
	for (var i=0; i < allSelectionsLength; i++){
		masSelect[i].value = MASTER.select, //assign the select list's default selection to "select"
		makeSelection = masSelect[i],  // array of select lists
		masParentSelect[i] = masSelect[i].parentNode, // array of select lists' parents' divs
		makeSelection.addEventListener("change", function(event) {
				var pegColor = event.target.value, // get select lists color value and assign to pegColor
					pegLocation = event.target; // set var for the event handler's target
				pegLocation.parentNode.setAttribute("class", pegColor + MASTER.selection); // set class of parent nodes class attribute
				}, true); // event handler on the select list 
	}
})();

//randomizes the colors to feed to the pc slots
(MASTER.colorRandomizer = function(){
	var slotNum;
	
	for (slotNum = 0; slotNum < 4; slotNum++) {
		MASTER.droidSlot[slotNum] = MASTER.colors[(Math.floor(Math.random() * (6 - 0)))];
	}
	
	return MASTER.droidSlot;
})();	

/*to reveal the correct combination from the computer when the user wins!*/
MASTER.revealCode = function(){
	var droidSlot0 = this.doc.getElementById("droidSlot0"),
	  	droidSlot1 = this.doc.getElementById("droidSlot1"),
		droidSlot2 = this.doc.getElementById("droidSlot2"),
		droidSlot3 = this.doc.getElementById("droidSlot3");
	
		droidSlot0.className = this.droidSlot[0] + this.selection,
		droidSlot1.className = this.droidSlot[1] + this.selection,
		droidSlot2.className = this.droidSlot[2] + this.selection,
		droidSlot3.className = this.droidSlot[3] + this.selection;
};
