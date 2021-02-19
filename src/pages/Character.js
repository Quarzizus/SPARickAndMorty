import getData from "../utils/getData"
import getHash from "../utils/getHash"
const Character = async () =>{
    const id = getHash()
    const character = await getData(id)
    const view = `
        <div class="Character-inner">  
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
            </article>
            <article class="Characters-card-details">
                <h3 class="name">${character.name}</h3>
                <h3>Status: ${character.status}</h3>
                <h3>Specie: ${character.species}</h3>
                <h3>Gender: ${character.gender}</h3>
                <h3>Origin: ${character.origin.name}</h3>
                <h3>Location: ${character.location.name}</h3>
                <h3>Episodies: ${character.episode.length}</h3>
            </article>
      
        </div>
    `

    return view
}

export default Character