// ligne
function Ligne(longueur) {
    this.longueur = longueur;
}
Ligne.prototype.affichage = function() {
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur;
};
// let ligne = new Ligne(30);
// ligne.affichage();
// console.log(ligne.affichage());

// Rectangle
function Rectangle(longueur, largeur) {
    Ligne.call(this, longueur);
    this.largeur = largeur;
}
Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = () => {
    return document.getElementById('p2').innerHTML = 'Aire : ' + this.longueur * this.largeur
};
// let rectangle = new Rectangle(30, 20);
// rectangle.aire();
// console.log(rectangle.aire());

// // parallelepipede
function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}
Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = () => {
    document.getElementById('p3').innerHTML = 'Volume : ' + this.longueur * this.largeur * this.hauteur
};
let para = new Parallelepipede(30, 20, 5);
para.aire();
para.volume();
para.affichage();
