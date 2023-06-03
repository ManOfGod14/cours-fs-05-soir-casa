/**
 * Hook Fetch Data
 */

import { useEffect, useState } from "react"

export function useFetchAjax(apiUrl) {
    const [apiData, setApiData] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl)
            const resData = await response.json()

            if(response.ok) {
                setApiData({
                    loading: false,
                    data: resData
                })
            } else {
                alert("Echèc de récupération des données !")
                setApiData({
                    loading: false,
                    data: []
                })
            }
        })()
    }, [])

    return [apiData.loading, apiData.data]
}