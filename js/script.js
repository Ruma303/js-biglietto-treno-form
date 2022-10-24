const inputName = document.getElementById('name');
const inputDistance = document.getElementById('distance');
const inputAge = document.querySelector('#age');
const submit = document.getElementById('submit');
const pricePerKm = 0.21;


// DENTRO IL CLICK PREMENDO IL BOTTONE GENERA

submit.addEventListener('click', function (){

const name = inputName.value;
const distance = parseFloat(inputDistance.value);
const age = inputAge.value;
const basePrice = 0;
const standardPrice = pricePerKm * distance;
let discount;

console.log(name);
console.log(distance);
console.log(age);

// CALCOLO DEL PREZZO
switch (age) {
    case 'underage':discount = 20;
    break;

    case 'adult': discount = 0;
    break;

    case 'over65': discount = 40;
    break;
}
let finalPrice = standardPrice - standardPrice * discount / 100;
finalPrice = Math.round(finalPrice * 100) / 100;
console.log('Il prezzo del biglietto è: ' + finalPrice + '€');

// PRINTING INSERENDO NELL'HTML I RISULTATI
const outputName = document.getElementById('user');
const outputPrice = document.getElementById('final_price_output');
const outputDistance = document.getElementById('distance_output');
outputName.innerHTML = inputName.value;
outputPrice.innerHTML = finalPrice + '€';
outputDistance.innerHTML = inputDistance.value + 'Km';
})
// FUORI IL CLICK





/*// Funzione random carrozza
const outputCarriage = document.querySelector('#random_carriage');
randomCarriage = Math.floor(Math.random() * (20 - 1) + 1);
// document.write(document.querySelector('#random_carriage').innerHTML = randomCarriage); 

// Funzione random codice cp
let randomCP = Math.floor(Math.random()*99999);
document.write(document.querySelector('#random_CP').innerHTML = randomCP);*/

