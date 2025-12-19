/**
 * Landing Page - Dr. Mendoza (Cardiólogo)
 * Vanilla JavaScript - ES6+
 *
 * Funcionalidades:
 * - Detección de tema (Light/Dark) con persistencia en localStorage
 * - Menú móvil hamburguesa
 * - Animaciones al scroll con Intersection Observer
 * - Toast de notificación con urgencia
 * - Header con efecto glassmorphism al scroll
 */

document.addEventListener("DOMContentLoaded", () => {
  // =====================================================
  // THEME DETECTOR (LIGHT/DARK MODE)
  // =====================================================
  const initTheme = () => {
    const themeToggle = document.getElementById("themeToggle")
    const html = document.documentElement

    // Recuperar tema guardado o detectar preferencia del sistema
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light")

    // Aplicar tema inicial
    html.setAttribute("data-theme", currentTheme)

    // Toggle de tema
    themeToggle.addEventListener("click", () => {
      const newTheme = html.getAttribute("data-theme") === "light" ? "dark" : "light"
      html.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)
    })

    // Escuchar cambios en preferencia del sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        html.setAttribute("data-theme", e.matches ? "dark" : "light")
      }
    })
  }

  // =====================================================
  // MOBILE MENU
  // =====================================================
  const initMobileMenu = () => {
    const menuToggle = document.getElementById("menuToggle")
    const nav = document.getElementById("nav")
    const navLinks = nav.querySelectorAll(".header__nav-link")

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      nav.classList.toggle("active")
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : ""
    })

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        nav.classList.remove("active")
        document.body.style.overflow = ""
      })
    })
  }

  // =====================================================
  // STICKY HEADER CON GLASSMORPHISM
  // =====================================================
  const initStickyHeader = () => {
    const header = document.getElementById("header")
    let lastScroll = 0
    let ticking = false

    const updateHeader = () => {
      const scrollY = window.scrollY

      if (scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }

      lastScroll = scrollY
      ticking = false
    }

    // Usar requestAnimationFrame para mejor rendimiento
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader)
        ticking = true
      }
    })
  }

  // =====================================================
  // INTERSECTION OBSERVER - ANIMACIONES AL SCROLL
  // Técnica: Usamos IntersectionObserver para detectar
  // cuando los elementos entran en el viewport y activar
  // una clase CSS que aplica la animación fade-in-up
  // =====================================================
  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll")

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añadir clase para activar animación CSS
          entry.target.classList.add("fade-in-up")
          // Dejar de observar el elemento una vez animado
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observar cada elemento con delay escalonado
    animatedElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`
      observer.observe(el)
    })
  }

  // =====================================================
  // TESTIMONIALS MARQUEE - DUPLICAR PARA LOOP INFINITO
  // =====================================================
  const initTestimonialsMarquee = () => {
    const track = document.getElementById("testimonialTrack")
    if (!track) return

    // Clonar todos los testimonios para crear loop infinito
    const cards = track.innerHTML
    track.innerHTML = cards + cards
  }

  // =====================================================
  // TOAST NOTIFICATION (URGENCY/SOCIAL PROOF)
  // =====================================================
  const initToast = () => {
    const toast = document.getElementById("toast")
    const toastMessage = document.getElementById("toastMessage")
    const toastClose = document.getElementById("toastClose")

    // Datos ficticios realistas para las notificaciones
    const bookingData = [
      { city: "Ciudad de México", service: "Chequeo Cardiológico", time: "hace 2 min" },
      { city: "Guadalajara", service: "Ecocardiograma", time: "hace 5 min" },
      { city: "Monterrey", service: "Consulta Preventiva", time: "hace 8 min" },
      { city: "Puebla", service: "Holter 24 Horas", time: "hace 12 min" },
      { city: "Querétaro", service: "Prueba de Esfuerzo", time: "hace 15 min" },
    ]

    let toastTimeout

    const showToast = () => {
      // Seleccionar datos aleatorios
      const booking = bookingData[Math.floor(Math.random() * bookingData.length)]
      toastMessage.textContent = `Alguien en ${booking.city} acaba de agendar un ${booking.service} (${booking.time})`

      toast.classList.add("show")

      // Auto-cerrar después de 5 segundos
      toastTimeout = setTimeout(() => {
        toast.classList.remove("show")
      }, 5000)
    }

    const hideToast = () => {
      toast.classList.remove("show")
      clearTimeout(toastTimeout)
    }

    // Mostrar toast después de 3 segundos
    setTimeout(showToast, 3000)

    // Mostrar toast periódicamente (cada 30-60 segundos)
    setInterval(
      () => {
        if (!toast.classList.contains("show")) {
          showToast()
        }
      },
      30000 + Math.random() * 30000,
    )

    // Cerrar toast manualmente
    toastClose.addEventListener("click", hideToast)
  }

  // =====================================================
  // FORM HANDLING (BÁSICO)
  // =====================================================
  const initContactForm = () => {
    const form = document.getElementById("contactForm")

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Aquí iría la lógica de envío del formulario
      // Por ahora, mostramos una alerta simple
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
      form.reset()
    })
  }

  // =====================================================
  // SMOOTH SCROLL PARA ENLACES INTERNOS
  // =====================================================
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href")
        if (href === "#") return

        e.preventDefault()
        const target = document.querySelector(href)

        if (target) {
          const headerOffset = 80
          const elementPosition = target.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }

  // =====================================================
  // INICIALIZAR TODO
  // =====================================================
  initTheme()
  initMobileMenu()
  initStickyHeader()
  initScrollAnimations()
  initTestimonialsMarquee()
  initToast()
  initContactForm()
  initSmoothScroll()
})
