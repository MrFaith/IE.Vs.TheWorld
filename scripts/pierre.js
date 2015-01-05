function killBookmarks(bullet, bookmark) {

	bingo(bookmark.body.x, bookmark.body.y, bonus ); //bonus is a global var
	bullet.kill();
	bookmark.kill();

	playerObject.addScore(100);
	varParameters.setScore(playerObject.getScore());
}

function enemyHits(something, enemy) {
	enemy.kill();

	var ie = playerObject.getPlayer();
	var background = playerObject.getBackground();
	var bookmarks = enemies.getBookmarks();
	var simpleBullets = bullets.getSimpleBullets();

	var version = playerObject.getVersion();
	version -= 1;
	if(version > 0){
		playerObject.setVersion(version);
	} else {
		background.kill();
		ie.kill();
		game_over( bookmarks, simpleBullets );
	}
}

function game_over( bookmarks, currentBullets) {
	gameOver = game.add.sprite(250, 250, 'gameOver');
	bookmarks.removeAll();
	currentBullets.removeAll();
	game.paused = true;
}

function bingo(x, y, bonusItems){
	var nbRandom;

	nbRandom = Math.random();

	if(nbRandom >= 0.7){
		bonusItems.createUpgradeItem(x, y);
	}
}

function changeVersion(player, upgradeLogo){
	upgradeLogo.kill();
	var version = playerObject.getVersion(); 
	if(version < 2)
		playerObject.setVersion( version + 1 );	
}