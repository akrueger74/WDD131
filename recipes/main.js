document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipe-container");
    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category-btn");
    
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

    function filterByCategory(category) {
        if (category === "all") {
            displayRecipes(recipes);
        } else {
            const filteredRecipes = recipes.filter(recipe => recipe.category === category);
            displayRecipes(filteredRecipes);
        }
    }

    searchInput.addEventListener("input", (e) => {
        searchRecipes(e.target.value);
    });

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterByCategory(button.dataset.category);
        });
    });

    displayRecipes(recipes);
});
