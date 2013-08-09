//MASTER global namespace for Mastermind. All within MASTER object.
var MASTER = MASTER || {};
MASTER.features = MASTER.features || {};

MASTER.features = {
	
	//slide the submit Move Button down along with the new move to make
	slideSubmitMoveButton : function() {
		var submitMoveContainer = MASTER.doc.getElementById('SubmitMoveContainer'),
		 	containerStyles = MASTER.globalName.getComputedStyle(submitMoveContainer),
			containerStyleTop = containerStyles.getPropertyValue('top'),	
			fromTheTop = parseInt(containerStyleTop);
			
		submitMoveContainer.style.top = (fromTheTop + 50) + "px";
	},
	
	//slide the submit Move Button down along with the new move to make
	slideSelectLists : function() {
		var selectListsContainer = MASTER.doc.getElementById('selectContainer'),
		 	listStyles = MASTER.globalName.getComputedStyle(selectListsContainer),
			listStyleTop = listStyles.getPropertyValue('top'),	
			fromTheTop = parseInt(listStyleTop);
			
		selectListsContainer.style.top = (fromTheTop + 50) + "px";
	},
	
	//deactiveate submit move button upon winning the game.
	killSubmit : function() {
		MASTER.submitMove.removeEventListener("click", MASTER.compareMove, true);
	},
	
	//a counter for the game
	counter : function(count) {
		return {
			getCount: function() {
				return count++ ;
			}
		}
	},
	
	//tally the user's score in the browser
	userScore : function() {
		var userScore = MASTER.doc.getElementById("userScore"),
			SubmitMoveContainer = MASTER.doc.getElementById("SubmitMoveContainer"),
			selectContainer = MASTER.doc.getElementById("selectContainer"),
			userMoveRow = MASTER.doc.getElementById("userMoveRow");
		
		var numberOfTrys = 10;

		if (userScore.textContent == (numberOfTrys - 1)) {
			
			selectContainer.style.display = "none",
			SubmitMoveContainer.style.display = "none",
			userMoveRow.style.display = "none";
		
			alert(MASTER.messages.outOfTrys);
			MASTER.features.killSubmit(),
			MASTER.revealCode();
		}
		
		userScore.textContent = MASTER.features.mycounter.getCount();
	}

};

//intialize counter
MASTER.features.mycounter = MASTER.features.counter(0);

//start user's score at 0
MASTER.features.userScore();
