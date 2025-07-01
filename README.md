# js-biglietto-treno

### Esercizio

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Realizzate prima un file README.md in cui mettere il testo dell'esercizio e scomponente il problema in sotto problemi.
Numero minimo di push: 5

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

### Cosa ho imparato

Ho imparato a usare prompt() per chiedere dei dati all’utente e ho scoperto che il valore che ricevo è sempre una stringa.

Per lavorare con i numeri, ho imparato a usare parseInt() per trasformare queste stringhe in numeri interi, così da poter fare i calcoli.

Ho creato delle costanti per i valori fissi come il prezzo al chilometro e gli sconti, e una variabile per salvare il prezzo finale del viaggio.

Con le strutture if, else if ed else sono riuscito a controllare l’età del passeggero e applicare uno sconto se era minorenne o pensionato.

Infine, ho usato .toFixed(2) per formattare il risultato finale e mostrare sempre due decimali, anche quando il numero è tondo.

### Consegna

01/07/2025
