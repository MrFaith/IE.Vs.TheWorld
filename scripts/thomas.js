function shoot(player, bullets){
    var version = player.getVersion();
    var bulletsAvailable = player.getBulletAvailable();
    //On ne tire que si le joueur à le droit de tirer
    if( bulletsAvailable == true ){
        switch(version){
            case 1:
                shootSimpleBullets(player);
                break;
            case 2:
                shootDoubleBullets(player);
                break;
        }
        setTimeout( function(){
            player.setBulletAvailable(true);
        }, 200);
    }
}


function shootDoubleBullets(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createSimpleBullets( playerPosition.x+15, playerPosition.y);
    bullets.createSimpleBullets( playerPosition.x+5, playerPosition.y);
}

function shootSimpleBullets(player){
    player.setBulletAvailable(false);
    playerPosition = player.position();
    bullets.createSimpleBullets( playerPosition.x+8, playerPosition.y);
}


//bullet.loadTexture('laser', 0, false);


    