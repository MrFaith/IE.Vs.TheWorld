function shoot(player, bullets){
    var version = player.getVersion();
    var bulletsAvailable = player.getBulletAvailable();
    //On ne tire que si le joueur à le droit de tirer
    if( bulletsAvailable == true ){
        switch(version){
            case 1:
                //shootSimpleBullets(player);
                shootFireBalls(player);
                break;
            case 2:
                shootDoubleBullets(player);
                break;
            case 3:
                shootTripleBullets(player);
                break;
            case 4:
                shootFireBalls(player);
                break;
        }
        setTimeout( function(){
            player.setBulletAvailable(true);
        }, 200);
    }
}

function shootSimpleBullets(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createSimpleBullets( playerPosition.x+8, playerPosition.y);
}

function shootDoubleBullets(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createSimpleBullets( playerPosition.x+15, playerPosition.y);
    bullets.createSimpleBullets( playerPosition.x+5, playerPosition.y);
}

function shootTripleBullets(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createSimpleBullets( playerPosition.x+17, playerPosition.y);
    bullets.createSimpleBullets( playerPosition.x+9, playerPosition.y);
    bullets.createSimpleBullets( playerPosition.x+1, playerPosition.y);
}

function shootFireBalls(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createFireBalls( playerPosition.x-7, playerPosition.y-55);
}


//bullet.loadTexture('laser', 0, false);


    