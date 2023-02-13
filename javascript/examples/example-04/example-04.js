let x = 1;

//  function switch
switch(x) {
    case 1:
        document.getElementById('p1').innerHTML = "x a pour valeur 1";
        break;
    case 5:
        document.getElementById('p2').innerHTML = "x a pour valeur 5";
        break;
    case 10:
        document.getElementById('p3').innerHTML = "x a pour valeur 5";
        break;
    default:
        document.getElementById('p1').innerHTML = "La valeur de x n'est ni 1, ni 5, ni 10";
        break;
}

// let nom = "Nabil"
// nom += " Mokhliss" // "Nabil Mokhliss"

// nomRep = nom.replace("Nabil", "Hello");
// alert(nomRep);

// boucle for (parcourir du début vers la fin)
for(let i=0; i<10; i++) {
    document.getElementById('boucleFor').innerHTML += "Boucle For N° "+ (i+1) +"<br>"
}

// boucle for (parcourir de la fin vers le début)
for(let i = 10; i > 0; i--) {
    let myHtml = document.getElementById('boucleFor2');
    myHtml.innerHTML += "Boucle For N° "+ (i) +"<br>"
}

// boucle while (parcourir du début vers la fin)
let j = 0;
while(j < 10) {
    document.getElementById('boucleWhile').innerHTML += "Boucle While N° "+ (j+1) +"<br/>";
    j = j+1;
}

// boucle while (parcourir de la fin vers le début)
let jj = 10;
while(jj > 0) {
    document.getElementById('boucleWhile2').innerHTML += "Boucle While N° "+ (jj) +"<br/>";
    jj--;
}

// boucle do while (parcourir du début vers la fin)
let z = 0;
do {
    document.getElementById('boucleDoWhile').innerHTML += "Boucle Do While N° "+ (z+1) +"<br/>";
    z++;
} while(z < 10)

// boucle do while (parcourir de la fin vers le début)
let zz = 10;
do {
    document.getElementById('boucleDoWhile2').innerHTML += "Boucle Do While N° "+ (zz) +"<br/>";
    zz--;
} while(zz > 0)

// fonction multiplication
function multiplication(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number") {
        return a +" * "+ b + " = " + (a * b);
    } else {
        return "Veuillez verifier si a et b sont des nombres"
    }
}
document.getElementById('multiplicationId').innerHTML = multiplication(8, 11);

// fonction division
function division(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number") {
        if(b == 0) {
            return "La division par 0 est impossible !";
        } else {
            return a +" / "+ b + " = " + (a / b);
        }
    } else {
        return "Veuillez verifier si a et b sont des nombres !"
    }
}
document.getElementById('divisionId').innerHTML = division("15", 0);

// fonction somme
function somme(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number") {
        return a +" + "+ b + " = " + (a + b);
    } else {
        return "Veuillez verifier si a et b sont des nombres"
    }
}
document.getElementById('sommeId').innerHTML = somme(89, 11);

// fonction soustraction
function soustraction(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number") {
        return a +" - "+ b + " = " + (a - b);
    } else {
        return "Veuillez verifier si a et b sont des nombres"
    }
}
document.getElementById('soustractionId').innerHTML = soustraction(18, 11);

/**
 * function aleatoire
 * random : genere un nombre aleatoire entre 0 et 1
 * 
 * @returns 
 */
function aleatoire() {
    return Math.random() * 1000;
}
document.getElementById('aleatoireId').innerHTML = aleatoire();

/**
 * returner la valeur entière d'un nombre
 */
function returnerValeurEntiere(x) {
    return Math.floor(x);
}
document.getElementById('floorId').innerHTML = returnerValeurEntiere(15.9185);

/**
 * function bonjour : 
 * Exécution d'une fonction anonyme par utilisation d'une variable
 */
let bonjour = function(nom) {
    return "Bonjour "+ nom + "!"
}
document.getElementById('bonjourId').innerHTML = bonjour("Mohcine LABZAZE");

/**
 * Auto-invoquée une fonction anonyme
 */
(function() {
    // alert("Ma fonction Auto-invoquée !");
})();

/**
 * Fonction récursive
 */
function decompte(val) {
    if(val > 0) {
        document.getElementById('decompteId').innerHTML += val + '<br>';
        return decompte(val - 1);
    } else {
        return val;
    }
};
decompte(10);

/**
 * Gestionnaire d'évènement
 */
let button1 = document.getElementById('btn1')
button1.addEventListener('click', function() {
    alert("Bonjour les  amis !")
})
// console.log(button1);

/**
 * Min coins
 * mon tableau de pieces est ordonné dans l'ordre croissant
 */
function minsCoins(amount) {
    let coins = [1, 2, 5, 10, 20];
    let tab = [];

    for(let i = coins.length - 1; i >= 0; i--) {
        let val = Math.floor(amount / coins[i]);
        tab.unshift(val);
        amount = amount % coins[i];
    }

    return tab;
}

document.getElementById('minsCoinsId').innerHTML = "["+ minsCoins(138) +"]";

console.log(minsCoins(138));







// function minsCoins(amount) {
//     let coins = [1, 2, 5, 10, 20];
//     let tab = [];

//     for(let i = coins.length - 1; i>=0; i--) {
//         let val = Math.floor(amount/coins[i]);
//         amount = amount % coins[i];
//         tab.unshift(val);
//     }

//     return tab;
// }

// console.log(minsCoins(80))