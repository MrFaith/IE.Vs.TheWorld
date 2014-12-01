function Enemies() {
	var bulletsAvailable = true;

	//Group
	var bookmarks;

	return {
		//Getters
		getBulletAvailable : function() {
			return bulletsAvailable;
		},

		//Setters
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		},

		//Method
		initBookmarks : function() {

		}
	};
}