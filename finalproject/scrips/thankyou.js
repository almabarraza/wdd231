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

//This code will display the information that was sent in the join-form

const myInfo = new URLSearchParams(window.location.search);
/*
console.log(myInfo.get('reasonName'));
console.log(myInfo.get('fname'));
console.log(myInfo.get('lname'));
console.log(myInfo.get('email'));
console.log(myInfo.get('message'));
console.log(reasons);*/

const rName = myInfo.get('reasonName');
const reason = reasons.find(reason => reason.id === rName);
//console.log(reason);




document.querySelector('#results').innerHTML = `
<h3> Hi ${myInfo.get('fname')} ${myInfo.get('lname')}!</h3>
<p>Your message reason is: <span class="bold">${reason.name}</span></p>
<p>and your question or inquiri is this: <span class="bold">${myInfo.get('message')}</span></p>
<p>We will respond you soon to your email: ${myInfo.get('email')}</p>
<p>Thank you for sending us your message. Have a good day!</p>`


