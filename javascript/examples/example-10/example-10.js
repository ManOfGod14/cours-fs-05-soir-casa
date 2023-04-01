/**
 * DOM HTML en JS
 */
console.log(window.document);

function getNom() {
    let nom = document.getElementById('nom');
    console.log(nom);
}

let h1 = document.querySelector('h1');
h1.style.color = "blue";
h1.style.textDecoration = "underline";

console.log(h1);

let h2 = document.querySelectorAll('h2');

h2[1].textContent = "Hello ma page html";
console.log(h2);

// selectionner un élément avec un classe
document.querySelector('h2.classH2').style.color = "green";

// exercice
let h3 = document.querySelectorAll('h3');
console.log(h3);
h3.forEach((elt, index) => {
    elt.textContent = "Hello "+ (index + 1);
    elt.style.color = "red";
});

// selectionner par nom de classe
let classP = document.getElementsByClassName('classP');
console.log(classP);
for(val of classP) {
    val.style.fontStyle = "italic";
}

document.body.bgColor = "#38a5c2";
console.log(document.title);


// getElementsByTagName
let divElts = document.getElementsByTagName('div');
console.log(divElts);

document.querySelector('span').outerHTML = "<h4>Text par défaut avec h4</h4>";

// utilisation des noeuds
let idDivEnfant1 = document.getElementById('idDivEnfant1');
idDivEnfant1.parentNode.style.backgroundColor = "RGBa(214, 260, 10, 0.5)";

// chilNodes : sélectionne tous les noeuds enfants
let idDivParent2 = document.getElementById('idDivParent2');
console.log(idDivParent2.childNodes);
let enfantIdDivParent2 = idDivParent2.childNodes;
enfantIdDivParent2[3].style.fontWeight = "bold";

// children : sélectionne tous les noeuds enfants éléments
let enfantEltIdDivParent2 = idDivParent2.children;
console.log(enfantEltIdDivParent2);
enfantEltIdDivParent2[2].style.textDecoration = 'underline';

// selectionner le 1er enfant de la noeud body
let bodyFirstChild = document.body.firstChild;
console.log(bodyFirstChild);

// selectionner le 1er enfant element de la noeud body
let bodyFirstElementChild = document.body.firstElementChild;
console.log(bodyFirstElementChild);

// selectionner le dernier enfant de la noeud body
let bodyLastChild = document.body.lastChild;
console.log(bodyLastChild);

// selectionner le dernier enfant element dela noeud body
let bodyLastElementChild = document.body.lastElementChild;
console.log(bodyLastElementChild);

// récuperer le noeud précedent de idDivParent2
console.log(idDivParent2.previousSibling);

// récuperer le noeud element précedent de idDivParent2
console.log(idDivParent2.previousElementSibling);

// récuperer le noeud suivant de idDivParent1
let idDivParent1 = document.getElementById('idDivParent1');
console.log(idDivParent1.nextSibling);

// récuperer le noeud element suivant de idDivParent1
console.log(idDivParent1.nextElementSibling);

// récuperation des informations d'un noeud
console.log(idDivParent1.nodeName);
console.log(idDivParent1.nodeValue);
console.log(idDivParent1.nodeType);

/**
 * Ajouter, modifier ou supprimer des élements dans le DOM en JS
 */

// créer un paragraphe
let newParagraph = document.createElement('p');

// assigner du contenu au paragraphe créé
newParagraph.textContent = "Mon paragraphe créé avec du JS"
console.log(newParagraph);

// récuperer le noeud body
let bodyNode = document.body;

// ajouter la paragraphe créé dans le body
bodyNode.append(newParagraph);
// bodyNode.append(newParagraph, "Mon paragraphe créé avec du JS (2)");

// creation du text de noeud
let newText = document.createTextNode("Mon texte de noeud créé avec du JS");
bodyNode.appendChild(newText); // on peut ajouter qu'un noeud à la fois

let newText2 = document.createTextNode("Mon texte de noeud créé avec du JS (2)");
bodyNode.appendChild(newText2);

// placer un element avant une position donnée
let newTitleH2 = document.createElement('h2');
newTitleH2.textContent = "Mon titre H2 créé avec du JS";
bodyNode.insertBefore(newTitleH2, idDivParent1);

// insèrer un noeud élément à une position donnée par rapport à l'élément sur lequel il est appelé
let newTitleH4 = document.createElement('h4');
newTitleH4.textContent = "Mon titre H4 créé avec du JS";

let htmlContent = " <strong>(le DOM est très utile)</strong>";

// Ajouter un élément avant idDivParent1 (avant l'ouverture de l'element)
idDivParent1.insertAdjacentHTML('beforebegin', "<span style='color: red'>Contenu HTML Avant la div !</span>");

// Ajouter un titre après idDivParent1 (après la fermeture de l'element)
idDivParent1.insertAdjacentElement('afterend', newTitleH4);

// Ajouter le contenu htmlContent avant la balise fermante de h4 q'on vient de créer.
newTitleH4.insertAdjacentHTML('beforeend', htmlContent);

// Ajouter du texte après la balise ouvrante de h4
newTitleH4.insertAdjacentText('afterbegin', "(Au Debut de mon titre) ");

// Deplacer un element dans un autre
let idDivEnfant2 = document.getElementById('idDivEnfant2');
idDivParent2.insertAdjacentElement('afterbegin', idDivEnfant2);

// cloner un noeud en JS
// true : permet de récuperer le noeud et ses enfant
// false : récupère que le noeud sans ses enfants
let cloneIdDivEnfant1 = idDivEnfant1.cloneNode(true);
console.log(cloneIdDivEnfant1);
idDivParent2.insertAdjacentElement('beforeend', cloneIdDivEnfant1);

// supprimer un noeud par son id
// idDivEnfant1.remove();

// supprimer un noeud enfant par id
idDivParent1.removeChild(idDivEnfant1);

// Pour vérifier si un élément possède des attributs
let idDivParent3 = document.getElementById('idDivParent3');
console.log(idDivParent3.hasAttributes());

if(!idDivParent3.hasAttribute('style')) {
    idDivParent3.style.backgroundColor = "red";
}

let attributeList = idDivParent3.attributes;
console.log(attributeList);

// assigner un attribut à un element
idDivParent3.setAttribute('class', 'blue');

// supprimer un attribute
idDivParent3.removeAttribute('class');

// utilisation de la méthode classList
idDivParent3.classList.add('bold', 'blue', 'taille');
console.log(idDivParent3);
idDivParent3.classList.remove('bold');
console.log(idDivParent3);
console.log(idDivParent3.classList.contains('bold'));
console.log(idDivParent3);
idDivParent3.classList.replace('taille', 'taille2');
console.log(idDivParent3);
idDivParent3.classList.toggle('taille2');
console.log(idDivParent3);
idDivParent3.classList.toggle('blue');
console.log(idDivParent3);

/**
 * Gestionnaire d'évènements
 */
let ramadanDiv = document.querySelector("#ramadanDiv");

// utilisation querySelector avec id
let idBtnRamadan = document.querySelector('#idBtnRamadan');
console.log(idBtnRamadan);

idBtnRamadan.addEventListener('click', fnIdBtnRamadan);

// function
function fnIdBtnRamadan() {
    alert("Ramadan karim, bienvenu ramadan ! (querySelector avec id)")
}

// // utilisation querySelector avec un nom de class
let classBtnRamadan = document.querySelector('.classBtnRamadan');
console.log(classBtnRamadan);

classBtnRamadan.addEventListener('click', fnClassBtnRamadan);

// function
function fnClassBtnRamadan() {
    alert("Ramadan karim, bienvenu ramadan ! (querySelector avec class name)")
}

// utilisation de onclick
let idBtnOnclick = document.querySelector('#idBtnOnclick');
idBtnOnclick.onclick = function () {
    alert("Ramadan karim, bienvenu ramadan ! (querySelector avec onclick)")
}

// utilisation de onmouseover / onmouseout
ramadanDiv.onmouseover = function () {
    this.style.backgroundColor = "green";
}

ramadanDiv.onmouseout = function () {
    this.style.backgroundColor = "";
}

// utilisation de addEventListener et mouseover/mouseout
let idBtnMouseOverOut = document.querySelector("#idBtnMouseOverOut");

idBtnMouseOverOut.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#4d79ff";
});

idBtnMouseOverOut.addEventListener('mouseout', function () {
    this.style.backgroundColor = "";
});

idBtnMouseOverOut.addEventListener('click', removeClickEvent);
function removeClickEvent() {
    alert("Evènement de clic à supprimer !");
}

// supprimer un gestionnaire d'évènement
idBtnMouseOverOut.removeEventListener('click', removeClickEvent);