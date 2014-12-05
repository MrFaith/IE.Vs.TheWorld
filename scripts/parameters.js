
function Parameters(){
    var cursors;
	var fireButton;
	var resetButton;

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
	    }
	};
}