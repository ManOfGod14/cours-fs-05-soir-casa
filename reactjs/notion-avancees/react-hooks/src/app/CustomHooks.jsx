/**
 * Le hooks personnalisés
 */

import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    FormGroup 
} from '@mui/material'
import { pink } from '@mui/material/colors'
import { useIncrementer, useToggleIncrementer } from '../services/customHooks/useIncrementation'
import { useEffect, useState } from 'react'
import { useFetchAjax } from '../services/customHooks/useFetchData'

export function CustomCompteur1() {
    const [count, incrementer] = useIncrementer(20, 10)
    const [showCompteur, toggleCompteur] = useToggleIncrementer(true)

    const label = (showCompteur) ? "Cacher le compteur" : "Afficher le compteur"
    
    return <>
        <p className="mt-3">1 - Compteur avec checkbox (Afficher/Cacher)</p>
        <FormGroup>
            <FormControlLabel 
                label={label}
                control={<Checkbox 
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                    checked={showCompteur}
                    onChange={toggleCompteur}
                />}
            />
        </FormGroup>

        {
            (showCompteur)
            ?
            <Button variant="contained" onClick={incrementer}>
                Incrementation : {count}
            </Button>
            :
            ""
        }
        
    </>
}

// utilisation de l'api json placeholder
export function TodoListUnsingAjax() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            console.log(response)

            const data = await response.json()
            console.log(data)

            if(response.ok) {
                setTodos(data)
                // setLoading(false) // solition 1
            } else {
                alert("Echèc de récupération des donnés !")
                // setLoading(false) // solition 1
            }

            setLoading(false) // solition 2
        })()
    }, [])

    // todos c'est les données retournées par l'api
    // console.log(todos)

    if(loading) {
        return <p className='mt-3'>
            <span className='text-warning'>En cours de chargement ...</span>
        </p>
    }

    return <>
        <p className="mt-3">2 - Affichage d'une todo list avec utilisation d'Ajax</p>
        <ul>
            {
                todos.map((item, index) => {
                    return <li key={"li_"+index} className='text-primary'>
                        {item.title}
                    </li>
                })
            }
        </ul>
    </>
}


export function CommentList() {
    const [loading, comments] = useFetchAjax("https://jsonplaceholder.typicode.com/comments?_limit=10")
    
    if(loading) {
        return <p className='mt-3'>
            <span className='text-warning'>En cours de chargement ...</span>
        </p>
    }

    return <>
        <p className="mt-3">3 - Affichage de comment list avec utilisation d'Ajax</p>
        <div className='table-responsive'>
            <table className="table table-bordered text-white">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((item, index) => {
                            return <tr key={"tr_"+index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}
