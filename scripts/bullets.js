function Bullets() {

	// Group
	var simple_bullet;
	var double_bullet;
	var triple_bullet;
	var laser;
	var composite_bullet;

	return {
		initSimpleBullets : function() {
			simple_bullet = game.add.group();
	       	simple_bullet.enableBody = true;
	        simple_bullet.createMultiple(30, 'simpleBullets');
	        simple_bullet.checkWorldBounds = true;
		},

		initFireBalls : function() {
			simple_bullet = game.add.group();
	       	simple_bullet.enableBody = true;
	        simple_bullet.createMultiple(30, 'simpleBullets');
	        simple_bullet.checkWorldBounds = true;
		},

		createSimpleBullets : function(xPosition, yPosition) {
			var bullet = simple_bullet.create( xPosition, yPosition, 'simpleBullets'); // Déclare une nouvelle bullet du groupe bullets
        	bullet.body.velocity.y -= 250;
        	bullet.checkWorldBounds = true;        	
        	bullet.events.onOutOfBounds.add( destroyBullet, this );
  			//this.outOfBoundsKill = true;
		},

		getSimpleBullets: function(){
			return simple_bullet; 
		}
	};
}

	function destroyBullet(bullet){
		bullet.kill();
	}