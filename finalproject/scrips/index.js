
/* This shows the last modified date in the footer*/
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;

/*This section create an event fot the hamburger menu in mobile view*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

});


//Spotlights Section
//Recipes added dynamically from an a JSON file

const url = ('data/recipes.json');
//const cards = document.querySelector('#cards');

async function getRecipeData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        await Promise.all([
            filteredMeal(data.recipes),
            filteredDessert(data.recipes)
        ])
    } catch (error) {
        console.error('Error getting data', error);
    }


}

document.addEventListener("DOMContentLoaded", function () {
    getRecipeData(url);
});



//Recipes object filtered funtion by Dishes for meal
function filteredMeal(recipes) {
    const meal = document.getElementById('meal');
    const filRecipes = recipes.filter(recipe => recipe.dessert === false);
    const randomRecipes = mixupRecipes(filRecipes);
    displayRecipes(meal, randomRecipes);
}

//Recipes object filtered function by Desserts
function filteredDessert(recipes) {
    const dessert = document.getElementById('dessert');
    const filRecipes = recipes.filter(recipe => recipe.dessert === true);
    const randomRecipes = mixupRecipes(filRecipes);
    displayRecipes(dessert, randomRecipes);

}




//This function select 3 random recipes from the list
function mixupRecipes(recipes) {
    const mix = recipes.sort(() => Math.random() - 0.5);
    const selectedRecipes = mix.slice(0, 3);
    return selectedRecipes;
}


//this function create the cards of every recipe to show them like spotlighs in the home-page
function displayRecipes(selector, recipes) {
    console.log(selector);
    console.log(recipes);
    selector.innerHTML = "";
    recipes.forEach(recipe => {

        /*Here the elements are created*/
        let card = document.createElement("div");
        let name = document.createElement("p");
        let photo = document.createElement("img");
        let yields = document.createElement("p");
        let time = document.createElement("p");


        name.innerHTML = `<span class="bold">${recipe.name}</span>`;
        photo.setAttribute("src", recipe.img);
        photo.setAttribute("alt", `recipe of ${recipe.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "200");
        yields.textContent = `Yields ${recipe.yields}`;
        time.textContent = `Preparation time: ${recipe.time} minutes`;

        card.classList.add('style-spotlights');
        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(yields);
        card.appendChild(time);

        selector.appendChild(card);

    });

}

