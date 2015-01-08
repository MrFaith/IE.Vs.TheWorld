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
    var bonus = Bonus();

    // And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc. => donc on aura probablement besoin de 6 ou 7 states (1 par niveau, menu, scores, etc...)
    var main_state = {

        preload: function() {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
                   
            game.stage.backgroundColor = '#fff';

            //Player skin, bullets and background
            game.load.image('player', 'assets/ie1.png'); 
            game.load.image('playerVersion2', 'assets/ie2.png');
            game.load.image('playerVersion3', 'assets/ie3.png');
            game.load.image('playerVersion4', 'assets/ie4.png');
            game.load.image('simpleBullets', 'assets/bullet1.png');
            game.load.image('laser', 'assets/laser.png');
            game.load.spritesheet('fireBall', 'assets/firesprite.gif',49, 80, 4);
            game.load.image('iebg', 'assets/background/ie/ie95Background.png');
            game.load.image('iebgVersion2', 'assets/background/ie/ieV2Background.png');
            game.load.image('iebgVersion3', 'assets/background/ie/ieV3Background.png');
            game.load.image('iebgVersion4', 'assets/background/ie/ieV4Background.png');


            game.load.image('gameOver', 'assets/miscellaneous/game_over.png');
            game.load.image('bonus', 'assets/miscellaneous/bonus.png');
            game.load.image('operabg', 'assets/background/operaBackground.png');
            game.load.image('upgrade_player', 'assets/upgradeVersion.png');

            //Ennemies
            game.load.image('bookmarks', 'assets/enemies/opera/bookmark.png');
            game.load.spritesheet('gears', 'assets/enemies/opera/engrenage.png', 20, 21, 2);
            game.load.spritesheet('operaBoss', 'assets/enemies/opera/operaBoss.png', 120, 110, 4);
            game.load.image('operaBossBullet', 'assets/enemies/opera/bossBullet.png');
        },

        create: function() { 
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.
            playerObject.addSprite(); // Display Player sprite
            operabg = game.add.sprite(0, 0, 'operabg'); // Background Opera

            //Groupe de favoris && Bonus
            enemies.initBookmarks();
            enemies.initGears();
            bonus.initUpgrades();

            //création instance bookmark
            creationVagueBookmark(enemies.getBookmarks());
            enemies.gearsWaveCreation();        
           
            //Initialisation de nos tirs
            bullets.initSimpleBullets();
            bullets.initFireBalls();

            //Scoring And world
            varParameters.initScore();
            game.world.setBounds(0, 0, 750, 900, false, false, false, false);

            //  On ajoute nos touches d'actions (voir pour les modules)
            varParameters.setCursors(game.input.keyboard.createCursorKeys());
            varParameters.setFireBtn(game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));          
            // Reset button pas fini
            //varParameters.setResetBtn(game.input.keyboard.addKey(Phaser.Keyboard.ENTER)); 
        },

        update: function() {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.
            playerObject.defineVelocity(0,0);
            playerObject.getPlayer().body.y = 655;

            //playerObject.getBackground().defineVelocity(0,0);
            var playerPosition = playerObject.position();
            if (varParameters.keyLeftIsDown()  && playerPosition.x > 20)
            {
                var movementBonus = 0.9 + ( (playerObject.getVersion() )*0.1 ); //Version 1 == 1, Version 2 == 1.1
                var movement = movementBonus*(-450);
                playerObject.defineVelocity(movement,0);
            }
            else if (varParameters.keyRightIsDown() && playerPosition.x < 690)
            {
                var movementBonus = 0.9 + ( (playerObject.getVersion() )*0.1 ); //Version 1 == 1, Version 2 == 1.1, ...
                var movement = movementBonus*(450);
                playerObject.defineVelocity(movement,0);
            }

            //  Firing?
            if (varParameters.fireIsDown())
            {
                shoot(playerObject, bullets);
            }

            //We hit an enemy !!!
            game.physics.arcade.collide(bullets.getSimpleBullets(), enemies.getBookmarks(), killBookmarks, null, this);
            game.physics.arcade.collide(bullets.getFireBalls(), enemies.getBookmarks(), killBookmarks, null, this);
            game.physics.arcade.collide(bullets.getSimpleBullets(), enemies.getGears(), killGears, null, this);
            game.physics.arcade.collide(bullets.getFireBalls(), enemies.getGears(), killGears, null, this);
            game.physics.arcade.collide(bullets.getSimpleBullets(), enemies.getOperaBoss(), smallHitOperaBoss, null, this);
            game.physics.arcade.collide(bullets.getFireBalls(), enemies.getOperaBoss(), bigHitOperaBoss, null, this);

            //We are hit by enemy...
            game.physics.arcade.collide(enemies.getBookmarks(), playerObject.getPlayer(), enemyHits, null, this);
            game.physics.arcade.collide(enemies.getBookmarks(), playerObject.getBackground(), enemyHits, null, this);
            game.physics.arcade.collide(enemies.getGears(), playerObject.getPlayer(), enemyHits, null, this);
            game.physics.arcade.collide(enemies.getGears(), playerObject.getBackground(), enemyHits, null, this);
            game.physics.arcade.collide(enemies.getOperaBossBullets(), playerObject.getPlayer(), enemyHits, null, this);

            //Bonus
            game.physics.arcade.collide(playerObject.getPlayer(), bonus.getUpgradeItems(), changeVersion, null, this);
        },

    }
    // And finally we tell Phaser to add and start our 'main' state
    game.state.add('main', main_state);  
    //game.state.start('main'); 