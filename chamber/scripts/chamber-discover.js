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


/*Chamber Commerce Members Directoy added dynamically from an a JSON file*/

const url = ('data/items.json');
const cards = document.querySelector('#cards');

async function getItemData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayItems(data.items);
    } catch (error) {
        console.error('Error getting data', error);
    }


}


getItemData(url);

const displayItems = ((items) => {

    document.querySelector("#places").innerHTML = "";
    items.forEach(item => {

        let place = document.createElement("div");
        let name = document.createElement("h2");
        let figure = document.createElement("figure");
        let photo = document.createElement("img");
        let location = document.createElement("address");
        let description = document.createElement("p");
        let btn = document.createElement("button");


        name.innerHTML = `<span class="labelh2"> ${item.name}</span>`;

        //here the elements into the figure are setting
        photo.setAttribute("src", item.image);
        photo.setAttribute("alt", `image of ${item.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "300");
        photo.setAttribute("height", "200");
        photo.classList.add("image-zoom");


        location.textContent = item.address;
        description.textContent = item.description;

        //Here the button learn more is setting
        btn.setAttribute('id', `'btn-learn'`);
        btn.classList.add('style-btn');
        btn.textContent = `Learn More`;
        btn.style.backgroundColor = '#640d14';

        //Here img and caption are appended to the figure element
        figure.appendChild(photo);



        //Every element is appended to the Section (Card)
        place.appendChild(name);
        place.appendChild(figure);
        place.appendChild(location);
        place.appendChild(description);
        place.appendChild(btn);

        document.querySelector("#places").appendChild(place);

    })

});


//message about the visits to the page

const visitMsg = document.getElementById("visitMsg");
const lastVisit = localStorage.getItem("lastVisit");
const currentDate = Date.now();
const msToDays = 86400000; //1,000*60*60*24 (thousand miliseconds * sixty seconds * sixty minutes * 24 hrs )

if (!lastVisit) {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / msToDays);
    if (daysSinceLastVisit < 1) {
        visitMsg.textContent = "Back so soon! Awesome!";
    } else {
        visitMsg.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
    }
}
localStorage.setItem("lastVisit", currentDate);

























