function killBookmarks(bullet, bookmark) {
	bingo(bookmark.body.x, bookmark.body.y);
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

function bingo(x, y){
	var nbRandom;

	nbRandom = Math.random();

	if(nbRandom >= 0.7){
		 upgrade_player = game.add.sprite(x, y, 'upgrade_player'); 
         game.physics.arcade.enable(upgrade_player); 
         upgrade_player.body.velocity.setTo(0, 200);
         playerObject.setVersion( playerObject.getVersion() );
         game.physics.arcade.collide(upgrade_player, playerObject.getPlayer(), changeVersion, null, this);
	}
}

function changeVersion(upgradeLogo, player){
	alert('b?');
	upgradeLogo.kill();
	var version = playerObject.getVersion();
	console.log(version);
	switch(version){
		case 1:
			break;
		case 2:
			break;
	}
}