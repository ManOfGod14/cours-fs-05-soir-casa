// document.querySelector("body").innerHTML = "<h1>Découverte de react</h1>"

let cpt = 0;

// utilisation de simple js
function fnMonElementAvecSimpleJS() {
    document.querySelector("#app").innerHTML = "<h1>Découverte de react : <span>"+ cpt +"</span></h1>"
}

// utilisation avec react
function fnMonElementAvecReact() {
    // paramètres : tag/elemetnt, options (attributes), les enfants (contenu)
    let span = React.createElement('span', {}, cpt);
    const titre = React.createElement('h1', {}, "Découverte de react : ", span);

    // paramètres : element react, emplacement dans le DOM
    ReactDOM.render(titre, document.querySelector("#app"));
}

function numberFormatMaliki(n) {
    return n.toString().padStart(2, '0');
}

/***
 * La syntaxe JSX : Js s eXecution
 */
function fnMonElementAvecJSX() {
    const tabTaches = [
        "Tâche 1",
        "Tâche 2",
        "Tâche 3",
        "Tâche 4",
        "Tâche 5",
    ]

    const renduHtml = <React.Fragment>
        <h1>Découverte de react : <span>{ (cpt % 2) ? numberFormatMaliki(cpt) : null }</span></h1>
        <h3>Ma liste de tâches :</h3>
        <ul>
           {
                tabTaches.map((item, index) => {
                    return <li key={"tache"+ index}>{item}</li>
                })
           } 
        </ul>
    </React.Fragment>

    ReactDOM.render(renduHtml, document.querySelector("#app"));
}

// exécution de la fonction
fnMonElementAvecJSX();
window.setInterval(() => {
    cpt++;
    fnMonElementAvecJSX();
}, 1000);
