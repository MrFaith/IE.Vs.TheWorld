function Bullets() {

	// Group
	var simple_bullet;
	var double_bullet;
	var triple_bullet;
	var fire_balls;
	var laser;
	var composite_bullet;

	return {
		initSimpleBullets : function() {
			simple_bullet = game.add.group();
	       	simple_bullet.enableBody = true;
	        simple_bullet.createMultiple(30, 'simpleBullets');
	        simple_bullet.checkWorldBounds = true;
		},

		initFireBalls : function(){
			fire_balls = game.add.group();
	       	fire_balls.enableBody = true;
	        fire_balls.createMultiple(30, 'fireBall');
	        fire_balls.checkWorldBounds = true;
		},

		createSimpleBullets : function(xPosition, yPosition) {
			var bullet = simple_bullet.create( xPosition, yPosition, 'simpleBullets'); // Déclare une nouvelle bullet du groupe bullets
        	bullet.body.velocity.y -= 250;
        	bullet.checkWorldBounds = true;        	
        	bullet.events.onOutOfBounds.add( destroyBullet, this );
		},

		createFireBalls : function(xPosition, yPosition) {
			var fire_ball = fire_balls.create(xPosition, yPosition, 'fireBall');
			//Animation
	        fire_ball.animations.add('shootfire');
			fire_ball.animations.play('shootfire', 12, true);
			//We kill the fire balls
			fire_ball.checkWorldBounds = true;        	
        	fire_ball.events.onOutOfBounds.add( destroyBullet, this );
			fire_ball.body.velocity.y -= 500;	
		},

		getFireBalls: function(){
			return fire_balls;
		},

		getSimpleBullets: function(){
			return simple_bullet; 
		}
	};
}

	function destroyBullet(bullet){
		bullet.kill();
	}