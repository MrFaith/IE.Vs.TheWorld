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
		},

		addScore : function(newScore) {
			score += newScore;
		}
	};
}