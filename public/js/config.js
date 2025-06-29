// Configuración del backend
const API_BASE_URL = 'https://crepelandia-production.up.railway.app';
const API_ENDPOINTS = {
    productos: `${API_BASE_URL}/productos`
};

// Función para manejar errores de fetch
async function handleApiResponse(response) {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

// Función para hacer peticiones a la API
async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        return await handleApiResponse(response);
    } catch (error) {
        console.error('Error en petición API:', error);
        throw error;
    }
} 