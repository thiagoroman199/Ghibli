// --- ARRANQUE DE LA WEB Y MENU ---
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("menu");

    if (navToggle && menu) {
        navToggle.addEventListener("click", () => menu.classList.toggle("show"));
    }

    if (document.getElementById("cards-container")) {
        fetchFilms();
        setupModal();
    }
    
    if (document.getElementById("upload-form")) setupUploadForm();
    if (document.getElementById("contact-form")) setupContactForm();
});

// --- TRAER DATA Y MEZCLAR CON LOCALSTORAGE ---
async function fetchFilms() {
    const container = document.getElementById("cards-container");
    const popularContainer = document.getElementById("popular-container");
    const topSection = document.getElementById("top-section");
    const loading = document.getElementById("loading");

    try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        let apiData = res.ok ? await res.json() : [];

        // aca recuperamos tus pelis de la memoria localstorage
        const localData = JSON.parse(localStorage.getItem("ghibliLocalFilms")) || [];

        if (loading) loading.style.display = "none";
        container.innerHTML = "";
        popularContainer.innerHTML = "";

        const popularData = [...apiData].sort((a, b) => b.rt_score - a.rt_score).slice(0, 3);
            
        if (popularData.length > 0) {
            topSection.style.display = "block"; 
            popularData.forEach((film, i) => {
                popularContainer.appendChild(createCardHTML(film, { isPopular: true, rank: i + 1 }));
            });
        }

        const filmsToShow = [...localData.map(f => ({...f, isLocal: true})), ...apiData.slice(0, 9)];
        filmsToShow.forEach(film => container.appendChild(createCardHTML(film)));

    } catch (error) {
        if(loading) loading.textContent = "error al cargar la data.";
    }
}

// --- EL DISEÑO DE LAS TARJETITAS ---
function createCardHTML(film, options = {}) {
    const { isPopular, rank } = options;
    const imgUrl = film.movie_banner || film.image; 
    const card = document.createElement('div');
    card.className = "card";
    
    let badge = isPopular ? `<span class="badge-top">#${rank}</span>` : (film.isLocal ? `<span>★ Tuya</span>` : '');
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${imgUrl}" alt="${film.title}" loading="lazy">
            ${badge}
        </div>
        <div class="card-content">
            <h3>${film.title}</h3>
            <p>${film.director}</p>
        </div>
    `;

    card.addEventListener("click", () => openModal(film, imgUrl));
    return card;
}

// --- SUBIR PELI Y GUARDAR EN LOCALSTORAGE ---
function setupUploadForm() {
    const form = document.getElementById("upload-form");
    const fields = ["titulo-pelicula", "director-pelicula", "imagen-pelicula", "descripcion-pelicula"];

    // cargar borradores de la memoria si existen
    fields.forEach(id => {
        const input = document.getElementById(id);
        const saved = localStorage.getItem("draft_" + id);
        if (saved) input.value = saved;

        // guardar cada letra que se escribe en localstorage
        input.addEventListener("input", () => localStorage.setItem("draft_" + id, input.value));
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const values = fields.map(id => document.getElementById(id).value.trim());
        if (values.includes("")) return alert("falta completar algo.");

        const nueva = { id: Date.now(), title: values[0], director: values[1], image: values[2], description: values[3] };

        // guardar la peli nueva en localstorage
        const guardadas = JSON.parse(localStorage.getItem("ghibliLocalFilms")) || [];
        guardadas.unshift(nueva); 
        localStorage.setItem("ghibliLocalFilms", JSON.stringify(guardadas));

        // se borra los borradores
        fields.forEach(id => localStorage.removeItem("draft_" + id));
        window.location.href = "index.html";
    });
}

// --- FORMULARIO DE CONTACTO ---
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(f => {
        const saved = localStorage.getItem("contact_" + f.name);
        if (saved) f.value = saved;
        f.addEventListener("input", () => localStorage.setItem("contact_" + f.name, f.value));
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fields.forEach(f => localStorage.removeItem("contact_" + f.name));
        form.reset();
        alert("enviado con exito.");
    });
}

// --- LA VENTANA MODAL ---
const modal = {
    overlay: document.getElementById("modal-overlay"),
    title: document.getElementById("modal-title"),
    img: document.getElementById("modal-img")
};

function setupModal() {
    document.getElementById("modal-close")?.addEventListener("click", closeModal);
    modal.overlay?.addEventListener("click", (e) => e.target === modal.overlay && closeModal());
}

function openModal(film, imgUrl) {
    modal.title.textContent = film.title;
    modal.img.src = imgUrl;
    modal.overlay.classList.add("active");
}

function closeModal() {
    modal.overlay.classList.remove("active");
}
