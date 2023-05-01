/**
 * les variables
 */
let a = "0";
let b = 1; // number c'est un type
let c = false;
let tab = [4, 2, 6];
let tab2 = [4, 2, 6, "lmd"];
let obj = { x: 0, y: 5 };
/**
 * les fonctions
 */
function estPaire(n, callback) {
    return (n % 2) === 0;
}
console.log(estPaire(50));
function tableau(inTab) {
    // let outTab = new Array();
    let outTab = [];
    for (let item of inTab) {
        const tmp = "Index " + item;
        outTab.push(tmp);
    }
    return outTab;
}
console.log(tableau(["a", "b", "c"]));
/**
 * les classes
 */
class Demo {
    constructor(optionTabs) {
        this.variable0 = 0;
        this.variable1 = 1;
        this.variable2 = 2;
        this.variable3 = 3;
        this.optionTabs = optionTabs;
    }
    // méthode test
    test() {
        return "test";
    }
}
Demo.variable4 = 4;
// instancier la classe Demo
let d = new Demo();
console.log("Variable 0 = " + d.variable0);
console.log("Variable 1 = " + d.variable1);
// console.log("Variable 2 = " + d.variable2);
// console.log("Variable 3 = " + d.variable3);
// console.log("Variable 4 = " + d.variable4);
let dopt = new Demo({
    autoplay: true,
    message: (data) => { }
});
/**
 * les héritages
 */
class DemoHeritier extends Demo {
    constructor() {
        super();
    }
}
/**
 * les modules
 */
export default class DemoModule {
    constructor(optionTabs) {
        this.optionTabs = optionTabs;
    }
    salutation() {
        return "Bonjour !";
    }
}
