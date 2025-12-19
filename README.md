# 🎬 Studio Ghibli Collection — Proyecto Final

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Este proyecto consiste en un sitio web de tres páginas desarrollado con HTML, CSS y JavaScript. El sitio consume datos en tiempo real de la **Studio Ghibli API**, muestra información de películas, incluye un formulario validado y una sección “About” con detalles del equipo.

---

##  Funcionalidades Principales

###  Página Home (`index.html`)
* **Consumo de API pública:** Integración con **Ghibli API**.
* **El Podio Ghibli:** Sección dinámica que resalta las obras maestras aclamadas por la crítica.
* **Renderización Dinámica:** Mínimo de 6 películas cargadas automáticamente mediante JS.
* **Sistema de Modales:** Ventana interactiva para ver detalles (director, descripción e imagen) al hacer clic en las cards.
* **Diseño Profesional:** Cards con formato cinematográfico, imágenes de alta calidad y transiciones suaves (*hover*).
* **Grid Responsive:** Adaptabilidad total para Mobile (1 col), Tablet (2 cols) y Desktop (3 cols).
* **Manejo de estados:** Mensaje de *loading* ("Cargando magia...") y gestión de errores.

###  Página Cargar Película (`cargar-pelicula.html`)
* **Gestión de Contenido:** Sección dedicada para la administración y carga de nuevas piezas a la colección personal.
* **Interfaz Intuitiva:** Diseño coherente con la estética del estudio para facilitar la interacción del usuario.

###  Página de Contacto (`contacto.html`)
* **Formulario Validado:** Incluye campos de texto, Email, Teléfono, Select, Checkbox y Radio buttons.
* **Validación JS:** Mensajes de error y éxito personalizados mediante `alert()`.
* **Automatización:** Reset automático del formulario tras el envío exitoso.

###  Página About (`about.html`)
* **Presentación del equipo:** Cards individuales con información detallada de los desarrolladores.
* **Sección Técnica:** Documentación sobre decisiones de diseño y uso de la API.

---

##  Autores y Roles

| Desarrollador | Rol | Responsabilidad |
| :--- | :--- | :--- |
| **Manuel Perez** | Frontend Developer | Programación del consumo de API, render dinámico de cards e integración de lógica JS. |
| **Valentín Estrada** | UI/UX Designer | Diseño de interfaz, estilos CSS, maquetado y estructura responsive. |
| **Thiago Roman** | QA & Logic | Validación de formularios, manejo de errores, LocalStorage y animaciones GSAP. |

---

##  Tecnologías y API
* **API:** [Studio Ghibli API](https://ghibliapi.vercel.app/films)
* **Lógica:** JavaScript ES6+ con manipulación del DOM.
* **Estilos:** CSS3 con variables personalizadas y Grid/Flexbox.

---

##  Estructura de Carpetas
```text
/proyecto-final
├── /HTML
│   ├── index.html
│   ├── cargar-pelicula.html
│   ├── contacto.html
│   └── about.html
├── /CSS
│   └── style.css
└── /JS
    └── script.js
