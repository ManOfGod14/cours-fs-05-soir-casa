/**
 * Modules import export
 */
import { helloWorld, user } from "./module.js";

helloWorld("Maliki");

let p1 = document.getElementById("p1");
let p2 = document.querySelector("#p2");

p1.textContent = "Prénom et nom : "+ user.prenom + " " + user.nom;

user.prenom = "Younes";

p2.textContent = "Le nouveau prénom : "+ user.prenom;