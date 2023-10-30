/**
 * Les hooks useMemo et useCallback :
 * Permettent d'optimiser les performances d'une application
 * 
 * useMemo : permet de garder/stocker en memoire une valeur
 * useCallback : permet de garder/stocker en mémoire une fonction q'on pourra appeler plus tard
 */

import React, { 
    useCallback, 
    useMemo, 
    useLayoutEffect, 
    useReducer, 
    useState,
    useRef 
} from "react";
import { notifyToTopRight } from "../services/notifications/Toastify";

export const MyButton1 = (props) => {
    return <>
        <button className={props.className}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    </>
}

export const MyButton2 = React.memo(({label, className, onClick}) => {
    
    console.log('render')

    return <>
        <button className={className}
            onClick={onClick}
        >
            {label}
        </button>
    </>
})

// useMemo
export function PerformanceUseMemo() {
    const [count, setCount] = useState(0)

    const test = useMemo(() => {
        // return fn
    }, [])

    const handleClick = useMemo(() => {
        return (e) => {
            e.preventDefault()
            notifyToTopRight('info', "Bonjour, ceci est une notification !")
        }
    }, [])

    return <>
        <div className="mb-3">
            <p className="text-white mt-3">1 - useMemo : permet de garder/stocker en memoire une valeur</p>
            <MyButton1 
                label={"Bouton 1 - Incrémentation : " + count}
                className="btn btn-info btn-sm me-2"
                onClick={() => setCount((c) => c + 1)}
            />

            <MyButton2 
                label="Bouton 2 - Notification (useMemo)"
                className="btn btn-primary btn-sm me-2"
                onClick={handleClick}
            />
        </div>
    </>
}

// useCallback
export function PerformanceUseCallback() {
    const [count, setCount] = useState(10)

    const handleClick = useCallback((e) => {
        e.preventDefault()
        notifyToTopRight('info', "Hello world !(count : "+ count + ")")
    }, [count])

    return <>
        <div className="mb-3">
            <p className="text-white mt-3">2 - useCallback : permet de garder/stocker en memoire une fonction qu'on pourra utiliser plus tard</p>

            <MyButton1 
                label={"Bouton 1 - Incrémentation : " + count}
                className="btn btn-success btn-sm me-2 py-1"
                onClick={() => setCount((c) => c + 1)}
            />

            <MyButton2 
                label="Bouton 2 - Notification (useCallback)"
                className="btn btn-danger btn-sm me-2 py-1"
                onClick={handleClick}
            />
        </div>
    </>
}

// useRef (React.createRef)
export function PerformanceUseRef() {
    // création de la référence
    const inputElt = useRef(null)
    const compteur = useRef({count: 0})

    const handleClick = (e) => {
        e.preventDefault()
        // console.log(inputElt.current.value)

        // stockage d'une valeur en utilisant useRef
        compteur.current.count++;
        console.log(compteur)
    }

    return <>
        <div className="mb-3">
            <p className="text-white mt-3">1 - useRef : peut etre utilisé pour récupérer la référence d'un élément dans le DOM et permet aussi de stocker une valeur qui n'est pas nécessaire pour le rendu</p>
            <input type="text" 
                className="form-control"
                ref={inputElt}
            />
            <MyButton1 
                label={"Get input value"}
                className="btn btn-primary btn-sm me-2 py-1"
                onClick={handleClick}
            />
        </div>
    </>
}

/**
 * le useEffect : est un hook qui est asynchrone
 * le useLayoutEffect : est un hook est qui est synchrone
 */
// useLayoutEffect
export function PerformanceUseLayoutEffect() {
    const spanElt = useRef(null)
    const [count, setCount] = useState(0)
    
    const incrementer = (e) => {
        e.preventDefault()
        setCount((c) => c + 1)
    }

    useLayoutEffect(() => {
        if(count % 2 === 0) {
            spanElt.current.style.color = "green"
        } else {
            spanElt.current.style.color = "red"
        }
    }, [count])

    return <>
        <div className="mb-3">
            <p className="mt-3">1 - useLayoutEffect : est synchrone (donc est plus adapter pour intéragir avec le DOM)</p>

            <button className="btn btn-light btn-sm"
                onClick={incrementer}
            >
                <span ref={spanElt}>Incrémentation (useLayoutEffect) : {count}</span>
            </button>
        </div>
    </>
}

/**
 * exercice avec useState
 */
export function CompteurDecompteurUseState() {
    const [count, setCount] = useState({
        initialValue: 100, step: 10
    })

    const incrementer = (e) => {
        e.preventDefault()
        setCount({
            ...count,
            initialValue: count.initialValue + count.step
        })
    }

    const decrementer = (e) => {
        e.preventDefault()
        setCount({
            ...count,
            initialValue: count.initialValue - count.step
        })
    }

    const reset = (e) => {
        e.preventDefault()
        setCount({
            ...count,
            initialValue: 100
        })
    }

    return <>
        <div className="mb-3">
            <p className="mt-3">1 - Compteur décompteur avec useState</p>
            <div className="mb-2">Compteur : {count.initialValue}</div>
            <MyButton1 
                label={"- " + count.step}
                className="btn btn-danger btn-sm me-2 py-1"
                onClick={decrementer}
            />

            <MyButton1 
                label={"Reset (0)"}
                className="btn btn-warning btn-sm me-2 py-1"
                onClick={reset}
            />

            <MyButton1 
                label={"+ " + count.step}
                className="btn btn-success btn-sm me-2 py-1"
                onClick={incrementer}
            />
        </div>
    </>
}

/**
 * le hook useReducer prend 3 paramètres
 * 1 - la fonction réductrice pour décrire les mutation possible (obligatoire)
 * 2 - la valeur initiale de l'état qui est un {objet} (obligatoire)
 * 3 - une fonction  d'initialisation pour faire des traitement particulier (facultatif)
 */

// la fonction réductrice (le 1er paramètre)
// state = {count: 0, message: ""} cest encre le 2ème paramètre de useReducer
// action = {type: "incrementer" | "decrementer" | "reset", step: 10}
function reducer(state, action)  {
    const {type, step} = action;

     // action.type
    switch (type) {
        case "incrementer" :
            return {
                ...state,
                count: state.count + step
            }
        
        case "decrementer" :
            return {
                ...state,
                count: state.count - step
            }

        case "reset" :
            // return {...state, count: 0}
            return init({...state, count: 0})

        default :
            return {
                ...state,
                message: notifyToTopRight('error', "L'action ("+ type + ") est incconue !")
            }
            // throw new Error("L'action ("+ type + ") est incconue !")
    }
}

// le 3ème paramètre
function init(initialValue) {
    return initialValue
}

// useReducer
export function CompteurDecompteurUseRecuder() {
    const incStep = 10
    const decStep = 5

    // dispatch : prend en paramètre l'action de la fonction reducer
    const [compteur, dispatch] = useReducer(
        reducer,
        {count: 0, message: ""},
        init
    )
    
    return <>
        <div className="mb-3">
            <p className="mt-3">2 - Compteur décompteur avec useReducer</p>
            <div className="mb-2">Compteur : {compteur.count}</div>
            <MyButton1 
                label={"-"+ decStep}
                className="btn btn-danger btn-sm me-2 py-1"
                onClick={() => dispatch({
                    type: "decrementer",
                    step: decStep
                })}
            />

            <MyButton1 
                label={"Reset (0)"}
                className="btn btn-warning btn-sm me-2 py-1"
                onClick={() => dispatch({
                    type: "reset",
                })}
            />

            <MyButton1 
                label={"+"+ incStep}
                className="btn btn-success btn-sm me-2 py-1"
                onClick={() => dispatch({
                    type: "incrementer",
                    step: incStep
                })}
            />
        </div>
    </>
}