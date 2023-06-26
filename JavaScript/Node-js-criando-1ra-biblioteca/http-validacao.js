function extraiLinks(arrLinks){ 
    return arrLinks.map((objetoLinks) => Object.values(objetoLinks).join());
}

function manejaErros(erro) {
    if(erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    }
    else {
        return 'ocorreu um erro'
    }
 }

async function checaStatus(listaURLs) {
    const arrURLs = await Promise
    .all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                    return `${response.status} - ${response.statusText}`;
            }      
            catch(erro) {
                return manejaErros(erro)
            }
        }) 
        
    )

    return arrURLs;
}



export default async function validaLinks(listaLinks) {
    const links = extraiLinks(listaLinks);
    const cods = await checaStatus(links);
    
    return listaLinks.map((objlink, indice) => ({
        ...objlink, 
        status: cods[indice]
    }))
}