var km = parseInt(prompt("Quanti kilometri devi percorrere?"));
var yearsOld = parseInt(prompt("Quanti anni hai?"));
var prezzoBiglietto = (km * 0.21);


if (yearsOld < 18) {
    prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto*20)/ 100) ) 
} 

if (yearsOld >= 65) {
    prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto*40)/100) ) 
}

console.log(km , "kilometri");
console.log(yearsOld , "anni");
console.log(prezzoBiglietto , "questo è il costo del tuo biglietto")

if (Number.isNaN(km) || Number.isNaN(yearsOld)) {
    alert("Sei uno stron**, metti dei ca**o di numeri!")
}

document.getElementById("js-container").innerHTML = "Il prezzo del tuo biglietto è:" + " " + prezzoBiglietto + "$"
