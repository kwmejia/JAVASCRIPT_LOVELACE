(() => {
    //Obtenemos la sesión del usuario del localStorage
    const isAuthorizated = localStorage.getItem("isAuthorizated")
    //Obtengo la ruta donde el usuario quiere acceder
    const path = window.location.pathname;

    //Corto el path para accede solamente al archivo que el usuario está intentando acceder
    const routeActive = path.substring(path.lastIndexOf("/") + 1)

    //Creo una lista con el nombre de todas las vistas que quiero proteger
    const privateRoutes = ["administrator.html"]

    //Si la ruta actual está en la lista de la rutas protegidas y no está autorizado entonces lo redirige al login
    if (privateRoutes.includes(routeActive) && !isAuthorizated) {
        window.location.href = "index.html"
    }
})()