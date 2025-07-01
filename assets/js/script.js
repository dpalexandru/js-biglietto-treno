// Inizializzo le variabili input da utente 
const km = parseInt(prompt("Quanti chilometri deve percorrere il passeggero?"));
const eta = parseInt(prompt("Quanti anni ha il passeggero?"));


//Inizializzo costanti calcolo viaggio
const prezzoAlKm = 0.21;
const scontoMinorenni = 0.20;
const scontoPensionati = 0.40;
let prezzoViaggio = 0;

//calcolo prezzo viaggio 

if (eta < 18) {
  prezzoViaggio = km * prezzoAlKm
  prezzoViaggio = prezzoViaggio - (prezzoViaggio * scontoMinorenni)
} else if (eta >= 65) {
  prezzoViaggio = km * prezzoAlKm
  prezzoViaggio = prezzoViaggio - (prezzoViaggio * scontoPensionati)
}
else{
  prezzoViaggio = km * prezzoAlKm
}

//stambpo il prezzo del biglietto 
console.log("=============================")
console.log (`Il tuo biglietto costa ${prezzoViaggio.toFixed(2)}€`)
console.log("=============================")
