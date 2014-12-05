function shoot(player, bullets){

    var bulletsAvailable = player.getBulletAvailable();
    //On ne tire que si le joueur à le droit de tirer
    if( bulletsAvailable == true ){
        player.setBulletAvailable(false);
        playerPosition = player.position();
        bullets.createSimpleBullets( playerPosition.x+8, playerPosition.y);

        setTimeout( function(){
            player.setBulletAvailable(true);
        }, 200);
    }
}

//bullet.loadTexture('laser', 0, false);


    