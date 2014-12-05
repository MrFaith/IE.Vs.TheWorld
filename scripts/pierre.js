function killBookmarks(bullet, bookmark) {
	bullet.kill();
	bookmark.kill();

	playerObject.addScore(100);
	varParameters.setScore(playerObject.getScore());
}

function enemyHits(enemy, something) {
	enemy.kill();

	var ie = playerObject.getPlayer();
	var background = playerObject.getBackground();
	var bookmarks = enemies.getBookmarks();
	var simpleBullets = bullets.getSimpleBullets();
	background.kill();
	ie.kill();

	game_over( bookmarks, simpleBullets );
}

function game_over( bookmarks, currentBullets) {
	gameOver = game.add.sprite(250, 250, 'gameOver');
	bookmarks.removeAll();
	currentBullets.removeAll();
	game.paused = true;
}