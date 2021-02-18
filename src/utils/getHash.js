const getHash = () => {
    // si teníamos esto #/1/ con slice
    // nos quedaría solo el id que en este caso es 1
    // y lo convertimos a minuscula 
    /* split me convierte en un array con cada elemento
     con el parametro lo que hace es eliminar el /, dejando
     en el aire así ["", "1", ""]*/
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] ||
    "/"
}

export default getHash