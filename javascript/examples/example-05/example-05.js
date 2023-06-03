/**
 * Exercice 1
 * tab : tableau d'entiers
 * key : varible à conditionner
 */

// *******************
// première methode
// *******************
function plusGrandOuPlusPetitEntier(tab, key) {
    let stock;
    if(key == "grand") {
        // boucle while
        // let i = 0;
        // while(i < tab.length) { // tant que
        //     if(i == 0) {
        //         stock = tab[i];
        //     } else {
        //         if(tab[i] > stock) {
        //             stock = tab[i];
        //         }
        //     }
        //     i = i+1;
        // }

        // boucle for
        for(let i = 0; i < tab.length; i++) {
            if(i == 0) {
                stock = tab[i];
            } else {
                if(tab[i] > stock) {
                    stock = tab[i];
                }
            }
        }

        // retourner stock
        return stock;
    } else {
        if(key == "petit") {
            // let i = 0;
            // while(i < tab.length) { // tant que
            //     if(i == 0) {
            //         stock = tab[i]
            //     } else {
            //         if(tab[i] < stock) {
            //             stock = tab[i];
            //         }
            //     }
            //     i = i+1;
            // }

            // boucle for
            for(let i = 0; i < tab.length; i++) {
                if(i == 0) {
                    stock = tab[i];
                } else {
                    if(tab[i] < stock) {
                        stock = tab[i];
                    }
                }
            }

            // retourner stock
            return stock;
        } else {
            return "Message d'erreur : la clé key n'existe pas !";
        }
    }
}
// tester la fonction plusGrandOuPlusPetitEntier
let tableau1 = [0, 3, 52, 10, 9, -1, -20];
// console.log(plusGrandOuPlusPetitEntier(tableau1, "petit"));

// *******************
// deuxième methode
// *******************
// retourne le plus grand entier du tableau
function plusGrandEntier(tab) {
    let stock;

    for(let i = 0; i < tab.length; i++) {
        if(i == 0) {
            stock = tab[i];
        } else {
            if(tab[i] > stock) {
                stock = tab[i];
            }
        }
    }

    // retourner stock
    return stock
}

// retourne le plus petit entier du tableau
function plusPetitEntier(tab) {
    let stock;

    for(let i = 0; i < tab.length; i++) {
        if(i == 0) {
            stock = tab[i];
        } else {
            if(tab[i] < stock) {
                stock = tab[i];
            }
        }
    }

    // retourner stock
    return stock
}

function plusGrandOuPlusPetitEntier2(tab, key) {
    if(key == "grand") {
        return plusGrandEntier(tab);
    } else {
        if(key == "petit") {
            return plusPetitEntier(tab);
        } else {
            return "Message d'erreur : la clé key n'existe pas !";
        }
    }
}
// tester la fonction plusGrandOuPlusPetitEntier
let tableau2 = [85, 45, 100, 3, 9, -65, -5];
// console.log(plusGrandOuPlusPetitEntier2(tableau2, "grand"));

/**
 * exemple tri dans l'ordre décroisant
 */
function ordreDecroissant(tab) {
    for(let i = 0; i < tab.length; i++) {
        for(let j = 0; j < tab.length - 1; j++) {
            if(tab[j] < tab[j+1]) { // comparaison de tab[j] et tab[j+1]
                const temp = tab[j]; // variable temporaire pour ne pas perdre la valeur de tab[j]
                tab[j] = tab[j+1]; // décalage de la valeur la plus grande à la position j
                tab[j+1] = temp; // décalage de la valeur la plus petite à la position j+1
            }
        }
    }

    return tab;
}
// test la fonction ordreDecroissant
let tableau3 = [85, 45, 100, 3, 9, -65, -5, -4];
console.log(ordreDecroissant(tableau3));

/**
 * exemple tri dans l'ordre croissant
 */
function ordreCroissant(tab) {
    for(let i = 0; i < tab.length; i++) {
        for(let j = 0; j < tab.length - 1; j++) {
            if(tab[j] > tab[j+1]) { // comparaison de tab[j] et tab[j+1]
                const temp = tab[j]; // variable temporaire pour ne pas perdre la valeur de tab[j]
                tab[j] = tab[j+1]; // décalage de la valeur la plus petite à la position j
                tab[j+1] = temp; // décalage de la valeur la plus grande à la position j+1
            }
        }
    }

    return tab;
}
// test la fonction ordreCroissant
let tableau4 = [1, 5, 6, -1, 0, 9];
console.log(ordreCroissant(tableau4));

/**
 * Exercice 2
 */
function trierTableau(tab, key) {
    if(key == "grand") {
        return ordreCroissant(tab);
    } else {
        if(key == "petit") {
            return ordreDecroissant(tab);
        } else {
            return "Message d'erreur : la clé key n'existe pas !";
        }
    }
}

// Objet en JS
let user = {
    nom: "TCHEROU",
    prenom: "Maliki",
    nomComplet: ["TCHEROU", "Maliki"],
    email: "maliki.tcherou1@gmail.com",
    phone: "0627895656",
    age: 31,

    bonjour: function() {
        alert("Bonjour, je suis "+ this.nomComplet[0] + " " + this.nomComplet[1]+ " j'ai "+ this.age + " ans");
    }
};
console.log(user.nomComplet[1]);

user.bonjour();
