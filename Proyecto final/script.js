/* MENU RESPONSIVE */
const navToggle = document.getElementById("nav-toggle");
const menu = document.getElementById("menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

/* HOME — Fetch API */
async function fetchFilms() {
    const container = document.getElementById("cards-container");
    const loading = document.getElementById("loading");
    const errorMsg = document.getElementById("error-message");

    if (!container) return; // Solo ejecutar en index.html

    try {
        const res = await fetch("https://ghibliapi.vercel.app/films");

        if (!res.ok) throw new Error("Error al cargar la API");

        const data = await res.json();
        loading.style.display = "none";

        data.slice(0, 6).forEach(film => {
            container.innerHTML += `
                <div class="card">
                    <img src="${film.image}" alt="${film.title}">
                    <div class="card-content">
                        <h3>${film.title}</h3>
                        <p>Director: ${film.director}</p>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        loading.style.display = "none";
        errorMsg.textContent = error.message;
    }
}

fetchFilms();

/* CONTACT FORM */
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nombre = nombre.value.trim();
        const email = email.value.trim();
        const mensaje = mensaje.value.trim();
        const temaValue = tema.value;

        const contacto = form.contacto.value;

        if (!nombre || !email || !mensaje || !temaValue || !contacto) {
            alert("⚠ Por favor completá todos los campos obligatorios.");
            return;
        }

        alert("Formulario enviado con éxito. ¡Gracias!");
        form.reset();
    });
}
// ==== GSAP ANIMATIONS ====

// Animación para cards del home
if (document.querySelector(".grid .card")) {
    gsap.from(".card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out"
    });
}

// Animación del banner de Contacto
if (document.querySelector(".contact-banner")) {
    gsap.from(".banner-title", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out"
    });
}

// Animación de cards del equipo en About
if (document.querySelector(".about-team")) {
    gsap.from(".team-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".about-team",
            start: "top 85%"
        }
    });
}
