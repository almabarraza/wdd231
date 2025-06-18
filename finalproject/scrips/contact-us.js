//import from reasons.js the array reason to fill the select dinamically
import { reasons } from './reasons.js';

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

/* For the Contact Us section*/
/*This array fill the select option dynamically*/
/*


/* This funtion creates the option elemet in the DOM**/
function createOptions(reasons) {
    const select = document.getElementById("reasonName");
    reasons.forEach(reason => {
        const option = document.createElement("option");
        option.value = reason.id;
        option.textContent = reason.name;
        option.classList.add('small');
        select.appendChild(option);

    });
}

createOptions(reasons);















