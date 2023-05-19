/**
 * Utilisation de React toastify
 * Lien : https://www.npmjs.com/package/react-toastify
 * 
 * pour installer react toastify : 
 * npm install --save react-toastify
 * OU
 * yarn add react-toastify
 */

import { Button } from '@mui/material'
import {toast} from 'react-toastify'
import { notifyToTopRight } from '../services/notifications/Toastify'

export function NotificationSimple1() {
    const notif = () => toast("Vous venez de cliquer sur le bouton !")

    return <>
        <div className='mb-3'>
            <p className='mt-3'>1 - Simple message de notif react toastify (sans couleur de fond, avec position par défaut)</p>

            <Button variant="contained"
                onClick={notif}
            >
                Cliquez ici pour être notifié
            </Button>

        </div>
        {/* <ToastContainer /> */}
    </>
}

export function NotificationSimple2() {
    const notif = () => toast.error("Echèc d'enregistrement !", {
        position: toast.POSITION.TOP_CENTER
    })

    return <>
        <div className='mb-3'>
            <p className='mt-3'>2 - Simple message de notif react toastify (avec couleur de fond, positionné au centre)</p>
            <Button variant="contained"
                color="error"
                onClick={notif}
            >
                Cliquez pour afficher l'erreur
            </Button>
        </div>
    </>
}

export function NotificationPersonnalisee() {
    const notif = () => {
        notifyToTopRight('success', "Reussi : Utilisateur enregistré avec succès !")
    }

    return <>
        <div className='mb-3'>
            <p className='mt-3'>3 - Notification personnalisée toastify</p>
            
            <Button variant="contained"
                color="success"
                onClick={notif}
            >
                Cliquez pour enregistrer
            </Button>
        </div>
    </>
}

