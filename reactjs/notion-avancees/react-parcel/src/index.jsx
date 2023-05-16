/**
 * React avec l'outil Parcel
 * 
 * Quelques commandes utiles :
 * npm init -y (Permet d'initialiser notre projet en creéant un fichier package.json)
 * npm install react react-dom (pour installer les librairies/dependences react et react-dom)
 * npm install -D parcel-bundler (-D : permet d'installer une dépendence en mode développement)
 * npx : Node Package eXecute
 * npx -v (voir la version de npx)
 * 
 * npx parcel public/index.html (Permet de lancer le serveur de développement)
 * npx parcel build public/index.html (Permet de compresser outs fichiers en seul fichier utilisable)
 * 
 * dans "package.json" on peut crééer des raccourcis de commande d exécution dans la clé "scripts" :
 * "start" : "parcel public/index.html" // lancer le serveur => npm start
 * "build" : "parcel build public/index.html" // compresser tous les fichers => npm run build
 * 
 */

import React, {Component} from "react";
import {render} from "react-dom";
import "./style.css";

class ParcelHome extends Component {
    render() {
        return <>
            <div>
                <h1>Ma première fois  avec Parcel dans React</h1>
                <h4>Hello world !</h4>
            </div>
        </>
    }
}

render(<ParcelHome />, document.getElementById('root'))

