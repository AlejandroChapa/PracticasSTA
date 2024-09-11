// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtén los elementos del DOM
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');
    const result = document.querySelector('.result');

    // Maneja el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const title = input.value.trim();
        if (title) {
            fetchMovieData(title);
        }
    });

    // Función para obtener los datos de la película
    function fetchMovieData(title) {
        const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu clave API de OMDB
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    result.innerHTML = `
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Año:</strong> ${data.Year}</p>
                    `;
                } else {
                    result.innerHTML = `<p>Película no encontrada.</p>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                result.innerHTML = `<p>Error al obtener los datos.</p>`;
            });
    }
});
