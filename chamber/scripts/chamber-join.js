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

//This section is for giving the vale to the timestamp hidden
function assignTimestamp() {
    const timestamp = new Date().toISOString(); //date in ISO format
    document.getElementById('timestamp').value = timestamp;

}

// Asigna el timestamp cuando el formulario se envía
document.getElementById('myform').addEventListener('submit', function (event) {
    assignTimestamp();
});


//I created this array to populate the membership madal's info

const memberships = [
    {
        level: 0,
        title: "Non Profit Membership Level",
        description: "This is for a non profit organizations and there is no fee",
        cost: "with out cost",
        benefits: `In order to support non profit organization, this membership has the benbefit of 
        offers discount in courses and events in the chamber commerce.`
    },

    {
        level: 1,
        title: "Bronze Membership Level",
        description: "This Membership has core benefits and it is recommended to small business",
        cost: "$20.00 per month",
        benefits: `In order to support small organizations, this membership has the benbefit of
        offers discount in events in the chamber commerce besides courses and special training to your company employees.`
    },

    {
        level: 2,
        title: "Silver Membership Level",
        description: "This Membership has good benefits and it is recommended to small and medium organizations",
        cost: "$35.00 per month",
        benefits: `In order to support small and medium organizations, this membership has the benbefit of
        offers discount in events in the chamber commerce, courses and special training to your company employees besides special events
        invitations and advertising in our website spotlighst.`
    },

    {
        level: 3,
        title: "Gold Membership Level",
        description: "This Membership has great benefits and it is recommended to big and medium organizations",
        cost: "$35.00 per month",
        benefits: `In order to support big and medium organizations, this membership has the benbefit of
        offers discount in events in the chamber commerce, courses and special training to your company employees besides special events
        invitations and advertising in our website spotlighst. Also with our Gold Membership you will have a suscription to our monthly Chamber
        of Commerce Magazine and Access to exclusive digital content.`
    },

];


//The timestamp will be assigned when the form has been sent

const npButton = document.getElementById('np-membership');
const bronzeButton = document.getElementById('bronze-membership');
const silverButton = document.getElementById('silver-membership');
const goldButton = document.getElementById('gold-membership');

//0 is for Non Profit Membership
npButton.addEventListener('click', () => {
    showInfo(memberships.filter(membership => membership.level === 0));

});

//1 is for Bronze Membership
bronzeButton.addEventListener('click', () => {
    showInfo(memberships.filter(membership => membership.level === 1));

});

//2 is for Silver Membership
silverButton.addEventListener('click', () => {
    showInfo(memberships.filter(membership => membership.level === 2));

});

//3 is for Gold Membership
goldButton.addEventListener('click', () => {
    showInfo(memberships.filter(membership => membership.level === 3));

});



//This funtion will create a dialog dynamically with the elements needed to display the information about every membership level
function showInfo(filterMembership) {

    const existingDialog = document.getElementById('myDialog');
    if (existingDialog) {
        existingDialog.remove();
    }

    filterMembership.forEach(membership => {

        const dialog = document.createElement('dialog');
        const title = document.createElement('h2');
        const closebtn = document.createElement('button');
        const description = document.createElement('p');
        const cost = document.createElement('p');
        const benefits = document.createElement('p');


        dialog.setAttribute('id', 'myDialog');
        title.setAttribute('id', 'myTitle');
        closebtn.setAttribute('aria-label', 'Cerrar modal');

        //here are assigned the values to every field in the modal
        title.innerHTML = membership.title;
        description.innerHTML = `<span class="bold">Description:</span>${membership.description}`;
        cost.innerHTML = `<span class="bold">Cost:</span> ${membership.cost}`;
        benefits.innerHTML = `<span class="bold">Benefits:</span> ${membership.benefits}`;


        closebtn.innerHTML = 'X';



        dialog.appendChild(title);
        dialog.appendChild(closebtn);
        dialog.appendChild(description);
        dialog.appendChild(cost);
        dialog.appendChild(benefits);

        document.body.appendChild(dialog);
        dialog.showModal();
        closebtn.addEventListener('click', () => dialog.close());

    });


}













