import dataJson from '../localStorage/distritos.json'

export async function fetchJSON(id){
    let iten = dataJson[id]
    return (iten)
}

