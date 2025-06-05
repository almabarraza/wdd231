//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
//console.log(myInfo);

/*
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location')); These bunch of code were made for practice*/

document.querySelector('#results').innerHTML = `
<p>Appoinment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the  ${myInfo.get('location')} Temple </p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>Your email is: ${myInfo.get('email')}</p>`


/*This code is for send the hidden timestamp in a form*/

/*

// Función para establecer el valor del campo oculto con el timestamp actual
function asignarTimestamp() {
    var timestamp = new Date().toISOString(); // Obtiene la fecha y hora actual en formato ISO 8601
    document.getElementById('timestamp').value = timestamp; // Asigna el valor al campo oculto
}

// Asigna el timestamp cuando el formulario se envía
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    asignarTimestamp();
});*/
