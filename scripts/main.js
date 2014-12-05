// We start by initializing Phaser
    // Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
    var game = new Phaser.Game(750, 800, Phaser.AUTO, 'game_div');

    //Globales qui nous seront nécéssaires

        var score = 0;
        var displayScore = "Score : ";
        var getScore;

        var gameOver;
        var operabg;

    //Objects
    var varParameters = Parameters();
    var playerObject = Player();
    var bullets = Bullets();
    var enemies = Enemies();

    // And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc. => donc on aura probablement besoin de 6 ou 7 states (1 par niveau, menu, scores, etc...)
    var main_state = {

        preload: function() {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
            
            
            game.stage.backgroundColor = '#fff';

            game.load.image('player', 'assets/ie1.png'); //IE 
            game.load.image('bookmarks', 'assets/enemies/opera/bookmark.png') //Ennemy Favoris
            game.load.image('simpleBullets', 'assets/bullet1.png'); //Tir simple
            game.load.image('laser', 'assets/laser.png'); //Tir simple

            game.load.image('gameOver', 'assets/game_over.png');
            game.load.image('iebg', 'assets/background/ie/ie95Background.png');
            game.load.image('operabg', 'assets/background/operaBackground.png');
        },

        create: function() { 
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

            // Affiche un sprite sur l'écran
            playerObject.addSprite();

            // Background Opera
            operabg = game.add.sprite(0, 0, 'operabg');

            //Groupe de favoris
            enemies.initBookmarks();

            //création instance bookmark
            creationVagueBookmark(enemies.getBookmarks());           
           

            //Initialisation de nos tirs de niveau 1 
            bullets.initSimpleBullets();

            varParameters.initScore();

            //  On ajoute nos touches d'actions (voir pour les modules)
            varParameters.setCursors(game.input.keyboard.createCursorKeys());
            varParameters.setFireBtn(game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));          
            // Reset button pas fini
            //varParameters.setResetBtn(game.input.keyboard.addKey(Phaser.Keyboard.ENTER)); 
        },

        update: function() {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.

            playerObject.defineVelocity(0,0);
            var playerPosition = playerObject.position();
            if (varParameters.keyLeftIsDown()  && playerPosition.x > 20)
            {
                playerObject.defineVelocity(-450,0);
            }
            else if (varParameters.keyRightIsDown() && playerPosition.x < 690)
            {
                playerObject.defineVelocity(450,0);
            }

            //  Firing?
            if (varParameters.fireIsDown())
            {
                shoot(playerObject, bullets);
            }

            //  Collisions !!!
            game.physics.arcade.collide(bullets.getSimpleBullets(), enemies.getBookmarks(), killBookmarks, null, this);
            game.physics.arcade.collide(enemies.getBookmarks(), playerObject.getPlayer(), enemyHits, null, this);
            game.physics.arcade.collide(enemies.getBookmarks(), playerObject.getBackground(), enemyHits, null, this);

            // Reset du jeu
            /*if (resetButton.isDown)
            {
                game.paused = false;
                gameRestart();
            }*/

        },

    }
    // And finally we tell Phaser to add and start our 'main' state
        game.state.add('main', main_state);  
        game.state.start('main'); 