//tableau de test
let tabTest = [
    {firstname: 'maliki', lastname: "tcherou", age: 30},
    {firstname: 'nabil', lastname: "mokhliss", age: 25},
    {firstname: 'mohcine', lastname: "labzaze", age: 30},
    {firstname: 'youness', lastname: "elkhayat", age: 22},
    {firstname: 'youness', lastname: "tcherou", age: 22}
];
console.log(tabTest);

// 
function tableauToUppercaseArrayObject(tab) {
    return tab.map((item) => {
        if(item.age <= 25) {
            const valFirstName = item.firstname.charAt(0).toUpperCase()+item.firstname.substring(1).toLowerCase();
            const valLastName = item.lastname.toUpperCase();
            return {firstname: valFirstName, lastname: valLastName};
        }
    });
}
//  tester la focntion tableauToUppercaseArrayObject
let resTabTest = tableauToUppercaseArrayObject(tabTest);
console.log(resTabTest);

/**
 * exercice 5
 */
// methode avec filter
function filterArrayHaveNullAndUndefined(tableau) {
    const tab = tableauToUppercaseArrayObject(tableau);

    return tab.filter(value => value !== null && value !== undefined);
}
//  tester la focntion filterArrayHaveNullAndUndefined
console.log(filterArrayHaveNullAndUndefined(tabTest));

// methode sans filter
function filterArrayHaveNullAndUndefined2(tableau) {
    const filterTab = [];

    for(let i = 0; i < tableau.length; i++)
        if(tableau[i] !== null && tableau[i] !== undefined)
            filterTab.push(tableau[i]);
    
    return filterTab;
}
console.log(filterArrayHaveNullAndUndefined2(resTabTest))


// bonus
