function shoot(player){

    //On ne tire que si le joueur à le droit de tirer
    if( bulletsAvailable == true ){
        bulletsAvailable = false;

        var xPosition = player.body.x + 15 ;
        var yPosition = player.body.y + 10 ; //On ajoute 10 pixels pour créer un petit décalage  
        var bullet = bullets.create( xPosition, yPosition, 'bullets'); // Déclare une nouvelle bullet du groupe bullets
        bullet.body.velocity.y = -200; // On la met en mouvement

        setTimeout( function(){
            bulletsAvailable=true;
        }, 200);

    }
    
}


    