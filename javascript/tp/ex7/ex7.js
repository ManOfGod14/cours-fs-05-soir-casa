/**
 * fonction find 
 */
let eltFind1 = (tab) => {
    return tab.find(elt => elt > 5);
}
console.log(eltFind1([2, 12, 5, 3, 6, 9, 15]));

// recupérer la personne dont id = 3
let eltFind2 = (tab) => {
    return tab.find((value, index, obj) => {
        return value.id === 3;
    });
}
// 
let tabTest = [
    {id: 1, firstname: 'maliki', lastname: "tcherou", age: 30},
    {id: 2, firstname: 'nabil', lastname: "mokhliss", age: 25},
    {id: 3, firstname: 'mohcine', lastname: "labzaze", age: 30},
    {id: 4, firstname: 'youness', lastname: "elkhayat", age: 22},
    {id: 5, firstname: 'youness', lastname: "tcherou", age: 22}
];
console.log(eltFind2(tabTest));

// récupérer la personne dont l'age est < 30
let eltFind3 = (tab) => {
    return tab.find((value, index, obj) => {
        return value.age < 30;
    });
}
console.log(eltFind3(tabTest));

/**
 * fontion findIndex et findLastIndex
 */
// findIndex
let eltFindIndex = (tab) => {
    return tab.findIndex((elt, index, obj) => elt > 5);
}
console.log(eltFindIndex([2, 12, 5, 3, 6, 9, 15]));

// findLastIndex
let eltFindLastIndex = (tab) => {
    return tab.findLastIndex((elt, index, obj) => elt > 5);
}
console.log(eltFindLastIndex([2, 12, 5, 3, 6, 9, 15]));

/**
 * fonction forEach
 */
let eltsForEach = (tab) => {
    let tabStock = [];
    tab.forEach((elt, index, obj) => {
        if(elt.age < 30) {
            tabStock.push(elt);
        }
    })
    return tabStock;
}
console.log(eltsForEach(tabTest));

/**
 * fonction map
 */
let eltsMap = (tab) =>  {
    let tabStock = [];
    tab.map((elt, index, obj) => {
        if(elt.age < 30)
            tabStock.push(elt);
    })
    return tabStock;
}
console.log(eltsMap(tabTest));


/**
 * liste de produits vendu dans la journée
 * créer une fonction qui prend en paramètre la liste de vente et 
 * la référence d'un produit et retourne un objet contenant :
 * la référence, le nom, la quantité total vendu et le prix total
 * {ref: ref, name: name, qtyTotal: qtyTotal, prixTotal: prixTotal}
 */
let tabExo = [
    {ref: 1001, name: "force mzn", prix_ut: 5, qty: 2, devise: "MAD"},
    {ref: 1005, name: "fino", prix_ut: 6.5, qty: 10, devise: "MAD"},
    {ref: 1005, name: "fino", prix_ut: 6.5, qty: 6, devise: "MAD"},
    {ref: 1002, name: "spaguetti", prix_ut: 11.5, qty: 3, devise: "MAD"},
    {ref: 1001, name: "force mzn", prix_ut: 5, qty: 5, devise: "MAD"},
    {ref: 1003, name: "tomate", prix_ut: 3, qty: 15, devise: "MAD"},
    {ref: 1004, name: "lentilles", prix_ut: 16, qty: 9, devise: "MAD"},
    {ref: 1005, name: "fino", prix_ut: 6.5, qty: 2, devise: "MAD"},
    {ref: 1005, name: "fino", prix_ut: 6.5, qty: 3, devise: "MAD"},
    {ref: 1003, name: "tomate", prix_ut: 3, qty: 5, devise: "MAD"},
    {ref: 1003, name: "tomate", prix_ut: 3, qty: 1, devise: "MAD"},
    {ref: 1002, name: "spaguetti", prix_ut: 11.5, qty: 7, devise: "MAD"}
];

let resVente = (list, reference) => {
    // recuperation des produits ayant la même reference
    let listStock = [];
    list.forEach((elt, index, obj) => {
        if(elt.ref === reference) {
            listStock.push(elt);
        }
    });

    // recuperation du prodObj du produit
    let prodObj = listStock.find((elt, index, obj) => {
        return elt.ref === reference;
    });

    // quantité total
    let qtyTotal = listStock.reduce((accumulator, currentValue, currentIndex, obj) => {
        return accumulator + currentValue.qty;
    }, 0);


    // let prixTotal = listStock.reduce((accumulator, currentValue, currentIndex, obj) => {
    //     accumulator += currentValue.prix_ut * currentValue.qty;
    //     return accumulator;
    // }, 0);

    let prixTotal = prodObj.prix_ut * qtyTotal;

    // calcul de la quantité total et du prix total

    return {ref: reference, name: prodObj.name, qtyTotal: qtyTotal, prixTotal: prixTotal};
}
console.log(resVente(tabExo, 1005));
