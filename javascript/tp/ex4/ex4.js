/**
 * methode sans la fonction map
 * mettre les elements d'un tableau au carré
 */
function mettreElementTableauAuCarreSansMap(tab) {
    const tabCarre = [];
    for(let i=0; i<tab.length; i++) {
        tabCarre.push(tab[i]*tab[i]);
    }
    return tabCarre;
}
// tester la fonction mettreElementTableauAuCarreSansMap
let tabTest1 = [5, 6, 9, 7, 1, 2];
console.log("Tableau 1 = [" + mettreElementTableauAuCarreSansMap(tabTest1) + "]");

/**
 * methode avec la fonction map
 */
function mettreElementTableauAuCarreAvecMap(tab) {
    return tab.map(item => item*item);
}
// tester la fonction mettreElementTableauAuCarreAvecMap
let tabTest2 = [9, 3, 8, 10, 7, 2, 6];
console.log("Tableau 2 = [" + mettreElementTableauAuCarreAvecMap(tabTest2) + "]");

/**
 * Mettre la première lettre du prénom en Majuscule
 */
// exemple 1
function tableauToUppercase1(tab) {
    return tab.map(item => item.charAt(0).toUpperCase()+item.substring(1).toLowerCase());
}
// test tableauToUppercase1
let tabTest3 = ["maliki", "nabil", "mohcine", "youness"];
console.log(tableauToUppercase1(tabTest3))

// exemple 2
function tableauToUppercase2(tab) {
    // methode 1
    // for(let i = 0; i < tab.length; i++) {
    //     tab[i] = tab[i].charAt(0).toUpperCase()+tab[i].substring(1).toLowerCase();
    // }
    // return tab;

    // methode 2
    const tab2 = [];
    for(let i = 0; i < tab.length; i++) {
        tab2.push(tab[i].charAt(0).toUpperCase()+tab[i].substring(1).toLowerCase());
    }
    return tab2;
}
console.log(tableauToUppercase2(tabTest3));
// console.log("Tableau = [" + tableauToUppercase2(tabTest3) + "]")

// exemple 3
function tableauToUppercaseArrayObject1(tab) {
    return tab.map((item) => item.firstname.charAt(0).toUpperCase()+item.firstname.substring(1).toLowerCase()+' '+item.lastname.toUpperCase());
}
// test tableauToUppercase2
let tabTest4 = [
    {firstname: 'maliki', lastname: "tcherou", age: 30},
    {firstname: 'nabil', lastname: "mokhliss", age: 25},
    {firstname: 'mohcine', lastname: "labzaze", age: 30},
    {firstname: 'youness', lastname: "elkhayat", age: 22},
    {firstname: 'youness', lastname: "tcherou", age: 22}
];
console.log(tableauToUppercaseArrayObject1(tabTest4));

// exemple 4
function tableauToUppercaseArrayObject2(tab) {
    // methode 1
    // for(let i = 0; i < tab.length; i++) {
    //     tab[i].firstname = tab[i].firstname.charAt(0).toUpperCase()+tab[i].firstname.substring(1).toLowerCase();
    //     tab[i].lastname = tab[i].lastname.toUpperCase();
    // }
    // return tab;

    // methode 2
    const tabObj = [];
    for(let i = 0; i < tab.length; i++) {
        const modelObj = {firstname: "", lastname: ""};
        modelObj.firstname = tab[i].firstname.charAt(0).toUpperCase()+tab[i].firstname.substring(1).toLowerCase();
        modelObj.lastname = tab[i].lastname.toUpperCase();
        tabObj.push(modelObj);
    }
    return tabObj;
}
console.log(tableauToUppercaseArrayObject2(tabTest4));

// exemple 5
function tableauToUppercaseArrayObject3(tab) {
    return tab.map((item) => {
        if(item.age <= 25) {
            const valFirstName = item.firstname.charAt(0).toUpperCase()+item.firstname.substring(1).toLowerCase();
            const valLastName = item.lastname.toUpperCase();
            return {firstname: valFirstName, lastname: valLastName};
        }
    });
}
console.log(tableauToUppercaseArrayObject3(tabTest4));

// 
document.getElementById('id1').innerHTML = JSON.stringify(tableauToUppercaseArrayObject3(tabTest4));
