function killBookmarks(bullet, bookmark) {
	bullet.kill();
	bookmark.kill();

	score += 100;
	getScore.setText(displayScore + score);
}

function enemyHits(enemy, something) {
	player.kill();
	enemy.kill();

	game_over();
}

function game_over() {
	gameOver = game.add.sprite(250, 250, 'gameOver');

	bookmarks.removeAll();
	bullets.removeAll();
	iebg.kill();

	game.paused = true;
}