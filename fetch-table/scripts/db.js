const apiUrl = 'https://nettuts.hu/jms/Potyeszka/';

export const getAll = (entity = 'products') =>{
    return fetch(`${apiUrl}${entity}`)
    .then(response => response.json());
};
export const remove = (id=0,entity = 'products') =>{
    return fetch(`${apiUrl}${entity}/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json());
};