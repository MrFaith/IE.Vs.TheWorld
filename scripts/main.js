// We start by initializing Phaser
    // Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
    var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

    // And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc. => donc on aura probablement besoin de 6 ou 7 states (1 par niveau, menu, scores, etc...)
    var main_state = {

        preload: function() {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
            
            // Change the background color of the game
            game.stage.backgroundColor = '#71c5cf';

            game.load.image('IE', 'assets/ie1.png');  
        },

        create: function() { 
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

            // Affiche un sprite sur l'écran
            // Parametres: x position, y position, nom du sprite
            this.ie_sprite = game.add.sprite(220, 500, 'IE');  

            // Add gravity to the enemies (pour donner l'impression que l'on avance)
            game.physics.arcade.enable(this.ie_sprite);
            //this.ie_sprite.body.gravity.y = 1000;  

            // Fonction mouuuuve left quand on appuie sur la touche gauche
            var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            leftKey.onDown.add(this.moveLeft, this);  

            // Fonction move Right
            var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            rightKey.onDown.add(this.moveRight, this);

            // Fonction move Right
            var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.add(this.shoot, this);    
        },

        update: function() {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.

            // Test rotation
            //this.ie_sprite.angle += 15; 

        },

        moveLeft: function() {  
            // Add a vertical velocity to the bird
            this.ie_sprite.body.velocity.x = -350;
        },

        moveRight: function() {  
            // Add a vertical velocity to the bird
            this.ie_sprite.body.velocity.x = +350;
        },

        shoot: function() {  
            // Add a vertical velocity to the bird
            //this.ie_sprite.body.velocity.y = -350;
            console.log("Bam !");
        }

    }
    // And finally we tell Phaser to add and start our 'main' state
        game.state.add('main', main_state);  
        game.state.start('main'); 