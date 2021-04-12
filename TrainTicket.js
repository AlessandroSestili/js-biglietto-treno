var km = parseInt(prompt("Quanti kilometri devi percorrere?"));
var yearsOld = parseInt(prompt("Quanti anni hai?"));
var prezzoAlKm = 0.21;
var prezzoBiglietto = (km * prezzoAlKm);


if (yearsOld < 18) {
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.20) ).toFixed(2) 
} 

if (yearsOld >= 65) {
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.40) ).toFixed(2) 
}

console.log(km , "kilometri");
console.log(yearsOld , "anni");
console.log(prezzoBiglietto , "questo è il costo del tuo biglietto");

if (Number.isNaN(km) || Number.isNaN(yearsOld)); {
    alert("Dati inesatti: inserisci dei numeri.")
}

// innesto HTML in #js-container
document.getElementById("js-container").innerHTML = "Il prezzo del tuo biglietto è:" + " " + prezzoBiglietto + " " + "$";


