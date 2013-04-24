getRecipes()

	*go find all recipes on Parse
	*pass that array into listRecipes()

listRecipes(recipes)

	*loop through array
		*render each recipe in <li> tags
		*just display name and description
		*set up click event for showSingleRecipe()



showSingleRecipe(recipe)

	*hide recipe list
	*show the single recipe container
	*render all info on recipe



showEditForm(recipe)

	*display recipe info IN inputs ie existing info to populate
	*hide other containers



setAndSave(recipe)
	*get info from each input and use recipe.set()
	*call recipe.save()
	*re-render the recipe with showSingleRecipe(recipe)








