// exemple de format JSON
let user = {
    "firstname": "Maliki",
    "lastname": "TCHEROU",
    "address": {
        "street": "31 rue tarik ibn ziad",
        "city": "Casablanca",
        "postal_code": 20000,
        "country": "Maroc"
    },
    "mails": [
        "mailiki.tcherou1@gmail.com",
        "coach.maliki@3wa.io"
    ]
};

let userIdElt = document.querySelector('#userId');
userIdElt.innerHTML = JSON.stringify(user);

/**
 * AJAX
 */

// création de l'objet XMLHttpRequest
let xhr = new XMLHttpRequest();

// initialisation de la requête
xhr.open("GET", "http://127.0.0.1:5500/cours/javascript/examples/example-12-ajax/index2.html") // url : c'est le lien où la demande sera traitée
// xhr.open("GET", "https://www.google.com/");

// Réponse au format JSON
// xhr.reponseType = "json";
// xhr.reponseType = "text";
xhr.reponseType = "document";

// envoie de la requête
xhr.send();

// gestionnaire d'évènements
let pId1Elt = document.querySelector('#pId1');
let pId2Elt = document.querySelector('#pId2');

// lorque la réponse est reçue
xhr.onload = () => {
    if(xhr.status != 200) {
        pId1Elt.innerHTML = "Erreur " + xhr.status + " : " + xhr.statusText;
        pId1Elt.style.color = "red";
    } else {
        pId1Elt.innerHTML = xhr.response.length + " octets téléchargées <br/>" + xhr.response;
        pId1Elt.style.color = "green";
        console.log(xhr.response);
    }
}

// lorsque la requête n'a pas pu aboutir
xhr.onerror = () => {
    alert("La requête a échouée !");
}

// pendant le chargement de la requête
xhr.onprogress = (evt) => {
    if(evt.lengthComputable) {
        pId2Elt.innerHTML = evt.loaded + " octets reçus sur un total de : " + evt.total;
    }
}

/**
 * Utilisation de l'API Fetch
 */
let pId3Elt = document.querySelector('#pId3');
let pId4Elt = document.querySelector('#pId4');

// exemple simple format json
fetch("https://www.google.com/")
.then(reponse => reponse.json())
.then(reponse => pId3Elt.innerHTML = JSON.stringify(reponse))
.catch(error => pId3Elt.innerHTML = "Erreur : " + error);

// exemple simple format text
fetch("http://127.0.0.1:5500/cours/javascript/examples/example-12-ajax/index2.html")
.then(reponse => reponse.text())
.then(reponse => pId4Elt.innerHTML = reponse)
.catch(error => pId4Elt.innerHTML = "Erreur : " + error);

// Exemple d'utilisation des options
let promise = fetch(url, {
    method: "GET", // ou POST, PUT, DELETE, ...etc.
    headers: {
        "Content-Type": "text/plain; charset=UTF-8"
    },
    body: undefined, // ou string, FormData, Blod, BufferSource, URLSearchParams
    referrer: "about:client", // ou "", url
    referrerPolicy: "no-referrer-when-downgrade", // ou no-referrer, orgin, same-origin, ...etc.
    mode: "cors",
    credentials: "same-origin", // ou omit, include
    cache: "default", // ou no-store, reload, no-cache, force-cache, only-if-cached
    redirect: "follow", // ou manual ou error
    integrity: "", // ou hash (crypter le contenu)
    keepalive: false, // ou true pour que la requête survive à la page
    signal: undefined // ou AbortController pour annuler la requête 
});


