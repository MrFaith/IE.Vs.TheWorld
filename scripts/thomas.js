function shoot(player, bullets){

    var xPosition = player.body.x + 15 ;
    var yPosition = player.body.y + 10 ; //On ajoute 10 pixels pour créer un petit décalage 

    bullets.createSimpleBullets( xPosition, yPosition);
    //On ne tire que si le joueur à le droit de tirer
    /*if( bulletsAvailable == true ){
        bulletsAvailable = false;

        var xPosition = player.body.x + 15 ;
        var yPosition = player.body.y + 10 ; //On ajoute 10 pixels pour créer un petit décalage  
        var bullet = bullets.create( xPosition, yPosition, 'simpleBullets'); // Déclare une nouvelle bullet du groupe bullets
        
        bullet.body.velocity.y -= 250;
        // Pour faire effet de laaag !
       /*setInterval( function(){
            bullet.body.velocity.y -= 1500; // On la met en mouvement
            setTimeout( function(){
                bullet.body.velocity.y = 0;
            }, 15);
        }, 300);     

        setTimeout( function(){
            bulletsAvailable=true;
        }, 200);
    }*/
}

//bullet.loadTexture('laser', 0, false);


    