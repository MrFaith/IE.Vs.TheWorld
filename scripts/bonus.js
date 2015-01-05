function Bonus() {

	// Group
	var upgrade_player_item;

	return {

		createUpgradeItem : function(x, y){
        	var upgradeItem = upgrade_player_item.create(x, y, 'upgrade_player');
			upgradeItem.anchor.setTo(0.5, 0.5);
			upgradeItem.body.velocity.y = 200;
		},

		initUpgrades : function() {
			upgrade_player_item = game.add.group();
	       	upgrade_player_item.enableBody = true;
	        upgrade_player_item.createMultiple(30, 'upgrade_player');
		},

		getUpgradeItems: function(){
			return upgrade_player_item; 
		}
	};
}