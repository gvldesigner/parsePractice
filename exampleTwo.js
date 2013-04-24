
Parse.initialize("1KLwfe3OO4QSQL8to2uULAOqCcjD6NWZP0ejZYu4", "Dmypyw2DpcFvuRnrdIESIhpXSrk51IVuQgTm4n4H");
console.log('test')
/*when the document is loaded*/

Recipe = Parse.Object.extend('Recipe');
recipe = new Recipe()


$(document).ready(function() {

};

var query = new Parse.Query(Recipe);

/*go find all recipes on parse
*/
var getRecipes = function(){
	query.find({
		success: function(results){
			listRecipes(results);
		}
	})

};

var listRecipes = function(recipes){
	for (var i = 0; i < recipes.length; i++){

		recipes(<li> name+description+ingredients </li>);
	}
};
		
var showSingleRecipe = function(recipe){

	().click showSingleRecipe();
	('js-recipes-container recipes-container').hide;
	('js-single-recipe single-recipe').show;
	
	
};



function showEditForm (){
	showSingleRecipe();

	('js-single-recipe single-recipe').hide;
	('js-recipes-container recipes-container').show;
	
		.edit
			recipe.save(null, {
  		success: function(recipe) {
	    // Now let's update it with some new data. In this case, only cheatMode and score
	    // will get sent to the cloud. playerName hasn't changed.
	    recipe.set("name");
	    recipe.set("description");
	    recipe.save();
  }

	})

};


