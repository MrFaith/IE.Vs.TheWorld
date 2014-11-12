function creationVagueBookmark(bookmarks) {

	//Pour l'instant une seule création
	var cpt = 0;
	bookmarks.forEach(function(){
		cpt++;
	}, this);

	deplacementBookmark(cpt);
}

function deplacementBookmark(cpt) {
	setTimeout( function(){
		if(cpt > 0) {
			//console.log('kgro');
			var randomNumber = Math.floor((Math.random() * 600) + 30);
			console.log(randomNumber);

            var bookmark = bookmarks.create(randomNumber, -5, 'bookmarks');
			bookmark.anchor.setTo(0.5, 0.5);
			bookmark.body.velocity.y = 100;
			cpt--;
			deplacementBookmark(cpt);
		}
    }, 1500);
}