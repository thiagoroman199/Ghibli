#  Proyecto Studio Ghibli — Sitio Web Responsive

Este proyecto consiste en un sitio web de tres páginas desarrollado con HTML, CSS y JavaScript.  
El sitio consume datos en tiempo real de la Studio Ghibli API, muestra información de películas, incluye un formulario validado y una sección “About” con detalles del equipo.

---

## Funcionalidades Principales

### Página Home (index.html)
- Consumo de API pública: **Ghibli API**  
- Renderización dinámica de **mínimo 6 películas**
- Cards con diseño profesional:
  - Imagen tipo foto (formato cinematográfico)
  - Título y descripción secundaria
  - Hover con transición suave
- Grid responsive:
  - Mobile: 1 columna  
  - Tablet: 2 columnas  
  - Desktop: 3 columnas  
- Manejo de estados:
  - Mensaje de *loading*
  - Manejo de errores si la API falla

---

##  Página de Contacto (contacto.html)

- Formulario completo con:
  - Campo de texto
  - Email
  - Teléfono
  - Select (3 opciones)
  - Checkbox
  - Radio buttons
- Validación JavaScript:
  - Mensajes de error con **alert()**
  - Mensaje de éxito con **alert()**
  - Reset automático del formulario
- Imagen temática tipo banner en la parte superior

---

## Página About (about.html)

- Presentación del equipo en **3 cards**
- Información clara de cada integrante:
  - Rol
  - Responsabilidad
- Sección inferior con:
  - Decisiones de diseño
  - Detalles técnicos
  - Documentación de la API
- Diseño minimalista y profesional

---

##  API Utilizada

### **Studio Ghibli API**
Endpoint oficial utilizado:
---
## Autores del Proyecto

Este proyecto fue desarrollado por:

- **Manuel Perez** — Programación del consumo de API y render dinámico de cards.
- **Valentín Estrada** — Diseño de interfaz, estilos CSS y estructura HTML.
- **Thiago Roman** — Validación del formulario, manejo de errores y animaciones GSAP.
