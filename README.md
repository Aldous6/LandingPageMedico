# Landing Page (Ficticia) — Dr. Ricardo Mendoza | Cardiólogo

Landing page ficticia diseñada con enfoque **UI/UX orientado a conversión** para el sector salud.  
Construida únicamente con **HTML5, CSS3 y Vanilla JavaScript** (sin frameworks ni librerías externas).

>  Proyecto demo / portafolio  
> El doctor, testimonios, datos y citas mostradas son ficticios.  
> Las imágenes provienen de Unsplash y el mapa utiliza Google Maps Embed.

---

##  Objetivo del proyecto

Diseñar una landing page profesional que simule un **sitio real de un médico especialista**, priorizando:

- Confianza y credibilidad
- Claridad en la propuesta de valor
- Experiencia de usuario fluida
- Conversión sin presión agresiva

El proyecto demuestra **criterio de producto**, no solo maquetación visual.

---

## Tipos de Landing Pages (Contexto Teórico)

En diseño web y marketing digital, las landing pages se clasifican según su objetivo principal:

### 1️⃣ Lead Generation Landing Page
**Objetivo:** Capturar datos del usuario (correo, teléfono).  
**Uso:** Descargas, newsletters, promociones.

- Formularios protagonistas  
- Contenido mínimo  
- CTA único y directo  

---

### 2️⃣ Click-Through Landing Page
**Objetivo:** Preparar al usuario para una acción posterior  
(ej. WhatsApp, agenda externa, checkout).

- Storytelling corto  
- Beneficios claros  
- CTA de redirección  

---

### 3️⃣ Service / Product Landing Page
**Objetivo:** Explicar y vender un servicio específico.

- Propuesta de valor clara  
- Beneficios y proceso  
- CTA persistente  
- Pruebas de confianza  

---

### 4️⃣ Brand / Authority Landing Page
**Objetivo:** Construir credibilidad y autoridad profesional.

- Diseño limpio y sobrio  
- Lenguaje empático  
- Señales de legitimidad  

---

##  Tipo de Landing Page Elegido

Este proyecto utiliza una **combinación estratégica de:**

> **Service Landing Page + Authority Landing Page**

### ¿Por qué este enfoque?

En el sector salud, la conversión **no es impulsiva**.  
Antes de agendar una cita, el usuario necesita:

- Confianza  
- Claridad  
- Profesionalismo  
- Seguridad emocional  

Por ello, esta landing page fue diseñada para:

### ✅ Explicar el servicio
- Qué hace el doctor  
- Qué problemas atiende  
- Cómo es el proceso de consulta  

### ✅ Construir autoridad
- Testimonios (social proof)  
- Indicadores de disponibilidad  
- Diseño sobrio y profesional  

### ✅ Facilitar la conversión
- CTA visibles pero no agresivos  
- Flujo de lectura natural  
- Información suficiente antes del contacto  

---

## Decisiones clave de UX

- **Hero empático**, no promocional  
- **CTA persistente** pero respetuoso  
- **Testimonials en marquee** (confianza pasiva)  
- **Modo oscuro** para confort visual  
- **Animaciones suaves** con `IntersectionObserver`  
- **Header con glassmorphism** al hacer scroll  

---

## Features Técnicas

### UI / UX
- Header sticky con efecto glass
- Hero con CTA principal y secundario
- Cards de servicios con SVG
- Marquee infinito de testimonios (pausa al hover)
- Mapa responsivo (iframe)
- Diseño completamente responsive
- Light / Dark Mode con variables CSS

### JavaScript (Vanilla)
- Persistencia de tema con `localStorage`
- Menú móvil con bloqueo de scroll
- Animaciones al hacer scroll
- Toast de urgencia / social proof (datos ficticios)
- Smooth scroll
- Manejo básico de formulario (demo)

---

## Estructura del proyecto

```txt
/
├─ index.html
├─ style.css
└─ script.js
