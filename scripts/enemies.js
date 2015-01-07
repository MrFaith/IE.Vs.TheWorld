function Enemies() {
	var bulletsAvailable = true;

	//Group
	var bookmarks;
	var gears;
	var operaBoss;
	var operaBossLife = 500;

	return {
		//Getters
		getBulletAvailable : function() {
			return bulletsAvailable;
		},
		getBookmarks : function	(){
			return bookmarks;
		},
		getGears : function (){
			return gears;
		},
		getOperaBoss : function(){
			return operaBoss;
		},
		getOperaBossLife : function(){
			return operaBossLife;
		},

		//Setters
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		},

		reduceOperaBossLife : function(dammages){
			operaBossLife -= dammages;
		},

		//Initialisations
		initBookmarks : function() {
			bookmarks = game.add.group(200, 200, 'bookmarks');
            bookmarks.enableBody = true;
            bookmarks.createMultiple(200, 'bookmarks');
		},
		initGears : function() {
			gears = game.add.group(200, 200, 'gears');
            gears.enableBody = true;
            gears.createMultiple(100, 'gears');
		},

		initOperaBoss : function() {
			operaBoss = game.add.sprite(350, -40, 'operaBoss');
            game.physics.arcade.enable(operaBoss);
            operaBoss.body.velocity.y += 300;
            var attack = operaBossAttack(operaBoss);
		},

		//ATTACKKK !!!
		gearsWaveCreation : function() {
			//Pour l'instant une seule création
			var cpt = 0;
			gears.forEach(function(){
				cpt++;
			}, this);
			launchGearsWave(cpt,gears);
		},

	};
}