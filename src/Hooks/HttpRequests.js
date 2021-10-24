import { useState, useEffect } from 'react'
import axios from 'axios'

export async function useAxiosGet(url) {
    let itens
    await axios.get(url)
            .then(resposta => {
             itens = resposta   
            })
    // const [itens, showItens] = useState({
    //     loading: false,
    //     data: null,
    //     error: false,

    // })

    // useEffect(() => {
    //     showItens({
    //         loading: true,
    //         data: null,
    //         error: false,
    //     })
    //     axios.get(url)
    //         .then(resposta => {
    //             showItens({
    //                 loading: false,
    //                 data: resposta.data,
    //                 error: false,
    //             })
    //         })
    //         .catch(() => {
    //             showItens({
    //                 loading: false,
    //                 data: null,
    //                 error: true,
    //             })

    //         })

    // }, [itens])

    return (itens)

}

