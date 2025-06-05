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
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('organization-name'));
console.log(myInfo.get('timestamp'));*/
const timestamp = myInfo.get('timestamp');
const formatedDate = new Date(timestamp).toLocaleDateString('en-US');

document.querySelector('#results').innerHTML = `
<p>Application for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your email is: ${myInfo.get('email')}</p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>Organization Name: ${myInfo.get('organization-name')}</p>
<p>Date: ${formatedDate}</p>`



