import { useState, useEffect } from 'react'
import axios from 'axios'





export function useAxiosGet(url) {
    const [itens, showItens] = useState({
        loading: false,
        data: null,
        error: false,

    })

    useEffect(() => {
        showItens({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url)
            .then(resposta => {
                showItens({
                    loading: false,
                    data: resposta.data,
                    error: false,
                })
            })
            .catch(() => {
                showItens({
                    loading: false,
                    data: null,
                    error: true,
                })

            })

    }, [url])

    return (itens)

}

