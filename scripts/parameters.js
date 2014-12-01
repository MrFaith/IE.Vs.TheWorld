
function Parameters(){
    var cursors;
	var fireButton;
	var resetButton;

	return {
	    getCursors : function() {
	    	return cursors;
	    },

	    getFireBtn : function() {
	    	return fireButton;
	    },

	    getResetBtn : function() {
	    	return resetButton;
	    },

	    setCursors : function(newCursorValue) {
	    	cursors = newCursorValue;
	    },

	    setFireBtn : function(newButtonValue) {
	    	fireButton = newButtonValue;
	    },

	    setResetBtn : function(newButtonValue) {
	    	resetButton = newButtonValue;
	    }
	};
}