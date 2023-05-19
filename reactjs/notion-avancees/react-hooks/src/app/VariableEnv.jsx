/**
 * 
 */

import { getPublicAbsoluteUrl } from "../helpers"

export function GetPublicLogo192() {
    const path = process.env.PUBLIC_URL + "/images"
    // console.log(path)

    return <>
        <p className="mt-3">1 - Affichage d'une image venant du dossier public (méthode 1)</p>
        <div>
            <img src={path+"/logo192.png"} alt="" /> 
        </div>
    </>
}

export function GetPublicLogo512() {
    const logo = getPublicAbsoluteUrl("/images/logo512.png")

    return <>
        <p className="mt-3">2 - Affichage d'une image venant du dossier public (méthode 2)</p>
        <div>
            <img src={logo} alt="" style={{width: "250px"}} /> 
        </div>
    </>
}