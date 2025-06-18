
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
let recipes
//const cards = document.querySelector('#cards');

async function getRecipeData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        recipes = data.recipes;
        await Promise.all([
            displayRecipes(recipes),
            //This line of code will call the matchRecipe function when the user click on the photo that was previous created for displayRecipes funtion


        ]);

    } catch (error) {
        console.error('Error getting data', error);
    }


}

document.addEventListener("DOMContentLoaded", function () {
    //here the content is created dinamically to show the recipe cards    
    getRecipeData(url);
    /* cards.addEventListener('click', (event) => {
         if (event.target.tagName === 'IMG') {
             const recipeId = event.target.id;
             matchRecipe(recipeId, recipes);
         }
     });*/

    document.querySelector('#cards').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const recipeId = event.target.id;
            const recipe = recipes.find(r => r.recipeId === recipeId);
            if (recipe) {
                showInfo(recipe);
            }
        }
    });







});



//this function create the cards of every recipe to show them in te recipes content
function displayRecipes(recipes) {
    console.log(recipes);
    const selector = document.querySelector('#cards');
    selector.innerHTML = "";
    recipes.forEach(recipe => {

        /*Here the elements are created*/
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let photo = document.createElement("img");
        let yields = document.createElement("p");
        let time = document.createElement("p");


        name.innerHTML = `<span class="label">${recipe.name}</span>`;;
        photo.setAttribute('id', `${recipe.recipeId}`);
        photo.setAttribute("src", recipe.img);
        photo.setAttribute("alt", `recipe of ${recipe.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "200");
        photo.classList.add('image-zoom');
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

/*
//This function will match and take the complete recipe information from the data.recipes to then be displayed on the screen
function matchRecipe(recipeId, recipes) {

    const recipeInfo = recipes.filter(recipe => recipe.recipeId == recipeId);
    showInfo(recipeInfo);

}*/


//This function will display a modal with the complete recipe when the user click on it
function showInfo(data) {

    const existingDialog = document.getElementById('myDialog');
    if (existingDialog) {
        existingDialog.remove();
    }

    const dialog = document.createElement('dialog');
    const title = document.createElement('h2');
    const closebtn = document.createElement('button');
    const recipeName = document.createElement('h3');
    const ingredientsUl = document.createElement('ul');
    const instructions = document.createElement('p');
    const yields = document.createElement('p');
    const time = document.createElement('p');
    const videoUrl = document.createElement('a');
    const ingredientLabel = document.createElement('p');

    dialog.setAttribute('id', 'myDialog');
    title.setAttribute('id', 'myTitle');
    closebtn.setAttribute('aria-label', 'Cerrar modal');
    data.ingredients.forEach(ingredient => {

        liName = document.createElement('li');
        liName.innerHTML = `• ${ingredient.name} ${ingredient.quantity}`;
        ingredientsUl.appendChild(liName);

    });
    console.log(ingredientsUl);

    title.innerHTML = `<span class="label">${data.name} Recipe</span>`;
    closebtn.innerHTML = 'X';
    recipeName.innerHTML = `<span class="label">${data.name}</span>`;
    ingredientLabel.innerHTML = `<span class="bold">Ingredients: </span>`;
    instructions.innerHTML = `<span class="bold">Instructions:</span> ${data.instructions}`;
    yields.textContent = `Yields: ${data.yields}`;
    time.textContent = `Preparation Time: ${data.time}`;
    videoUrl.innerHTML = `Recipe video: ${data.videoUrl}`;
    videoUrl.href = data.videoUrl;
    videoUrl.innerHTML = `<span class="style-link-spotlight">Recipe in video</span>`;
    videoUrl.title = `Click here to watch the video recipe`;
    videoUrl.target = '_blank';



    dialog.appendChild(title);
    dialog.appendChild(closebtn);
    dialog.appendChild(recipeName);
    dialog.appendChild(ingredientLabel);
    dialog.appendChild(ingredientsUl);
    dialog.appendChild(instructions);
    dialog.appendChild(yields);
    dialog.appendChild(time);
    dialog.appendChild(videoUrl);


    document.body.appendChild(dialog);
    dialog.showModal();
    closebtn.addEventListener('click', () => dialog.close());
}


