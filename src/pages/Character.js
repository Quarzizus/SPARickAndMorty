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
            <article class="Characters-card">
                <h3>${character.name}</h3>
                <h3>${character.status}</h3>
                <h3>${character.species}</h3>
                <h3>${character.gender}</h3>
                <h3>${character.origin.name}</h3>
                <h3>${character.location.name}</h3>
                <h3>${character.episode.length}</h3>
            </article>
      
        </div>
    `

    return view
}

export default Character