import Header from "../templates/Header"
import Home from "../pages/Home"
import Character from "../pages/Character"
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"
import Footer from "../pages/Footer"


// rutas que vamos a manejar
const routes = {
    "/": Home,
    "/:id": Character,
    "/contact": "Contact"
}

// el router

const router = async () => {
    // cuando se vaya a header o es un null o es el header
    const header = null || document.getElementById("header")
    const content = null || document.getElementById("content")
    // en header hacemos render del template "header"
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}

export default router