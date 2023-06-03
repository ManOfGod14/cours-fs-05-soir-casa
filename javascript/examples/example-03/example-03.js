let nom = "TCHEROU"
let prenom = "Maliki"
let nomComplet = nom+" "+prenom
// alert(nomComplet)

let var1 = 12;
let var2 = "12";
let var3 = 15;

//  je veux vérifier si var1 et var2 sont égaux
let var4;
var4 = var1 == var2; // result : true

// je veux vérifier si var1 et var2 sont égaux et de même types
let var5 = var1 === var2 // result : false

// je veux vérifier si var1 et var2 sont differents
let var6 = var1 != var2; // result : true

// je veux vérifier si var1 et var2 sont differents et de même types
let var7 = var1 !== var2; // result : false

// je veux vérifier si var1 est inférieur à var2
let var8 = var1 < var2; // false

// je veux vérifier si var1 est inférieur ou égale à var2 
let var9 = var1 <= var2 // true

// je veux vérifier si var1 est supérieur à var2
let var10 = var1 > var2; // false

// je veux vérifier si var1 est supérieur ou égale à var2 
let var11 = var1 >= var2 // true

// test le resultat
// alert(var10)

// Exo
let premier = 20
let deuxieme = 11
// let difference;

// l'opérateur ternaire
// alert(premier > deuxieme ? premier - deuxieme : '')
// premier > deuxieme ? difference = premier - deuxieme : ''
// alert(difference);

// structure conditionnelle
if(premier > deuxieme) {
    difference = premier - deuxieme
    alert("resultat de la différence 1 et 2 : "+difference)
} else {
    difference = deuxieme - premier
    alert("resultat de la différence 2 et 1 : "+difference)
}

if(difference > 0) {
    document.getElementById('rahma').innerHTML = "Opérateurs conditionnelles"
}

