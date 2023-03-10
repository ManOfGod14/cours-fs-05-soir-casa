// classe Rectangle
class Rectangle {
    constructor(long, larg) {
        this.long = long;
        this.larg = larg;
    }

    // perimetre d'un rectangle
    perimetre() {
        return (this.larg + this.long)*2;
    }

    // l'aire d'un rectangle
    aire() {
        return this.larg * this.long
    }
}
let rectangle = new Rectangle(30, 20);
console.log(rectangle.perimetre());
console.log(rectangle.aire());

// classe Geometrie
class Geometrie {
    constructor(nom) {
        this.nom = nom;
    }

    perimetre(larg, long) {
        return "le périmetre de " +this.nom+ " = "+(larg + long)*2;
    }
}
let geometrie = new Geometrie("Rectangle");
console.log(geometrie.perimetre(20, 30));

/**
 * Héritage avec les classes en JS
 */
class Ligne {
    constructor(nom, long, eltId) {
        this.nom = nom;
        this.long = long;
        this.eltId = eltId;
    }

    affichage = () => {
        document.getElementById(this.eltId).innerHTML = "La valeur de "+ this.nom +" = "+ this.long;
    }
}
// creation d'une instance de la classe Ligne
let longueur = new Ligne("Longueur", 100, 'p1');
let largeur = new Ligne("Largeur", 40, 'p2');
longueur.affichage();
largeur.affichage();

// classe Rectangle2 hérite de la classe Ligne
class Rectangle2 extends Ligne {
    constructor(nom, long, eltId, larg) {
        super(nom, long, eltId);
        this.larg = larg
    }

    perimetre = () => {
        return (this.long + this.larg)*2;
    }

    aire = () => {
        return this.long * this.larg;
    }
}
let rectangle2 = new Rectangle2("Rectangle", 100, 'p3', 40);
document.getElementById('p3').innerHTML = "Le périmetre du "+ rectangle2.nom +" (long = "+ rectangle2.long +" et larg = "+ rectangle2.larg + ") = "+ rectangle2.perimetre();
document.getElementById('p4').innerHTML = "L'aire du "+ rectangle2.nom +" (long = "+ rectangle2.long +" et larg = "+ rectangle2.larg + ") = "+ rectangle2.aire();


// classe Parallelepipede herite de la classe Rectangle2
class Parallelepipede extends Rectangle2 {
    constructor(nom, long, eltId, larg, hauteur) {
        super(nom, long, eltId, larg);
        this.hauteur = hauteur;
    }

    volume = () => {
        // return this.long * this.larg * this.hauteur;
        return this.aire() * this.hauteur;
    }
}
let parallelepipede = new Parallelepipede("Parallelepipede", 100, 'p5', 40, 20);
document.getElementById('p5').innerHTML = "Le volume du "+ parallelepipede.nom +" (long = "+ parallelepipede.long +", larg = "+ parallelepipede.larg + " et hauteur = "+ parallelepipede.hauteur +") = "+ parallelepipede.volume();


















// class Vehicule {           
//     constructor(name) {
//         this.name = name || "vehicule";
//         console.log("ceci est un nouveau vehicule");
//     }
// }

// class Voiture extends Vehicule  {
//     constructor(name)   {
//         super(name || "voiture");
//         this.portes = 5; 
//         this.roues = 4;
//         this.moteur = {
//             puissance : 60,
//             marche : false
//         };
//         this.voyants = { 
//             marche : false
//         };
//         console.log("ceci est  un nouveau vehicule");
//     }

//     contact() {
//         console.log("on allume le contact");
//         this.allumeLesvoyants();
//     }
    
//     allumeLesVoyants() {
//         console.log("les voyants s'allument");
//     }
    
//     decontact() {
//         console.log(" on coupe le contact");
//         this.eteindrelesVoyants();
//     }
        
//     eteindrelesVoyants() {
//         console.log("les voyants sont allumés");
//         this.voyants.marche = false;
//     }
        
//     demarre() {
//         console.log("on demarre la voiture");
//         this.moteur.marche = true;                          
//     }
    
//     coupe() {
//         console("on coupe le moteur");
//         this.moteur.marche = false;
//     }    
// }

// class Sportive extends Voiture {
//     constructor(name) {
//         super(name || "Sportive");
//         this.portes = 3;
//         this.moteur.puissance = 450;
//     }
// }

// const test_vehicule = () => {                                     
//     console.log(test_vehicule);
//     let maVoiture = new Sportive('maPorshe');                   
//     console.log(maVoiture.moteur.marche);                    
//     maVoiture.contact();                                   
//     maVoiture.demarre();                                   
//     console.log(maVoiture.moteur.marche);      
//     let usine = [];
  
//     for(let i = 0; i < 100; i++)
//         usine.push(new Sportive());
    
//     console.log(usine);
// };

// test_vehicule();
