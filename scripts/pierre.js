
function bingo(x, y, bonusItems){
	var nbRandom;

	nbRandom = Math.random();

	if(nbRandom >= 0.80){
		bonusItems.createUpgradeItem(x, y);
	}
}

function bigHitOperaBoss(operaBoss, fireBall){
	fireBall.kill();
	enemies.reduceOperaBossLife(5);
}

function changeVersion(player, upgradeLogo){
	upgradeLogo.kill();
	var version = playerObject.getVersion(); 
	if(version < 4) {
		playerObject.setVersion( version + 1 );	
		var imageBonus = game.add.sprite(130, 250, 'bonus');
		setTimeout(function(){
			imageBonus.kill();
		}, 500);
	}
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
	var gameOver = game.add.sprite(250, 250, 'gameOver');
	bookmarks.removeAll();
	currentBullets.removeAll();
    bonus.getUpgradeItems().removeAll();
	game.paused = true;
}

function killBookmarks(bullet, bookmark) {
	bingo(bookmark.body.x, bookmark.body.y, bonus ); //bonus is a global var
	bullet.kill();
	bookmark.kill();

	playerObject.addScore(100);
	varParameters.setScore(playerObject.getScore());
}

function killGears(bullet, gear) {
	bingo(gear.body.x, gear.body.y, bonus ); //bonus is a global var
	bullet.kill();
	gear.kill();

	playerObject.addScore(125);
	varParameters.setScore(playerObject.getScore());
}

function smallHitOperaBoss(operaBoss, bullet){
	bullet.kill();
	enemies.reduceOperaBossLife(1);
}

