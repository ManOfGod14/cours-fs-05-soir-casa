class Voiture {
    constructor(marque) {
        this.marque = marque;
        this.roue = 4;
        this.volant = 1;
    }

    etatVeilleuse = (bool) => {
        return bool ? "La veilleuse de "+this.marque+" est allumée !" : "La veilleuse de "+this.marque+" est éteinte !";
    }

    etatDemarrage = (bool) => {
        return bool ? "La voiture "+this.marque+" est démarrée !" : "La voiture "+this.marque+" est arrêtée !";
    }
}

class Vehicule extends Voiture {
    constructor(marque, puissance) {
        super(marque);
        this.puissance = puissance;
    }
}