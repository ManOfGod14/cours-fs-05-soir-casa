let prenom = "Maliki";
let age = 31;
let Age = "31";

document.getElementById("p1").innerHTML = "Le type de la variable prenom est : " + typeof prenom;
document.getElementById("p2").innerHTML = "Le type de la variable age est : " + typeof age;
document.getElementById("p3").innerHTML = "Le type de la variable Age est : " + typeof Age;


let x = 5;
let y = 2;
let resultatModuloXY = x % y;
let resultatPuissanceXY = x ** y;

document.getElementById('idModulo').innerHTML = "Resultat modulo x%y = " +  resultatModuloXY;
document.getElementById('idPuissance').innerHTML = "Resultat puissance x**y = " +  resultatPuissanceXY;