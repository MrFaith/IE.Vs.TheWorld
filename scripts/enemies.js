function Enemies() {
	var bulletsAvailable = true;

	//Group
	var bookmarks;
	var gears;
	var operaBoss;

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

		//Setters
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
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
			operaBoss = game.add.sprite(350, -20, 'iebg');
            game.physics.arcade.enable(operaBoss);

            /*bookmarks.enableBody = true;
            bookmarks.createMultiple(200, 'bookmarks');*/
		},

		//ATTACKKK !!!
		gearsWaveCreation : function() {
			//Pour l'instant une seule création
			var cpt = 0;
			gears.forEach(function(){
				cpt++;
			}, this);
			launchGearsWave(cpt,gears);
		}

	};
}