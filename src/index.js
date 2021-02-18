import router from "./routes/index"
// cuando carga por primera vez
window.addEventListener("load", router )
// cuando hay un cambio en el hash
window.addEventListener("hashchange", router)