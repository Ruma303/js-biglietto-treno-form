/* 
Chiedere all'utente:
-numero di km da percorrere
-età

calcolare prezzo del biglietto seguendo queste regole:
-il prezzo del biglietto è 0.21€/Km
-sconto 20% minorenni
.sconto 40% over 65

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input (per i chilometri e per l'età) e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console o su un semplice div in pagina.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/

const name = document.getElementById('name');
const distance = document.getElementById('distance');
const age = document.querySelector('age');
const submit = document.getElementById('submit');
const output = document.getElementById('final_price_output');

submit.addEventListener("click", function () {
    const distance = parseFloat(distance.value);
    const ticketPrice = parseFloat(distance * 0.21);
    const age = age.value;
    let discount = 0; 

    // calcolo del prezzo
    if (age === 'underage') {
        discount = 20;
    } else if (age === 'over65') {
        discount = 40;
    }

    if (name.value === '' || distance.value === '') {
        output.innerHTML = ('Informazioni mancanti!');
    } else {
        let finalPrice = ticketPrice - ticketPrice * discount / 100;
        finalPrice = parseFloat(ticketPrice.toFixed(2));
        output.innerHTML = ('Il prezzo del tuo biglietto è'+ finalPrice + '€')
    }
});
   
reset.addEventListener('click', function(){
    document.location.reload();
})  
        

// Funzione random carrozza



// Funzione random codice cp
