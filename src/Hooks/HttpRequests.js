import axios from 'axios'

export async function useAxiosGet(url) {
    let itens
    await axios.get(url)
            .then(resposta => {
             itens = resposta   
            })
    return (itens)

}

