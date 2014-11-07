// We start by initializing Phaser
    // Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
    var game = new Phaser.Game(750, 800, Phaser.AUTO, 'game_div');

    //Globales qui nous seront nécéssaires
        var cursors;
        var fireButton;
        var player;

        //ennemies
        var bookmarks;

        var bullets;
        var bulletsAvailable = true; // Va nous permettre de savoir si le joueur peut tirer
        

    // And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc. => donc on aura probablement besoin de 6 ou 7 states (1 par niveau, menu, scores, etc...)
    var main_state = {

        preload: function() {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
            
            
            game.stage.backgroundColor = '#000';

            game.load.image('player', 'assets/ie1.png'); //IE 
            game.load.image('bookmarks', 'assets/favoris.png') //Ennemy Favoris
            game.load.image('bullets', 'assets/bullet1.png'); //Tir simple
            game.load.image('laser', 'assets/laser.png'); //Tir simple
            
        },

        create: function() { 
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

            // Affiche un sprite sur l'écran
            // Parametres: x position, y position, nom du sprite
            player = game.add.sprite(375, 700, 'player');  

            //Groupe de favoris
            bookmarks = game.add.group(200, 200, 'bookmarks');
            bookmarks.enableBody = true;
            bookmarks.createMultiple(20, 'bookmarks');

            //création instance bookmark
            creationVagueBookmark(bookmarks);

            // Add gravity to the enemies (pour donner l'impression que l'on avance)
            game.physics.arcade.enable(player);
            //this.ie_sprite.body.gravity.y = 1000;  

            //Initialisation de nos tirs de niveau 1 
                bullets = game.add.group();
                bullets.enableBody = true;
                bullets.createMultiple(30, 'bullets');


            //  On ajoute nos touches d'actions (voir pour les modules)
            cursors = game.input.keyboard.createCursorKeys();
            fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        },

        update: function() {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.

            // Test rotation
            //this.ie_sprite.angle += 15; 
            //  Scroll the background !!! à voir 
            //starfield.tilePosition.y += 2;
            //  Reset the player, then check for movement keys
            player.body.velocity.setTo(0, 0);
            if (cursors.left.isDown && player.body.x > 20)
            {
                player.body.velocity.x = -450;
            }
            else if (cursors.right.isDown && player.body.x < 690)
            {
                player.body.velocity.x = 450;
                //functionTest(this.player);
            }

            //  Firing?
            if (fireButton.isDown)
            {
                shoot(player);
            }

            //Déplacement des ennemis (bookmark)
            //deplacementBookmark(bookmarks);

            /*if (game.time.now > firingTimer)
            {
                enemyFires();
            }*/

            //  Collisions !!!
            /*game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
            game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);*/

        },


        /*shoot: function() {  
            // Add a vertical velocity to the bird
            //this.ie_sprite.body.velocity.y = -350;
            console.log("Bam !");
        }*/

    }
    // And finally we tell Phaser to add and start our 'main' state
        game.state.add('main', main_state);  
        game.state.start('main'); 