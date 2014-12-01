function Player() {
	var score = 0;
	var sprite;
	var version = 1;
	var bulletsAvailable = true;
	//TODO : Bonus

	return {
		//Getters
		getScore : function() {
			return score;
		},
		getSprite : function() {
			return sprite;
		},
		getVersion : function() {
			return version;
		},
		getBulletAvailable : function() {
			return bulletsAvailable;
		},

		// Setters
		setScore : function(newScore) {
			score = newScore;
		},
		setSprite : function(newSprite) {
			//TODO : A voir!
		},
		setVersion : function(newVersion) {
			version = newVersion;
		},
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		}
	};
}