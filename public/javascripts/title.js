//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Home"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404") {
    setInterval(() => {
        document.title =
            alertShow ? "404"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Login") {
    setInterval(() => {
        document.title =
            alertShow ? "Login"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Añadir Producto") {
    setInterval(() => {
        document.title =
            alertShow ? "Añadir Producto"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "productCart") {
    setInterval(() => {
        document.title =
            alertShow ? "productCart"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "DetalleDelProducto") {
    setInterval(() => {
        document.title =
            alertShow ? "DetalleDelProducto"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Registro") {
    setInterval(() => {
        document.title =
            alertShow ? "Registro"
                : "playOnCave"

        alertShow = !alertShow
    }, 1000)
}
