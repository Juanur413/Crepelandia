    (function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // ---------------------------------------------------
    // Lógica actualizada para mostrar productos del backend
    // ---------------------------------------------------
    window.addEventListener("DOMContentLoaded", async () => {
        const menuCards = document.getElementById("menu-cards");
        if (!menuCards) return;

        try {
            const productos = await apiRequest(API_ENDPOINTS.productos);
            
            if (productos.length === 0) {
                menuCards.innerHTML = "<p class='no-products'>No hay productos disponibles en este momento.</p>";
                return;
            }

            // Limpiar productos existentes (opcional, para evitar duplicados)
            const existingProducts = menuCards.querySelectorAll('.about__icons[data-product-id]');
            existingProducts.forEach(product => product.remove());

            productos.forEach(producto => {
                const nuevoArticulo = document.createElement("article");
                nuevoArticulo.classList.add("about__icons");
                nuevoArticulo.setAttribute('data-product-id', producto.id);

                nuevoArticulo.innerHTML = `
                    <img src="${producto.imagen_url}" alt="${producto.nombre}" class="about__icon" onerror="this.src='./images/default-product.jpg'">
                    <h3 class="about__title">${producto.nombre}</h3>
                    <p class="about__paragraph">${producto.descripcion}</p>
                    <p class="about__price">$${producto.precio.toLocaleString()}</p>
                `;

                menuCards.appendChild(nuevoArticulo);
            });

        } catch (error) {
            console.error("Error al cargar productos desde el backend:", error);
            menuCards.innerHTML = `
                <div class="error-message">
                    <p>Error al cargar los productos: ${error.message}</p>
                    <button onclick="location.reload()" class="retry-button">Reintentar</button>
                </div>
            `;
        }
    });
    })();
