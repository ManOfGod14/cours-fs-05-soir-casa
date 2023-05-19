/**
 * Les hooks useMemo et useCallback :
 * Permettent d'optimiser les performances d'une application
 * 
 * useMemo : permet de garder/stocker en memoire une valeur
 * useCallback : permet de garder/stocker en mémoire une fonction q'on pourra appeler plus tard
 */

import React, { useState, useMemo } from "react"
import { notifyToTopRight } from "../services/notifications/Toastify"

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