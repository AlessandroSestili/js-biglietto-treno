var km = parseInt(prompt("Quanti kilometri devi percorrere?"));
var yearsOld = parseInt(prompt("Quanti anni hai?"));


console.log(km , "kilometri");
console.log(yearsOld , "anni");

var prezzoBiglietto = (km * 0.21 + "$");
console.log(prezzoBiglietto , "questo è il costo del tuo biglietto")

if (yearsOld < 18) {
    prezzoBiglietto = (km * 0.21+(10) + "$") 
} 

if (yearsOld >= 65) {
    prezzoBiglietto = (km * 0.21+(100) + "$") 
} 



