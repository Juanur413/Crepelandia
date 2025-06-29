document.getElementById("form-producto").addEventListener("submit", async function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  let imagen = document.getElementById("imagen").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();
  const categoria = document.getElementById("categoria").value;

  // Validación del lado del cliente
  if (!nombre || !imagen || !precio || !descripcion || !categoria) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (precio <= 0) {
    alert("El precio debe ser mayor a 0.");
    return;
  }

  // Ajuste si el usuario escribe solo el nombre de la imagen
  if (!imagen.startsWith("http") && !imagen.startsWith("./images/")) {
    imagen = "./images/" + imagen;
  }

  const producto = {
    nombre,
    descripcion,
    precio,
    categoria,
    imagen_url: imagen
  };

  // Mostrar indicador de carga
  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Creando...";
  submitButton.disabled = true;

  try {
    const result = await apiRequest(API_ENDPOINTS.productos, {
      method: "POST",
      body: JSON.stringify(producto)
    });

    alert("Producto creado exitosamente.");
    window.location.href = "index.html";  // Redirigir después de guardar
    
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    alert("Error al crear producto: " + error.message);
  } finally {
    // Restaurar el botón
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
});
