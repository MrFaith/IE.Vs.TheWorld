var bookmarkboucle;

function creationVagueBookmark(bookmarks) {
	//Pour l'instant une seule création
	var cpt = 0;
	bookmarks.forEach(function(){
		cpt++;
	}, this);
	
	deplacementBookmark(cpt,bookmarks);
}

function deplacementBookmark(cpt, bookmarks) {
	bookmarkboucle = this.game.time.events.add(600, function() {
		if(cpt > 0) {
			var randomNumber = Math.floor((Math.random() * 600) + 30);

            var bookmark = bookmarks.create(randomNumber, -5, 'bookmarks');
			bookmark.anchor.setTo(0.5, 0.5);
			bookmark.body.velocity.y = 140;
			cpt--;
			deplacementBookmark(cpt, bookmarks);
		} else {

		}
    }, this);
}

function gameRestart() {
    enemies.getBookmarks().removeAll();
    bonus.getUpgradeItems().removeAll();
    playerObject.getPlayer().kill();
    playerObject.setScore(0);
    playerObject.setVersion(1);
	game.paused = false;
    game.state.start('main');
}

function gameStart() {
	game.state.start('main');
}