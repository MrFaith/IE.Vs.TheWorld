// We start by initializing Phaser
    // Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
    var game = new Phaser.Game(750, 800, Phaser.AUTO, 'game_div');

    //Globales qui nous seront nécéssaires
        var cursors;
        var fireButton;
        var resetButton;

        var player;
        var score = 0;
        var displayScore = "Score : ";
        var getScore;

        var gameOver;
        var iebg;
        var operabg;

        //ennemies
        var bookmarks;

        var bullets;
        var bulletsAvailable = true; // Va nous permettre de savoir si le joueur peut tirer
        

    // And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc. => donc on aura probablement besoin de 6 ou 7 states (1 par niveau, menu, scores, etc...)
    var main_state = {

        preload: function() {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
            
            
            game.stage.backgroundColor = '#fff';

            game.load.image('player', 'assets/ie1.png'); //IE 
            game.load.image('bookmarks', 'assets/enemies/opera/bookmark.png') //Ennemy Favoris
            game.load.image('bullets', 'assets/bullet1.png'); //Tir simple
            game.load.image('laser', 'assets/laser.png'); //Tir simple

            game.load.image('gameOver', 'assets/game_over.png');
            game.load.image('iebg', 'assets/background/ie/ie95Background.png');
            game.load.image('operabg', 'assets/background/operaBackground.png');
        },

        create: function() { 
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

            // Affiche un sprite sur l'écran
            // Parametres: x position, y position, nom du sprite
            player = game.add.sprite(375, 655, 'player');  

            //Background IE
            iebg = game.add.sprite(0, 685, 'iebg');
            // Background Opera
            operabg = game.add.sprite(0, 0, 'operabg');

            //Groupe de favoris
            bookmarks = game.add.group(200, 200, 'bookmarks');
            bookmarks.enableBody = true;
            bookmarks.createMultiple(200, 'bookmarks');

            //création instance bookmark
            creationVagueBookmark(bookmarks);

            // Add gravity to the enemies (pour donner l'impression que l'on avance)
            game.physics.arcade.enable(iebg);
            game.physics.arcade.enable(player); 

            //Initialisation de nos tirs de niveau 1 
                bullets = game.add.group();
                bullets.enableBody = true;
                bullets.createMultiple(30, 'bullets');

            var style = { fill: "#FF0000", font: "20px Arial"};
            getScore = game.add.text(600, 740, displayScore+score, style);

            //  On ajoute nos touches d'actions (voir pour les modules)
            cursors = game.input.keyboard.createCursorKeys();
            fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            resetButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        },

        update: function() {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.

            player.body.velocity.setTo(0, 0);
            if (cursors.left.isDown && player.body.x > 20)
            {
                player.body.velocity.x = -450;
            }
            else if (cursors.right.isDown && player.body.x < 690)
            {
                player.body.velocity.x = 450;
            }

            //  Firing?
            if (fireButton.isDown)
            {
                shoot(player);
            }

            // Reset du jeu
            if (resetButton.isDown)
            {
                gameRestart();
            }

            //  Collisions !!!
            game.physics.arcade.overlap(bullets, bookmarks, killBookmarks, null, this);
            game.physics.arcade.overlap(bookmarks, player, enemyHits, null, this);
            game.physics.arcade.overlap(iebg, bookmarks, enemyHits, null, this);

        },

    }
    // And finally we tell Phaser to add and start our 'main' state
        game.state.add('main', main_state);  
        game.state.start('main'); 