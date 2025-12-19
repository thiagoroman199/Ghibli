/* =========================================
   MENU RESPONSIVE & INICIALIZACION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Menu
    const navToggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("menu");

    if (navToggle && menu) {
        navToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }

    // identificar página y ejecutar funciones específicas
    if (document.getElementById("cards-container")) {
        fetchFilms();
        setupModal();
    }
    
    if (document.getElementById("upload-form")) {
        setupUploadForm();
    }

    if (document.getElementById("contact-form")) {
        setupContactForm();
    }
});

/* =========================================
   HOME: API + LOCALSTORAGE + TOP 3
   ========================================= */
async function fetchFilms() {
    const container = document.getElementById("cards-container");
    const popularContainer = document.getElementById("popular-container");
    const topSection = document.getElementById("top-section");
    const loading = document.getElementById("loading");

    try {
        // 1. Obtener datos API
        const res = await fetch("https://ghibliapi.vercel.app/films");
        let apiData = [];
        if (res.ok) apiData = await res.json();

        // 2. Obtener datos LocalStorage
        const localData = JSON.parse(localStorage.getItem("ghibliLocalFilms")) || [];

        // 3. Limpiar Loading
        if (loading) loading.style.display = "none";
        container.innerHTML = "";
        popularContainer.innerHTML = "";

        // === LOGICA TOP 3 ===
        // se ordena por rt_score de mayor a menor
        const popularData = [...apiData]
            .sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score))
            .slice(0, 3);
            
        // Renderizar Top 3 si hay datos
        if (popularData.length > 0) {
            topSection.style.display = "block"; 
            
            // Pasamos rank (index + 1) para mostrar "Top #1", "Top #2" y a si
            popularData.forEach((film, index) => {
                const card = createCardHTML(film, { isPopular: true, rank: index + 1 });
                popularContainer.appendChild(card);
            });
        }

        // === LISTADO GENERAL ===
        const filmsToShow = [...localData.map(f => ({...f, isLocal: true})), ...apiData.slice(0, 9)];

        filmsToShow.forEach(film => {
            const card = createCardHTML(film, { isPopular: false });
            container.appendChild(card);
        });

    } catch (error) {
        if(loading) loading.textContent = "Error cargando películas. Verifica tu conexión.";
        console.error(error);
    }
}

function createCardHTML(film, options = {}) {
    // se leen las opciones por si es Popular y su ranking
    const { isPopular, rank } = options;
    const imgUrl = film.movie_banner || film.image; 
    
    const card = document.createElement('div');
    card.className = "card";
    
    let badgeHTML = '';
    
    // Si es popular, se muestra el ranking y score
    if (isPopular) {
        // texto limpio
        badgeHTML = `<span class="badge-top">Top #${rank} • ${film.rt_score}% Score</span>`;
    } 
    // Si es local, se muestra badge "Tuya"
    else if (film.isLocal) {
        badgeHTML = `<span class="badge-local">★ Tuya</span>`;
    }
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${imgUrl}" alt="${film.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x337?text=Sin+Imagen'">
            ${badgeHTML}
            <span class="card-btn">Ver Detalles</span>
        </div>
        <div class="card-content">
            <h3>${film.title}</h3>
            <div class="card-director">${film.director}</div>
            <p class="card-desc">${film.description}</p>
        </div>
    `;

    // Click para abrir modal
    card.addEventListener("click", () => openModal(film, imgUrl));

    return card;
}

/* =========================================
   MODAL (POPUP)
   ========================================= */
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDirector = document.getElementById("modal-director");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");

function setupModal() {
    const closeBtn = document.getElementById("modal-close");
    
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
}

function openModal(film, imgUrl) {
    if (!modalOverlay) return;
    modalTitle.textContent = film.title;
    modalDirector.textContent = `Director: ${film.director}`;
    modalDesc.textContent = film.description;
    modalImg.src = imgUrl;
    modalOverlay.classList.add("active");
}

function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove("active");
}

/* =========================================
   CARGAR PELÍCULA
   ========================================= */
function setupUploadForm() {
    const form = document.getElementById("upload-form");
    if(!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = document.getElementById("titulo-pelicula").value.trim();
        const director = document.getElementById("director-pelicula").value.trim();
        const imagen = document.getElementById("imagen-pelicula").value.trim();
        const descripcion = document.getElementById("descripcion-pelicula").value.trim();

        if (!titulo || !director || !imagen || !descripcion) {
            alert("Completa todos los campos");
            return;
        }

        const nueva = { 
            id: Date.now(), 
            title: titulo, 
            director: director, 
            image: imagen, 
            description: descripcion 
        };

        const guardadas = JSON.parse(localStorage.getItem("ghibliLocalFilms")) || [];
        guardadas.unshift(nueva); 
        localStorage.setItem("ghibliLocalFilms", JSON.stringify(guardadas));

        alert("¡Película guardada!");
        window.location.href = "index.html";
    });
}

/* =========================================
   CONTACTO
   ========================================= */
function setupContactForm() {
    const form = document.getElementById("contact-form");
    if(!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensaje enviado correctamente.");
        form.reset();
    });
}