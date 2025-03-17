import recipes from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipe-list");
    const searchInput = document.getElementById("search-input");
    
    
    function displayRecipes(recipes) {
        recipeContainer.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">

                <div
                class="recipe-details">
                    
                    <h3>${recipe.name}</h3>
                    <p>${renderTags(recipe.tags)}</p>
                    <p>${recipe.description}</p>
                    
                    ${renderRatings(recipe.rating)}
                    <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
                </div>
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

function getRandomRecipe() {
    return Math.floor(Math.random()*recipes.length)
}

function renderTags(tags) {
    let html = `
    <div
    class="tags"
    >
    ${tags.map((tag) => `${tag}`)} 
    </div>
    `
    return html;
}

function renderRatings(ratings) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${ratings} out of 5 stars"
    >`

    for (let i = 0; i < 5; i++) {
        console.log(`
            i: ${i}
            ratings: ${ratings}
        `)

        if (i <= ratings) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

	html += `</span>`
	// return the html string
	return html
}