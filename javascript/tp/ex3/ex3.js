/**
 * trier de manière ascendante
 */
function ordreCroissant(tab) {
    for(let i = 0; i < tab.length; i++) {
        for(let j = 0; j < tab.length - 1; j++) {
            if(tab[j] > tab[j+1]) {
                const temp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = temp;
            }
        }
    }

    return tab;
}

// 
function genererTableauEtTrierSansLaFonctionSort(n, min, max) {
    const tab = [];

    for(let i = 0; i < n; i++) {
        const valGen = Math.floor(Math.random()* (max+1 - min) + min);
        tab.push(valGen);
    }

    return ordreCroissant(tab);
}
document.getElementById('id1').innerHTML = "Tableau 1 = ["+ genererTableauEtTrierSansLaFonctionSort(15, 3, 13) +"]";


function genererTableauEtTrierAvecLaFonctionSort(n, min, max) {
    const tab = [];

    for(let i = 0; i < n; i++) {
        const valGen = Math.floor(Math.random()* (max+1 - min) + min);
        tab.push(valGen);
    }
    
    return tab.sort((a, b) => a-b);
}

document.getElementById('id2').innerHTML = "Tableau 2 = ["+ genererTableauEtTrierAvecLaFonctionSort(20, 5, 17) +"]";

/**
 * fonction bonus 1
 * 
*/
function genererTableauEtTrierAvecLaFonctionSortBonus1(n, min, max, key) {
    const tab = [];
    const compareFnAsc = (a, b) => a-b; // ascendant (du plus petit au plus grand)
    const compareFnDesc = (a, b) => b-a; // descendante (du plus grand au plus petit)

    for(let i = 0; i < n; i++) {
        const valGen = Math.floor(Math.random()* (max+1 - min) + min);
        tab.push(valGen);
    }

    // key = "petit" => ascendant
    if(key == "petit") {
        return tab.sort(compareFnAsc);
    } else {
        return tab.sort(compareFnDesc);
    }
}
document.getElementById('id3').innerHTML = "Tableau 3 = ["+ genererTableauEtTrierAvecLaFonctionSortBonus1(20, 5, 17, "petit") +"]";

/**
 * fonction bonus 2
 * 
*/
function genererTableauEtTrierAvecLaFonctionSortBonus2(n, min, max, key) {
    const tab = [];
    const compareFn = (key == "petit") ? ((a, b) => a-b) : ((a, b) => b-a);

    for(let i = 0; i < n; i++) {
        const valGen = Math.floor(Math.random()* (max+1 - min) + min);
        tab.push(valGen);
    }

    return tab.sort(compareFn);
}
document.getElementById('id4').innerHTML = "Tableau 4 = ["+ genererTableauEtTrierAvecLaFonctionSortBonus2(20, 5, 17, "grand") +"]";