/**
 * Hook Incrementation
 */

import { useState } from "react";

export function useIncrementer(initial = 0, step = 1) {
    const [count, setCount] = useState(initial)

    // fonction pour changer l'état
    const incrementer = () => {
        setCount(c => c + step)
    }

    return [count, incrementer]
}

//
export function useToggleIncrementer(checkValue = true) {
    const [value, setValue] = useState(checkValue)

    const toggle = function() {
        setValue(v => !v)
    }

    return [value, toggle]
}