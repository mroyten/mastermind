var MASTER = MASTER || {};

MASTER = {
	globalName : window,
	doc : document,
	droidSlot : [],
	selection : " selection",
	select : "select",
	colors : [
		"red", 
		"blue", 
		"green", 
		"yellow", 
		"white", 
		"black"
	],
	
	messages : {
		winner : [
		 	"Congrats, you've won! ",
			"You Win! Try Again, to Possibly Win Again!",
			"You have done it, great job! Now drink a couple and try again! "
		],
		
		loser : {
			"showMeCode" : "Quit quitting! Here is the Computer's Code!",
			"reStart" : "Quitters Never Win!"
		},
		
		outOfTrys : "Out of attempts, try again!",
		
		rules : "Break the Code! Select 4 colors per row and receive hints based on your move. A mini white peg means you have the correct color in the incorrect spot. A mini black peg signifies that you have the correct color in the correct spot. You have ten chances to guess the color combination correctly, the lowest number of guesses is the MasterMind! Have Fun!",
		
		incompleteMove : "Complete Filling Out Your Move Please."
	}
};


