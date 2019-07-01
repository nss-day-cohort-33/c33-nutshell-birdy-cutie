const API = {
    getData(entity, id){
        if(id){
            return fetch(`http://localhost:8088/${entity}/${id}`)
            .then(response => response.json())
        }
        return fetch(`http://localhost:8088/${entity}`)
        .then(response => response.json())
    }
}

export {API}