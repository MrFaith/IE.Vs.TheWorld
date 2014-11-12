function killBookmarks(bullet, bookmark) {
	bullet.kill();
	bookmark.kill();

	score += 100;
	getScore.setText(displayScore + score);
}

function enemyHitsPlayer(player, enemy) {
	player.kill();
	enemy.kill();

	game_over();
}

function game_over() {
	gameOver = game.add.sprite(250, 250, 'gameOver');

	bookmarks.destroy();
	bullets.destroy();
}