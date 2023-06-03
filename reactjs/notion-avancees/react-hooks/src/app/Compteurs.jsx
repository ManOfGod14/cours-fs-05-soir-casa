/**
 * le hook useState : permet de gérer les états
 */

import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useIncrementer } from "../services/customHooks/useIncrementation"

export function Compteur1() {
    const [count, setCount] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        setCount(10)
    }

    return <>
        <p className="mt-3">
            1 - Initialisation du useState avec une valeur simple
        </p>
        <Button variant="primary" size="sm" onClick={handleClick}>
            Changer l'état : {count}
        </Button>
    </>
}

// sans fusion d'états
export function Compteur2() {
    const [compteur, setCompteur] = useState({count: 0})

    const handleClick = (e) => {
        e.preventDefault()
        setCompteur({count: 20})
    }

    return <>
        <div onClick={handleClick}>
            <p className="mt-3">
                2 - Initialisation du useState avec un objet (sans fusion des états)
            </p>
            {JSON.stringify(compteur)}
        </div>
    </>
}

// avec fusion d'états
export function Compteur3() {
    const [compteur, setCompteur] = useState({
        count1: 0, 
        count2: 1
    })

    const handleClick = (e) => {
        e.preventDefault()
        setCompteur({...compteur, count3: 3})
    }

    return <>
        <div onClick={handleClick}>
            <p className="mt-3">
                3 - Initialisation du useState avec un objet (avec fusion des états)
            </p>
            {JSON.stringify(compteur)}
        </div>
    </>
}

// plusieurs appels de useState
export function Compteur4() {
    const [compteur1, setCompteur1] = useState(0)
    const [compteur2, setCompteur2] = useState(0)

    const handleClick1 = (e) => {
        e.preventDefault()
        setCompteur1((c1) => {
            return c1 + 1
        })
    }

    const handleClick2 = (e) => {
        e.preventDefault()
        setCompteur2(c2 => c2 + 2)
    }

    return <>
        <p className="mt-3">
            4 - Faire plusieurs appels à useState
        </p>

        <Button variant="primary" size="sm" className="me-2 mb-3" onClick={handleClick1}>
            Incrémentation 1 : {compteur1}
        </Button>

        <Button variant="primary" size="sm" className="me-2 mb-3" onClick={handleClick2}>
            Incrémentation 2 : {compteur2}
        </Button>
    </>
}

// plusieurs appels de useState avec un hook personnalisé
export function Compteur5() {
    const [count1, incrementer1] = useIncrementer(0, 2)
    const [count2, incrementer2] = useIncrementer(10, 4)

    return <>
        <p className="mt-3">
            5 - Faire plusieurs appels à useState avec un hook personnalisé
        </p>

        <Button variant="success" size="sm" className="me-2 mb-3" onClick={incrementer1}>
            Incrémentation 1 : {count1}
        </Button>

        <Button variant="success" size="sm" className="me-2 mb-3" onClick={incrementer2}>
            Incrémentation 2 : {count2}
        </Button>
    </>
}

/**
 * Le hook useEffect
 * a nous permettre de gérer le montage, démontage des composant
 * ca va nous permettre aussi de gérer les éffets de bord par rapport à notre composant
 */
export function Compteur6() {
    // initialiser le hook useIncrementer à 0 et le step = 4
    const [count , incrementer] = useIncrementer(0, 4)

    // document.getElementById('pId6').innerText = "Compteur : "+ count

    // useEffect nous permet de controller le changement de la balise "p" en prennant en compte le changement d'état
    useEffect(() => {
        document.getElementById('pId6').innerText = "1 - Utilisation de useEffect sans le second paramètre (count : "+ count  +")"
    })

    return <>
        <p className="mt-3" id="pId6"></p>
        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation : {count}
        </Button>
    </>
}

export function Compteur7() {
    const [count , incrementer] = useIncrementer(10, 10)
    
    useEffect(() => {
        document.getElementById('pId7').innerText = "2 - Utilisation de useEffect avec le second paramètre vide (count : "+ count  +")"
    }, []) // si le second paramètre est vide le useEffect va effectuer le changement lors du 1er montage du composant après rien ne se passe

    return <>
        <p className="mt-3" id="pId7"></p>
        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation : {count}
        </Button>
    </>
}

export function Compteur8() {
    const [count, incrementer] = useIncrementer(10, 5)

    useEffect(() => {
        document.getElementById('pId8').innerText = "3 - Utilisation de useEffect avec le second paramètre non vide : le useEffect depend du changement d'état (count : "+ count  +")"
    }, [count])

    return <>
        <p className="mt-3" id="pId8"></p>
        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation : {count}
        </Button>
    </>
}

export function Compteur9() {
    const [count, incrementer] = useIncrementer(10, 5)

    // ueseEffect doit retourner toujours une fonction
    useEffect(function() {
        const timer = window.setInterval(() => {
            incrementer()
        }, 1000)

        // cette fonction nous permet de supprimer le timer une fois que le composant a été demonté
        return function() {
            window.clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        document.getElementById('pId9').innerText = "4 - Utilisation de useEffect avec le second paramètre non vide : auto incrementation (count : "+ count  +")"
    }, [count])

    return <>
        <p className="mt-3" id="pId9"></p>
        <Button variant="danger" size="sm" className="me-2">
            Incrémentation : {count}
        </Button>
    </>
}