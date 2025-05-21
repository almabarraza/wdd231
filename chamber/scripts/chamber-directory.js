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

const url = ('data/members.json');
const cards = document.querySelector('#cards');

async function getMemberData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error getting data', error);
    }


}

getMemberData(url);

const displayMembers = ((members) => {

    document.querySelector("#cards").innerHTML = "";
    members.forEach(member => {

        /*Here the elements are created*/
        let card = document.createElement("section");
        let businessLogo = document.createElement("img");
        let address = document.createElement("p");
        let idMember = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        businessLogo.setAttribute("src", member.img);
        businessLogo.setAttribute("alt", `logo of ${member.name}`);
        businessLogo.setAttribute("loading", "lazy");
        businessLogo.setAttribute("width", "200");
        businessLogo.setAttribute("height", "200");
        address.innerHTML = `<span class="labelimg"> ${member.address}</span>`;
        idMember.innerHTML = `<span class="labelimg">ID ${member.ID}</span>`;
        phone.innerHTML = `<span class="labelimg"> ${member.phone}</span>`;
        website.href = (member.website);
        website.innerHTML = `<span class="style-link"> ${member.website}</span>`;
        website.title = `Click here to visit the website`;
        website.target = '_blank';


        card.appendChild(businessLogo);
        card.appendChild(address);
        card.appendChild(idMember);
        card.appendChild(phone);
        card.appendChild(website);

        document.querySelector("#cards").appendChild(card);

    });

});

/*I did not create the Grid/List toggle because the example link in the activity is not working.
/*So I could not follow the example*/



   






