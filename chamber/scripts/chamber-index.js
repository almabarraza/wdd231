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


//Weather section


const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const hightTemp = document.querySelector('#hight');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const lat = 24.81
const lon = - 107.39


const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b1215313a134f2ab775d407287f05022`;


async function apiFetch() {
    try {

        const response = await fetch(urlweather);
        if (response.ok) {
            const data = await response.json();

            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);

    }

}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `<span class="bold">${data.main.temp}&deg;C</span>`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    description.innerHTML = data.weather[0].description;
    hightTemp.textContent = `Hight: ${data.main.temp_max}∘`;
    lowTemp.textContent = `Low: ${data.main.temp_min}∘`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    let hour = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = formatHour(hour);
    hour = new Date(data.sys.sunset * 1000);
    sunset.textContent = formatHour(hour);


}
//This funtion format the sys hour to a readable hour
function formatHour(hour) {
    const formattedhour = hour.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true // Establecer en true si prefieres el formato de 12 horas
    }).toLowerCase();
    return formattedhour;
}

//Weather Forecast
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b1215313a134f2ab775d407287f05022`;


// Fetch and display weather forecast
async function fetchWeatherForecast() {
    try {

        const response = await fetch(forecastUrl);
        const data = await response.json();
        // console.log(forecastUrl);
        let pastDay = "";
        let dtList = data.list;
        let date;
        let day;


        for (let i = 0; i < 3; i++) {
            let entry;
            for (let index = 0; index < dtList.length; index++) {
                let element = dtList[index];
                date = new Date(element.dt * 1000);
                day = date.toLocaleDateString('en-US', { weekday: 'long' });

                if (day !== pastDay) {
                    entry = element;
                    pastDay = day;
                    dtList = dtList.slice(index);
                    break;
                }

            };

            if (i === 0) {
                document.getElementById('day1').innerHTML = `Today: <span class="bold">${entry.main.temp_max}&deg;C</span>`;
            }
            if (i === 1) {
                document.getElementById('day2').innerHTML = `${day}: <span class="bold"> ${entry.main.temp_max}&deg;C</span>`;
            }
            if (i === 2) {
                document.getElementById('day3').innerHTML = `${day}: <span  class="bold"> ${entry.main.temp_max}&deg;C</span>`;
            }


        }

    } catch (error) {
        console.error('Error fetching forecast:', error);
        document.getElementById('day1').textContent = 'Unable to load forecast';
    }
}

fetchWeatherForecast();



//Spotlights Section
//Chamber Commerce Members Directoy added dynamically from an a JSON file

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


//Members object filtered funtion
function filteredMembers(members) {
    const filMembers = members.filter(member => member.membership === 2 || member.membership === 3);
    const randomMembers = mixupMembers(filMembers);
    return randomMembers;

}


//This funtion select 3 random members from the list
function mixupMembers(members) {
    const mixmemb = members.sort(() => Math.random() - 0.5);
    const selectedMembers = mixmemb.slice(0, 3);
    return selectedMembers;
}


//this funtion create the cards of every member
const displayMembers = ((members) => {

    document.querySelector("#cards").innerHTML = "";
    const filMembers = filteredMembers(members)
    filMembers.forEach(member => {

        /*Here the elements are created*/
        let card = document.createElement("section");
        let name = document.createElement("p");
        let businessLogo = document.createElement("img");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("p");


        name.textContent = member.name;
        businessLogo.setAttribute("src", member.img);
        businessLogo.setAttribute("alt", `logo of ${member.name}`);
        businessLogo.setAttribute("loading", "lazy");
        businessLogo.setAttribute("width", "100");
        businessLogo.setAttribute("height", "100");
        phone.innerHTML = `<span class="labelimg-spotlight"> ${member.phone}</span>`;
        address.innerHTML = `<span class="labelimg-spotligt"> ${member.address}</span>`;
        website.href = (member.website);
        website.innerHTML = `<span class="style-link-spotlight"> ${member.website}</span>`;
        website.title = `Click here to visit the website`;
        website.target = '_blank';

        if (member.membership === 2) {
            membership.textContent = `Member Silver`;
        }
        if (member.membership === 3) {
            membership.textContent = `Member Gold`;
        }

        card.classList.add('style-spotlights');
        card.appendChild(name);
        card.appendChild(businessLogo);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);



        document.querySelector("#cards").appendChild(card);

    });

});

