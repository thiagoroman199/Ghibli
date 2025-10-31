// ------------------- Home Page -------------------
async function fetchFilms() {
    const container = document.getElementById('cards-container');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error-message');

    try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        if (!res.ok) throw new Error('Error al cargar la API');
        const data = await res.json();

        loading.style.display = 'none';

        // Muestra mínimo 6 cards
        data.slice(0, 6).forEach(film => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${film.image}" alt="${film.title}">
                <div class="card-content">
                    <h3>${film.title}</h3>
                    <p>Director: ${film.director}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        loading.style.display = 'none';
        error.textContent = err.message;
    }
}

if(document.getElementById('cards-container')){
    fetchFilms();
}

// ------------------- Contact Form -------------------
const form = document.getElementById('contact-form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const tema = document.getElementById('tema').value;
        const contacto = form.contacto.value;

        if(!nombre || !email || !mensaje || !tema || !contacto){
            alert('Por favor completa todos los campos obligatorios.');
            return;
        }

        alert('Formulario enviado con éxito. Gracias!');
        form.reset();
    });
}
