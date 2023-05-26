import { useParams } from "react-router-dom"
import {users} from '../../data/users';

export function Profile() {

    const paramId = useParams()
    console.log(paramId)

    console.log(users)

    // utiliser la fonction find pour récupérer 
    // les informations de l'utilisateur dont l'id est passé en paramètre

    return <>
        <h1>Bienvenu sur votre tableau de bord</h1>
        <h3>Bonjour, </h3>
    </>
}