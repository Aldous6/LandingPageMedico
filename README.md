# Landing Page (Ficticia) — Dr. Ricardo Mendoza | Cardiólogo

Landing page ficticia diseñada para **alta conversión** (enfoque UI/UX) en el sector salud.  
Construida con **HTML5 + CSS3 + Vanilla JavaScript** (sin librerías externas).

>  Proyecto demo/portafolio: el doctor, testimonios y datos mostrados son ficticios.  
> Las imágenes se cargan desde URLs públicas (Unsplash) y el mapa usa un embed de Google Maps.

---

## Objetivo del proyecto

Crear una landing moderna y confiable para un consultorio médico con:
- Mensaje claro de valor (hero)
- CTA visible para agendar
- Señales de confianza (social proof)
- Diseño responsive + animaciones sutiles
- Modo claro/oscuro
- Secciones típicas de conversión: servicios, testimonios, ubicación y contacto

---

## Features principales

### UI/UX
- **Header sticky** con efecto *glassmorphism* al hacer scroll.
- **Hero** con CTA primario/secundario + stats de confianza.
- **Cards** de servicios con iconografía en SVG.
- **Testimonials marquee** (loop infinito) que se pausa al hover.
- **Mapa responsivo** (iframe full-bleed) con mejor altura y presencia en desktop.
- **Modo oscuro** aplicando variables CSS y filtros en el mapa.

### JavaScript (Vanilla)
- **Light/Dark Mode** con persistencia en `localStorage` + detección de preferencia del sistema.
- **Menú móvil hamburguesa** con bloqueo de scroll cuando está abierto.
- **Animaciones al scroll** usando `IntersectionObserver` (performance-friendly).
- **Toast de urgencia/social proof** con datos ficticios realistas (aparece y se repite).
- **Smooth scroll** para anchors internos.
- **Form handling básico** (demo: muestra un `alert` y resetea el formulario).

---

## Estructura del proyecto

```txt
/
├─ index.html
├─ style.css
└─ script.js
