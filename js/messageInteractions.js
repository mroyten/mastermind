//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};
MASTER.messageDisplay = MASTER.messageDisplay || {};

//alert user with directions to the game 
(MASTER.messageDisplay.directionsDisplay = function () {
	var rules = MASTER.doc.getElementById("rulesDisplay");
	rules.addEventListener("click", alertNow, true);

	function alertNow() {
		alert(MASTER.messages.rules);
	}
})();

//alert user to fill out there row for the move.
MASTER.messageDisplay.completeMovePlease = function() {
	alert(MASTER.messages.incompleteMove);
};
	
//run function once user wins
MASTER.messageDisplay.congratsYouHaveWon = function() {
	alert(MASTER.messages.winner[(Math.floor(Math.random() * (3 - 0)))]);
	MASTER.features.killSubmit();		
};

//refresh the page w/ a loser message
(MASTER.startOver = function() {
	var startOver = MASTER.doc.getElementById("startOver");
	
	startOver.addEventListener("click", quit, true);
	
	//throw an if in here if it is the user's first try'
	//do not throw the alert message in here if the user hasn't tried

	function quit() {
		MASTER.revealCode(),
		alert(MASTER.messages.loser.reStart),
		MASTER.globalName.location.reload();
	}
})();

//refresh the page w/ a loser message
(MASTER.giveUp = function() {
	MASTER.doc.getElementById("giveUp").addEventListener("click", reveal, true);

	function reveal() {
		alert(MASTER.messages.loser.showMeCode),
		MASTER.features.killSubmit(),
		MASTER.revealCode();
	}
})();



