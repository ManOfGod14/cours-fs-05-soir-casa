/**
 * Gestion du délai d'éxecution en JS 
 * setTimeout() et setInterval()
 * clearTimeout() et clearInterval()
 */

// get setTimeout element
let btnSetTimeout = document.querySelector("#btnSetTimeout");

// get clearTimeout element
let btnClearTimeout = document.querySelector("#btnClearTimeout");

let timeoutVal;

btnSetTimeout.addEventListener('click', fnSetTimeout);
function fnSetTimeout() {
    // alert("Message d'alert  après 5 secondes !");
    timeoutVal = setTimeout(
        alert,
        3000, 
        "Message d'alert  après 3 secondes !"
    );
    console.log(timeoutVal);
}

btnClearTimeout.addEventListener('click', fnClearTimeout);
function fnClearTimeout() {
    clearTimeout(timeoutVal);
    console.log(timeoutVal);
}

// setInterval
let btnSetInterval = document.querySelector("#btnSetInterval");

// clearInterval
let btnClearInterval = document.querySelector("#btnClearInterval");

let dateFormat = document.getElementById('dateFormat');
let dateId = document.getElementById('dateId');
let timeId = document.getElementById('timeId');

btnSetInterval.addEventListener('click', fnSetInterval);
function fnSetInterval() {
    setInterval(function() {
        let d = new Date();
        dateFormat.innerHTML = d;
        dateId.innerHTML = d.toLocaleDateString();
        timeId.innerHTML = d.toLocaleTimeString();
    }, 1000);
}


/**
 * Gestion des erreurs (Try ... Catch)
 */

// utilisation de try catch
let btnErrorId = document.querySelector('#btnErrorId');
btnErrorId.addEventListener('click', function () {
    try {
        val;
        alert("Il n'y a pas d'erreur !");
    } catch (err) {
        alert(
            "Il y a une erreur !" + "\n" +
            "\nNom de l'erreur : "+ err.name + "\n" +
            "\nMessage d'erreur : "+ err.message + "\n" +
            "\nEmplacement de l'erreur : "+ err.stack
        );
    }
});

// utilisation du throw
// faire la division de deux nombre
let btnDivisionId = document.querySelector("#btnDivisionId");
btnDivisionId.addEventListener('click', division);
function division() {
    try {
        let x = prompt("Entrez un 1er nombre (Numérateur)");
        let y = prompt("Entrez un 2ème nombre (Dénominateur)");

        if(isNaN(x) || isNaN(y) || x == '' || y == '') {
            throw new Error("Merci de saisir deux nombres !");
        } else if(y == 0) {
            throw new Error("Division par 0 impossible !");
        } else {
            alert("Division de "+ x +"/"+ y +" = "+ x/y);
        }
    } catch (error) {
        alert(error.message);
    } finally {
        alert("Message qui s'affiche dans tous les cas !");
    }
}

/**
 * mode strict en js
 */

// cas d'utilisation de JS classique
function demo() {
    val = 0; // la variable "val" est vue comment étant une variable global
}
demo();

// utilisation du mode strict
// function demoUseStrict1() {
//     "use strict";
//     val1 = 0; // une erreur nous sera généré car on a omit les mots clé let ou var
// }
// demoUseStrict1();

function demoUseStrict2() {
    "use strict";
    let val2 = 0; // tous ce passera bien !
}
demoUseStrict2();

/**
 * L'asynchrone en JS
 */
// cas d'exemple de  synchrone
// let x = 0;
// while(x <= 1000000000) {
//     x++;
// }
// alert("Fin de ma boucle while !");

// cas d'exemple type de l'asynchrone
// setTimeout(alert, 5000, "Mon message en 5s !");
// alert("Aler n'attend pas la fin de setTimeout avant de s'afficher !");

// les promesses en JS
const promesse = new Promise((resolve, reject) => {
    // tâche asynchrone à réaliser
    // resolve si la promesse est résolue
    // reject si la promesse est rejetée
});

// utilisation des mots clés (async et await) pour créer des promesses
async function salutation() {
    return "Bonjour tout le monde !";
}
// salutation().then(alert);

async function fnTest() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => res("C'est résolue !"), 10000);
    });

    let result = await promise; // j'attend que la promesse soit resolue ou rejetée
    alert(result);
}
// fnTest();

/**
 * Stockage de données dans le navigateur
 */

// cookie en JS : c'est un fichier contenant un donnée
// alert(document.cookie);
let expire = new Date(Date.now() + 86400000).toUTCString();
console.log(expire);
document.cookie = "user=Maliki TCHEROU; domain=127.0.0.1; path=/; expires="+expire+"; secure; samesite=strict; ";
// document.cookie = "user=Maliki TCHEROU; domain=127.0.0.1; path=/; max-age=86400000";

// API web storage : localstorage et sessionstorage en JS
let htmlElt = document.querySelector('html');
let bgColor = document.querySelector("#bgTheme");

if(localStorage.getItem('bgtheme')) {
    updateBgTheme();
} else {
    setBgTheme();
}

function updateBgTheme() {
    let bg = localStorage.getItem('bgtheme');
    htmlElt.style.backgroundColor = '#'+bg;
    bgColor.value = bg;
}

function setBgTheme() {
    localStorage.setItem('bgtheme', bgColor.value);
    updateBgTheme();
}

bgColor.addEventListener('change', setBgTheme);


