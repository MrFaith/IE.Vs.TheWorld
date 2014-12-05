function shoot(player, bullets){

    var bulletsAvailable = player.getBulletAvailable();
    //On ne tire que si le joueur à le droit de tirer
    if( bulletsAvailable == true ){
        player.setBulletAvailable(false);
        //console.log( player.position() );
        /*var xPosition = player.body.x + 15 ;
        var yPosition = player.body.y + 10 ; //On ajoute 10 pixels pour créer un petit décalage  
        bullets.createSimpleBullets( xPosition, yPosition);*/

        setTimeout( function(){
            player.setBulletAvailable(true);
        }, 200);
    }
}

//bullet.loadTexture('laser', 0, false);


    