//input
const inputName = document.getElementById('name');
const inputDistance = document.getElementById('distance');
const inputAge = document.querySelector('#age');
//bottoni
const submit = document.getElementById('submit');
const reset= document.getElementById('reset');
//output
const eleTicket = document.querySelector('.ticket');
const outputOffering = document.querySelector('#offering_output');
const outputName = document.getElementById('user'); 
const outputPrice = document.getElementById('price_output');
const outputDistance = document.getElementById('distance_output');


		

// FUORI IL CLICK

submit.addEventListener('focusin', function (e) {
	e.preventDefault();
	//Controlli
	if (inputDistance.value != '' && inputName.value != '') {
	const distance = parseFloat(inputDistance.value);
	const age = inputAge.value;
	//costanti per calcoli
	const pricePerKm = 0.21;
	const basePrice = pricePerKm * distance;
		
		// Sceltà età
		let discountRate = 0;
		switch (age) {
			case 'underage':
				discountRate = 20;
				outputOffering.innerHTML = `Sconto del 20%`;
			break;
			
			case 'over65':
				discountRate = 40;
				outputOffering.innerHTML = `Sconto del 40%`;
				break;

			default :
			outputOffering.innerHTML = `Biglietto standard`;
			}
			
		//Calcolo sconto
		let totalPrice = basePrice - basePrice * discountRate / 100;
		console.log('Il prezzo del biglietto è: ' + totalPrice + ' €');

		//Stampo su HTML i valori
		outputName.innerHTML = inputName.value;
		outputPrice.innerHTML = `${totalPrice.toFixed(2)}€`;
		outputDistance.innerHTML = `${inputDistance.value} Km`;
		
		// Funzione random carrozza
		const carriage = document.querySelector('#random_carriage');
		carriage.innerHTML = Math.floor(Math.random() * (20 - 1) + 1);
		// Funzione random codice cp
		let randomCP = document.querySelector('#random_CP');
		randomCP.innerHTML = Math.floor(Math.random()*99999);

		//togliere la classe hidden
		eleTicket.classList.remove('hidden');
	} else {
		console.log('Valori mancanti! Inserire i valori!')
	}
});


// RESET
reset.addEventListener('click', function (){
	outputName.innerHTML = 'Campo obbligatorio!';
    outputPrice.innerHTML = 'Campo obbligatorio!';
    userOutput.classList.add('hidden');
})



