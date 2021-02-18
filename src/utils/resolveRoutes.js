const resolveRoutes = (route) => {
    // si la ruta es menor o igual a 3
    if(route.length <= 3){
        let validRoute = route === "/" ? route : "/:id"
        return validRoute
    }
    return `/${route}` // about
}

export default resolveRoutes