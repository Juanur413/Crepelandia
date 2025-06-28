document.getElementById("form-producto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    let imagen = document.getElementById("imagen").value.trim();
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const categoria = document.getElementById("categoria").value;

    // 💡 Corregir ruta de imagen si es una imagen local (no comienza con http ni ./images/)
    if (!imagen.startsWith("http") && !imagen.startsWith("./images/")) {
        imagen = "./images/" + imagen;
    }

    const producto = {
        nombre,
        imagen,
        precio,
        descripcion,
        categoria
    };

    // Guardar en localStorage
    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosGuardados));

    // Redireccionar al index para visualizarlo
    window.location.href = "index.html";
});
