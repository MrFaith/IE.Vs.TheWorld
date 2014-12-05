function Player() {
	var score = 0;
	var sprite;
	var version = 1;
	var bulletsAvailable = true;
	//TODO : Bonus

	var ie;

	return {
		// Getters
		getScore : function() {
			return score;
		},
		/*getSprite : function() {
			return sprite;
		},*/
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
		setVersion : function(newVersion) {
			version = newVersion;
		},
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		},

		// Method
		addSprite : function(xPos, yPos, name_sprite) {
            player = game.add.sprite(375, 655, 'player'); 
		}
	};
}