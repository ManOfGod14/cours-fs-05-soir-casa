// fonction sans reduce
function sommeElementTableauSansReduce(numbers) {
    let somme = 0;
    for(let i = 0; i< numbers.length; i++) {
        // somme = somme + numbers[i];
        somme += numbers[i];
    }
    // return [numbers, somme];
    return {numbers: numbers, somme: somme};
}
// tester la fonction sommeElementTableauSansReduce
let tabSom = sommeElementTableauSansReduce([2, 5, 6, 9, 0, 6, 5, 10, 12]);
console.log(sommeElementTableauSansReduce(tabSom));
// document.getElementById('id1').innerHTML = "La somme des éléments du tableau ["+ tabSom[0] +"] = " + tabSom[1];
document.getElementById('id1').innerHTML = "La somme des éléments du tableau 1 ["+ tabSom.numbers +"] = " + tabSom.somme;

// faire la somme des element d'un tableau
function sommeElementTableauAvecReduce(numbers) {
    // return numbers.reduce((accumulator, currentValue, currentIndex, tabArray) => accumulator + currentValue, 0);
    return numbers.reduce((accumulator, currentValue, currentIndex, tabArray) => {
        // return accumulator + currentValue;
        // return (currentValue <= 5) ? accumulator + currentValue : accumulator;
        if(currentValue <= 5) {
            accumulator += currentValue;
        }
        return accumulator;
    }, 0);
}
// tester la fonction sommeElementTableauAvecReduce
let monTab = [5, 6, 9, 0, 6, 5, 1, 10, 15, 3, 2];
console.log(sommeElementTableauAvecReduce(monTab));
document.getElementById('id2').innerHTML = "La somme des éléments du tableau 2 = "+ sommeElementTableauAvecReduce(monTab);
