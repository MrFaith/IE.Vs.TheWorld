function Enemies() {
	var bulletsAvailable = true;

	//Group
	var bookmarks;

	return {
		//Getters
		getBulletAvailable : function() {
			return bulletsAvailable;
		},
		getBookmarks : function	(){
			return bookmarks;
		},

		//Setters
		setBulletAvailable : function(newBulletAvailable) {
			bulletsAvailable = newBulletAvailable;
		},

		//Method
		initBookmarks : function() {
			bookmarks = game.add.group(200, 200, 'bookmarks');
            bookmarks.enableBody = true;
            bookmarks.createMultiple(200, 'bookmarks');
		}
	};
}