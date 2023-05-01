/**
 * les variables
 */
let a = "0";
let b: number = 1; // number c'est un type
let c: boolean = false;
let tab: Array<number> = [4, 2, 6]
let tab2: Array<number | string> = [4, 2, 6, "lmd"]
let obj: {x: number, y: number} = {x: 0, y: 5}

/**
 * les fonctions
 */
function estPaire(n: number, callback?: (params) => void): boolean {
    return (n % 2) === 0;
}
console.log(estPaire(50));

function tableau(inTab: Array<string>): Array<string> {
    // let outTab = new Array();
    let outTab = [];

    for(let item of inTab) {
        const tmp = "Index "+ item;
        outTab.push(tmp);
    }

    return outTab;
}
console.log(tableau(["a", "b", "c"]));

/**
 * les interfaces : permet de personnaliser les types
 */
interface DemoInterface {
    autoplay: boolean;
    xval?: number;
    message: (data: string) => void;
}

/**
 * les classes
 */
class Demo {
    variable0;
    public variable1;
    protected variable2;
    private variable3;
    static variable4 = 4;

    public optionTabs?: DemoInterface;

    constructor(optionTabs?: DemoInterface) {
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
// instancier la classe Demo
let d = new Demo();
console.log("Variable 0 = " + d.variable0);
console.log("Variable 1 = " + d.variable1);
// console.log("Variable 2 = " + d.variable2);
// console.log("Variable 3 = " + d.variable3);
// console.log("Variable 4 = " + d.variable4);

let dopt = new Demo({
    autoplay: true,
    message: (data : "Hello !") => {}
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
    public optionTabs?: DemoInterface;

    constructor(optionTabs?: DemoInterface) {
        this.optionTabs = optionTabs;
    }

    salutation() {
        return "Bonjour !";
    }
}



