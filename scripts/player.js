function Player() {
	var score = 0;
	var sprite;
	var version = 1;
	var bulletsAvailable = true;
	//TODO : Bonus

	var ie;
	var background;

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
		},

		// Setters
		setScore : function(newScore) {
			score = newScore;
		},
		setVersion : function(newVersion) {
			version = newVersion;
			switch(version){
				case 1:
					ie.loadTexture('player', 0, 0);
					background.loadTexture('iebg');
					break;
				case 2:
					ie.loadTexture('playerVersion2', 0, 0);
					background.loadTexture('iebgVersion2');
					break;
				case 3:
					ie.loadTexture('playerVersion3', 0, 0);
					background.loadTexture('iebgVersion3');
					break;
			}
		},
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		},

		// Method
		addSprite : function() {
            ie = game.add.sprite(375, 655, 'player'); 
            game.physics.arcade.enable(ie); 

            //Background IE
            background = game.add.sprite(0, 685, 'iebg');
            game.physics.arcade.enable(background);
		},	
		position : function() {
			xPos = ie.body.x;
			yPos = ie.body.y;
			return {'x':xPos, 'y':yPos};
		},
		getBackground : function(){
			return background;
		},
		defineVelocity : function(x, y){
			ie.body.velocity.setTo(x, y);
			background.body.velocity.setTo(0, 0);
		},
		addScore : function(newScore) {
			score += newScore;
		}
	};
}