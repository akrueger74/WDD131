import recipes from './recipes.mjs';
console.log(recipes);

document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipe-container");
    const searchInput = document.getElementById("search-input");
    
    
    function displayRecipes(recipes) {
        recipeContainer.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
            `;
            recipeContainer.appendChild(recipeCard);
        });
    }

    function searchRecipes(query) {
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        displayRecipes(filteredRecipes);
    }


    searchInput.addEventListener("input", (e) => {
        searchRecipes(e.target.value);
    });


    displayRecipes(recipes);
});
