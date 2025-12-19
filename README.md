Proyecto Studio Ghibli — Sitio Web Responsive
Este proyecto consiste en un sitio web de tres páginas desarrollado con HTML, CSS y JavaScript. El sitio consume datos en tiempo real de la Studio Ghibli API, muestra información de películas, incluye un formulario validado y una sección “About” con detalles del equipo.

Funcionalidades Principales
Página Home (index.html)
Consumo de API pública: Ghibli API.

El Podio Ghibli: Sección #top-section que destaca las obras maestras aclamadas por la crítica.

Renderización dinámica: Muestra de la colección completa mediante tarjetas generadas por JS.

Sistema de Detalles (Modal): Ventana emergente interactiva que muestra imagen, título, director y descripción detallada al hacer clic en una película.

Cards con diseño profesional:

Imagen tipo foto (formato cinematográfico).

Título y descripción secundaria.

Hover con transición suave.

Grid responsive:

Mobile: 1 columna.

Tablet: 2 columnas.

Desktop: 3 columnas.

Manejo de estados:

Mensaje de loading ("Cargando magia...").

Manejo de errores si la API falla.

Página Cargar Película (cargar-pelicula.html)
Gestión de Contenido: Interfaz dedicada para añadir nuevas obras a la colección personal.

Lógica de Almacenamiento: Uso de LocalStorage para persistir los datos de las películas cargadas por el usuario.

Integración: Sincronización con la galería principal para visualizar los nuevos ingresos.

Página de Contacto (contacto.html)
Formulario completo con: Campo de texto, Email, Teléfono, Select (3 opciones), Checkbox y Radio buttons.

Validación JavaScript:

Mensajes de error con alert().

Mensaje de éxito con alert().

Reset automático del formulario.

Imagen temática: Tipo banner en la parte superior.

Página About (about.html)
Presentación del equipo: Organizada en 3 cards con roles específicos.

Sección inferior con:

Decisiones de diseño.

Detalles técnicos.

Documentación de la API.

Diseño: Minimalista y profesional.

API Utilizada
Studio Ghibli API

Endpoint oficial utilizado: https://ghibliapi.vercel.app/films

Autores del Proyecto
Este proyecto fue desarrollado por:

Manuel Perez

Frontend Developer

Integración de API, lógica JS y renderizado dinámico.

Valentín Estrada

UI/UX Designer

Diseño responsive, estilos CSS y estructura HTML.

Thiago Roman

QA & Logic

Pruebas, validaciones de formularios, manejo de LocalStorage y animaciones GSAP.
