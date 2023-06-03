console.log("Longueur extérieur de la fenêtre = " + window.outerWidth);
console.log("Hauteur extérieur de la fenêtre = " + window.outerHeight);
console.log("Longueur intérieur de la fenêtre = " + window.innerWidth);
console.log("Hauteur intérieur de la fenêtre = " + window.innerHeight);

/**
 * Quelques propriétés de l'objet window
 */
const p1 = document.getElementById('p1');
p1.innerHTML = 'Taille de la fenêtre (extérieur) = ' + window.outerWidth + 'x' + window.outerHeight;

const p2 = document.getElementById('p2');
p2.innerHTML = 'Taille de la fenêtre (intérieur) = ' + window.innerWidth + 'x' + window.innerHeight;


/**
 * Quelques méthodes de l'objet window
 */
let winSize = "width=500, height=500";

let b1 = document.getElementById('b1');
b1.addEventListener('click', openYoutubeLink);
function openYoutubeLink() {
    return window.open('https://www.youtube.com/', '', winSize);
}

// fontion anonyme
let b1_fonction_anomyme = document.getElementById('b1fa');
b1_fonction_anomyme.addEventListener('click', function() {
    return window.open('https://www.youtube.com/', '', "width=1000, height=500");
});

// fonction flèchée
let b1_fonction_flechee = document.getElementById('b1ff');
b1_fonction_flechee.addEventListener('click', () => {
    return window.open('https://www.youtube.com/', '', "width=auto, height=500");
});

// ouvrir une fenêtre blanche/vide
let blank = document.getElementById('blank');
blank.addEventListener('click', openWindow);
function openWindow() {
    fenetre = window.open('', '', winSize);
}

// resizeBy (redimensionne la fenêtre à taille spécifié)
let b2 = document.getElementById('b2')
b2.addEventListener('click', resizeByWindow);
function resizeByWindow() {
    fenetre.resizeBy(100, 100)
}

// resizeTo (redimensionne la fenêtre en lui donnant une nouvelle taille)
let b3 = document.getElementById('b3')
b3.addEventListener('click', resizeToWindow);
function resizeToWindow() {
    fenetre.resizeTo(560, 350)
}

// moveBy (Déplace la fenêtre 100px à droite et 100px en bas)
let b4 = document.getElementById('b4')
b4.addEventListener('click', moveByWindow);
function moveByWindow() {
    fenetre.moveBy(100, 100)
}

// moveTo (Place la fenêtre contre le bord supérieur gauche)
let b5 = document.getElementById('b5')
b5.addEventListener('click', moveToWindow);
function moveToWindow() {
    fenetre.moveTo(0, 0)
}

// scrollBy (Défile de 200px vers le bas)
let b6 = document.getElementById('b6')
b6.addEventListener('click', scrollByWindow);
function scrollByWindow() {
    window.scrollBy(0, 200);
}

// scrollTo (Remonte en haut de la page)
let b7 = document.getElementById('b7')
b7.addEventListener('click', scrollToWindow);
function scrollToWindow() {
    window.scrollTo(0, 0);
}

// close (ferme la fenêtre)
let b8 = document.getElementById('b8')
b8.addEventListener('click', closeWindow);
function closeWindow() {
    fenetre.close();
}

// alert (affiche un message d'alerte)
let b9 = document.getElementById('b9')
b9.addEventListener('click', alertBialog);
function alertBialog() {
    alert("Bonjour alert !");
}

// prompt (affiche une boite de dialogue avec un champ de saisie)
let b10 = document.getElementById('b10')
b10.addEventListener('click', promptDialog);
function promptDialog() {
    let resultPrompt = prompt("Quel est ton age ?", "20 ans");
    // console.log(resultPrompt);

    if(resultPrompt === null || resultPrompt === "")
        resultPrompt = "Veuillez saisir votre age svp !";

    document.getElementById('resAge').innerHTML = "Mon age est = "+resultPrompt;
}

// confirm (affiche une boite de dialogue et demande à l'utilisateur de confirmer)
let b11 = document.getElementById('b11');
b11.addEventListener('click', confirmDialog);
function confirmDialog()  {
    let resultConfirm = confirm("Veuillez confimer que vous avez plus de 18 ans !");
    
    console.log(resultConfirm);

    let msg = "Vous avez moins de  18 ans (-18) !";
    if(resultConfirm) {
        msg = "Vous avez plus de 18 ans (+18) !";
    }

    document.getElementById('resConf').innerHTML = msg;
}

// b12
let b12 = document.getElementById('b12');
b12.addEventListener('click', confirmPromptDialog);
function confirmPromptDialog() {
    let resultConfirm = confirm("Veuillez confimer que vous avez plus de 18 ans !");
    console.log(resultConfirm);

    let msg = "Vous avez moins de  18 ans (-18) !";

    if(resultConfirm) {
        // msg = "Vous avez plus de 18 ans (+18) !";
        let resultPrompt = prompt("Veuillez saisir votre age !");
        
        if(resultPrompt && resultPrompt >= 18) {
            msg = "Vous êtes autorisé a accéder à ce site !";
            return window.open("https://www.youtube.com/", '', '');
        }
    }

    document.getElementById('resb12').innerHTML = msg;
}

/**
 * L'interface et objet Navigator
 */
console.log(navigator);

let navig = document.getElementById("navig");
navig.innerHTML = 
"Non du navigateur : "+ navigator.appName + "<br/>" +
"Non du code du navigateur : "+ navigator.appCodeName + "<br/>" +
"Version du navigateur : "+ navigator.appVersion + "<br/>" +
"Langue du navigateur : "+ navigator.language + "<br/>" +
"Cookies autorisés : "+ navigator.cookieEnabled + "<br/>" +
"Vérifier si en ligne : "+ navigator.onLine + "<br/>" +
"Platforme utilisé (OS) : "+ navigator.platform + "<br/>";

// Geolocalisation
// console.log(navigator.geolocation);
// console.log(navigator.geolocation.getCurrentPosition);

function coordonnees(pos) {
    let crd = pos.coords;
  
    let lat = crd.latitude;
    let long = crd.longitude;
    
    document.getElementById('lat').innerHTML= 'Latitude : ' + lat + " ("+ lat.toFixed(2) +")";
    document.getElementById('long').innerHTML= 'Longitude : ' + long + " ("+ long.toFixed(2) +")";
}
// navigator.geolocation.getCurrentPosition(coordonnees);

// utilisation d'une fonction flechée
navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    document.getElementById('lat').innerHTML= 'Latitude : ' + lat + " ("+ lat.toFixed(2) +")";
    document.getElementById('long').innerHTML= 'Longitude : ' + long + " ("+ long.toFixed(2) +")";

    // stocker les coorrdonnées dans un tableau
    let tabCoords = [];
    tabCoords.push(lat, long);
    // tabCoords = [lat, long];
    document.getElementById('tabCoords').innerHTML= "Mes coordonnées dans un tableau : " + JSON.stringify(tabCoords);

    // stocker les coorrdonnées dans un objet
    let obj = {latitude:'', longitude:''};
    obj.latitude = lat;
    obj.longitude = long;
    document.getElementById('objCoords').innerHTML= "Mes coordonnées dans un objet : " + JSON.stringify(obj);
});

/**
 * L'interface et l'objet History
 */
console.log(history.length)
document.getElementById('totalPage').innerHTML = "Nombre de total de page visité : "+ history.length;

//On accède aux boutons
let btnBack = document.getElementById('btnBack');
let btnForward = document.getElementById('btnForward');
let btnGo = document.getElementById('btnGo');
let btnGoPrompt = document.getElementById('btnGoPrompt');

btnBack.addEventListener('click', fnBack);
btnForward.addEventListener('click', fnForward);
btnGo.addEventListener('click', fnGo);
btnGoPrompt.addEventListener('click', fnGoPrompt);

function fnBack() {
    history.back();
}

function fnForward(){
    history.forward();
}

function fnGo() {
    history.go(-1);
}

//  exercice history go et prompt
function fnGoPrompt() {
    let btnPrompt = prompt("Veuillez saisir le nombre de page à atteindre !");
    console.log(btnPrompt);

    let msg = "Veuillez un nombre entier positif ou négatif"; // cas ou la valeur n'est pas un nombre

    if(parseInt(btnPrompt)) {
        msg = "Vous êtes toujours sur la même page"; // cas de 0
        
        if(btnPrompt < 0) {
            msg = "Vous avez réculé de "+ (-btnPrompt) + " page en arrière !";
        } else if(btnPrompt > 0) {
            msg = "Vous avez avancé de "+ (btnPrompt) + " page en avant !";
        }

        history.go(btnPrompt);
    }
    
    document.getElementById('msgBtnGOPrompt').innerHTML = msg;
}

/**
 * L'interface et l'objet Location
 */
console.log(location);

// selection des boutons
let reloadBtn = document.getElementById('reloadBtn');
let assignBtn = document.getElementById('assignBtn');
let replaceBtn = document.getElementById('replaceBtn');

// definition des gestionnaires d'évènement click
reloadBtn.addEventListener('click', actualiser);
assignBtn.addEventListener('click', assigner);
replaceBtn.addEventListener('click', remplacer);

// creation des fonctions
function actualiser() {
    location.reload();
}

function assigner() {
    location.assign("http://localhost:8082/fs-05-soir-casa/cours/javascript/examples/example-09/page1.html")
}

function remplacer() {
    location.replace("http://localhost:8082/fs-05-soir-casa/cours/javascript/examples/example-09/page2.html")
}

/**
 * L'interface et l'objet Screen
 */
console.log(screen);

document.getElementById('screenInfos').innerHTML = 
"Dimensions totales de l'écran : "+ screen.width + " * "+ screen.height +
"<br> Surface disponible : "+ screen.availWidth + " * "+ screen.availHeight +
"<br> La résolution de l'écran : "+ screen.pixelDepth;

