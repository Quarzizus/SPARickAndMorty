import getData from "../utils/getData"

const Home = async() => {
    const characters = await getData()
    const view = `
    <div class="characters">
    ${characters.results.map(character => `
        <article class="character-item">
            <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}"></a>
            <h2>${character.name}</h2>
        </article>
    `).join(' ')}
    </div> 
    `
    /* join es para cuando se hace un metodo en un arreglo,
    me arroje todo sin separarlo, de tal forma tengo esto 
    numeros = [1,2,3].join(' ')
    es igual a 123*/
    return view
}

export default Home