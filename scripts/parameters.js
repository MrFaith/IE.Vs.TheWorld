
function Parameters(){
    var cursors;
	var fireButton;
	var resetButton;
	var displayScore;

	return {

		// GETTER 
	    getCursors : function() {
	    	return cursors;
	    },

	    getFireBtn : function() {
	    	return fireButton;
	    },

	    getResetBtn : function() {
	    	return resetButton;
	    },

	    getDisplayScore : function() {
	    	return displayScore;
	    },

	    // SETTER
	    setCursors : function(newCursorValue) {
	    	cursors = newCursorValue;
	    },

	    setFireBtn : function(newButtonValue) {
	    	fireButton = newButtonValue;
	    },

	    setResetBtn : function(newButtonValue) {
	    	resetButton = newButtonValue;
	    },

	    setScore : function(newScore) {
	    	displayScore.setText("Score : " + newScore);
	    },

	    // METHOD
	    keyLeftIsDown : function() {
	    	if (cursors.left.isDown) {
	    		return true;
	    	}
	    	return false;
	    },

	    keyRightIsDown : function() {
	    	if (cursors.right.isDown) {
	    		return true;
	    	}
	    	return false;
	    },

	    fireIsDown : function() {
	    	if (fireButton.isDown) {
                return true;
            }
            return false;
	    },

	    initScore : function() {
	    	var style = { fill: "#FF0000", font: "20px Arial"};
	    	displayScore = game.add.text(325, 750, "Score : 0", style);
	    }
	};
}