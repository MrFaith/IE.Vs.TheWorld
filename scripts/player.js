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
		getPlayer : function() {
			return ie;
		}

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
            ie = game.add.sprite(xPos, yPos, name_sprite); 
		},
		position : function() {
			xPos = ie.body.x;
			yPos = ie.body.y;

			return {'x':xPos, 'y':yPos};
		}
	};
}