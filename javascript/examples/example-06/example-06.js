// fonction constructeur d'objet
function Utilisateur(nom, age, email) {
    this.nom = nom;
    this.age = age;
    this.email = email;

    this.bonjour = () => {
        alert("Bonjour je m'appelle "+ this.nom[0] +" "+ this.nom[1] +" j'ai "+ this.age +", voici mon email : "+this.email)
    };
}
let maliki = new Utilisateur(["Maliki", "TCHEROU"], 30, "test@gmail.com");
// maliki.bonjour();

maliki.taille = "1m 73";

console.log(maliki);

document.getElementById('lastname').innerHTML = "<span style='color: red'>Nom : </span>"+maliki.nom[1];
document.getElementById('firstname').innerHTML = "<span>Prénom : </span>"+maliki.nom[0];
document.getElementById('age').innerHTML = "<span>Age : </span>"+maliki.age+" ans";
document.getElementById('email').innerHTML = "<span>Email : </span>"+maliki.email;
document.getElementById('taille').innerHTML = "<span>Taille : </span>"+maliki.taille;
