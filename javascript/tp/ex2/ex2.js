// Implémentez une fonction qui génère un tableau de <b>n nombres, de 0 à (n - 1)</b>
function genereTableauDeNnombre(n) { // n est la taille du tableau
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            document.getElementById('id1').innerHTML = "Tableau 1 = [" + i + ", ";
        } else if(i != (n-1)) {
            document.getElementById('id1').innerHTML += i + ", ";
        } else {
            document.getElementById('id1').innerHTML += i + "]";
        }
    }
}
// executer le fonction genereTableauDeNnombre
genereTableauDeNnombre(50);

// Implémentez une deuxième fonction, qui cette fois génère un tableau de <b>n nombres entiers aléatoires</b>;
function genererTableauDeNnombreAleatoire(n) {
    // for(let i = 0; i < n; i++) {
    //     document.getElementById('id2').innerHTML += Math.floor(Math.random() * 100) + ", ";
    // }

    // affichage propre
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            document.getElementById('id2').innerHTML = "Tableau 2 = [" + Math.floor(Math.random() * 100) + ", ";
        } else if(i != (n-1)) {
            document.getElementById("id2").innerHTML += Math.floor(Math.random() * 100) + ", ";
        } else {
            document.getElementById('id2').innerHTML += Math.floor(Math.random() * 100) + "]";
        }
    }
}
// executer le fonction genereTableauDeNnombre
genererTableauDeNnombreAleatoire(20);

// Implémentez désormais une troisième fonction qui, cette fois, génère un tableau de <b>n nombres aléatoires entre 0 et n</b>;
function genererTableauDeNnombreAleatoireEntreZeroEtN(n) {
    // for(let i = 0; i < n; i++) {
    //     document.getElementById("id3").innerHTML += Math.floor(Math.random() * n+1) + ", ";
    // }

    // affichage propre
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            document.getElementById('id3').innerHTML = "Tableau 3 = [" + Math.floor(Math.random() * n+1) + ", ";
        } else if(i != (n-1)) {
            document.getElementById("id3").innerHTML += Math.floor(Math.random() * n+1) + ", ";
        } else {
            document.getElementById('id3').innerHTML += Math.floor(Math.random() * n+1) + "]";
        }
    }
}
// executer le fonction genererTableauDeNnombreAleatoireEntreZeroEtN
genererTableauDeNnombreAleatoireEntreZeroEtN(4);

// Implémentez enfin, une fonction qui génère un tableau de <b>n nombres aléatoires entre deux valeurs min et max</b>.
function genererTableauDeNnombreAleatoireEntreMinMax(n, min, max) { // n taille du tableau à génerer
    const tab = [];

    for (let i = 0; i < n; i++) {
        const randomVal = Math.floor(Math.random() * (max + 1 - min) + min);
        tab.push(randomVal);
    }

    return tab;
}
//  tester la fonction genererTableauDeNnombreAleatoireEntreMinMax
document.getElementById('id4').innerHTML = "Tableau 4 = [" + genererTableauDeNnombreAleatoireEntreMinMax(10, 3, 9) + "]";