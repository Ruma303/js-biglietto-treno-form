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
const age = document.querySelector('age')

const user_output = document.getElementById('user_output')

// Calcolo del prezzo
// if (age < 18) {
//      let underagePrice = parseInt(price * 0.80).toFixed(2);
//      console.log(underagePrice,"€");
//  }
// else if (age > 65) {
//      let newPrice = parseInt(price * 0.60).toFixed(2);
//     console.log(newPrice,"€");
// } else {
//     console.log(price + "€").toFixed(2);
// }

