(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // -----------------------------------------------
    // Lógica para mostrar productos desde localStorage
    // -----------------------------------------------
    window.addEventListener("DOMContentLoaded", () => {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        const menuCards = document.getElementById("menu-cards");

        if (!menuCards) return; // Protección por si el ID no está presente

        productos.forEach(producto => {
            const nuevoArticulo = document.createElement("article");
            nuevoArticulo.classList.add("about__icons");

            nuevoArticulo.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="about__icon">
                <h3 class="about__title">${producto.nombre}</h3>
                <p class="about__paragraph">${producto.descripcion}</p>
            `;

            menuCards.appendChild(nuevoArticulo);
        });
    });

})();
