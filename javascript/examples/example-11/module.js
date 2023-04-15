/**
 * Module js
 */
function fullName(prenom, nom) {
    aler(prenom + " " + nom);
};

// fonction helloWorld à exporter
export function helloWorld(nom) {
    alert("Bonjour "+ nom +" !");
};

// objet user à exporter
export let user = {
    prenom: "Maliki",
    nom: "TCHEROU"
};