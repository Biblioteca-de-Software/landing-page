let currentLang = "es";
let currentSlide = 0;

const translations = {
    es: {
        nav: ["Inicio", "¿Qué ofrecemos?", "Planes", "Sobre nosotros", "Beneficios", "Contacto"],
        heroTitle: "Optimiza la distribución y conservación de alimentos",
        heroText: "Con nuestra solución IoT, controla tu inventario en tiempo real y mejora tu servicio.<br />A partir de 50 USD/mes. Cancela cuando quieras.",
        heroButton: "Comienza tu periodo de prueba gratis",
        queEsTitle: "¿Qué es KeepItFresh?",
        queEsText: "“KeepItFresh” es un servicio el cual permite el monitoreo de puntos críticos del inventario de un restaurante...",
        cards: [
            "🔒 Tu negocio seguro",
            "📈 Gestión inteligente",
            "📊 Datos en tiempo real"
        ],
        cardsP: [
            "Monitorea en tiempo real tus dispositivos IoT...",
            "Automatiza el seguimiento de insumos...",
            "Accede a reportes y métricas desde cualquier dispositivo..."
        ],
        nosotrosTitle: "¿Quiénes somos?",
        nosotrosText: "Somos una startup dedicada a soluciones digitales...",
        nosotrosCards: ["📌 Misión", "🚀 Visión", "📦 Producto: KeepItFresh"],
        nosotrosP: [
            "Facilitar la gestión de los restaurantes...",
            "Ser la empresa más importante del Perú...",
            "Monitoreo de puntos críticos..."
        ],
        pricingTitle: "Precios y planes",
        pricingDesc: "Los planes se basan en la cantidad de puntos de monitoreo",
        firstPlanTitle: "Primer Plan",
        firstPlanDesc: "Ideal para pequeñas empresas...",
        firstPlanPrice: "$10 al mes",
        firstPlanList: ["Control de inventario", "Monitoreo del inventario", "Registro de productos"],
        premiumPlanTitle: "Plan Premium",
        premiumPlanDesc: "Enfocado a restaurantes ya consolidados...",
        premiumPlanPrice: "$100 al mes",
        premiumPlanList: ["Análisis de presupuestos...", "Reportes diarios...", "Registro de varios inventarios"],
        beneficios: "Beneficios",
        beneficiosCards: ["Reducir el desperdicio", "Garantizar frescura", "Mejorar el servicio"],
        beneficiosP: [
            "Verifica los niveles de descomposición...",
            "Verifica los niveles de descomposición...",
            "Optimiza la atención al cliente..."
        ],
        opiniones: "Opiniones de usuarios",
        testimonios: [
            "Este sistema ha reducido significativamente el desperdicio de alimentos.",
            "Nuestros clientes ahora aprecian el servicio rápido.",
            "Me encanta lo fácil que es monitorear la frescura de los productos."
        ],
        contacto: "Contacto",
        labels: ["Correo electrónico", "País/Región", "Asunto", "Descripción"],
        enviar: "Enviar"

    },
    en: {
        nav: ["Home", "What do we offer?", "Plans", "About us", "Benefits", "Contact"],
        heroTitle: "Optimize food distribution and preservation",
        heroText: "With our IoT solution, control your inventory in real time and improve your service.<br />Starting at $50/month. Cancel anytime.",
        heroButton: "Start your free trial",
        queEsTitle: "What is KeepItFresh?",
        queEsText: "\"KeepItFresh\" is a service that allows monitoring of critical points...",
        cards: [
            "🔒 Your business safe",
            "📈 Smart management",
            "📊 Real-time data"
        ],
        cardsP: [
            "Monitor your IoT devices in real time...",
            "Automate supply tracking...",
            "Access reports and metrics from any device..."
        ],
        nosotrosTitle: "Who are we?",
        nosotrosText: "We are a startup dedicated to digital restaurant solutions...",
        nosotrosCards: ["📌 Mission", "🚀 Vision", "📦 Product: KeepItFresh"],
        nosotrosP: [
            "Facilitate restaurant management...",
            "Be the most important restaurant optimization company...",
            "Monitoring of critical inventory points..."
        ],
        pricingTitle: "Pricing & Plans",
        pricingDesc: "Plans are based on the number of monitoring points",
        firstPlanTitle: "First Plan",
        firstPlanDesc: "Ideal for small businesses...",
        firstPlanPrice: "$10 per month",
        firstPlanList: ["Inventory control", "Inventory monitoring", "Product registration"],
        premiumPlanTitle: "Premium Plan",
        premiumPlanDesc: "Focused on established restaurants...",
        premiumPlanPrice: "$100 per month",
        premiumPlanList: ["Budget and revenue analysis", "Daily restaurant reports", "Multiple inventory registration"],
        beneficios: "Benefits",
        beneficiosCards: ["Reduce waste", "Ensure freshness", "Improve service"],
        beneficiosP: [
            "Check spoilage levels...",
            "Check spoilage levels...",
            "Optimize customer service..."
        ],
        opiniones: "User reviews",
        testimonios: [
            "This system has significantly reduced food waste.",
            "Our customers now appreciate the fast service.",
            "I love how easy it is to monitor product freshness."
        ],
        contacto: "Contact",
        labels: ["Your email address", "Country/Region", "Subject", "Description"],
        enviar: "Send"
    }
};

// Aplicar traducciones dinámicamente
function applyTranslations(lang) {
    const t = translations[lang];
    const hrefs = ["hero", "ofrecemos", "planes", "nosotros", "beneficios", "contacto"];

    // Menú de navegación
    document.querySelector("#main-nav").innerHTML = t.nav
        .map((text, i) => `<a href="#${hrefs[i]}">${text}</a>`)
        .join("");

    // Hero
    document.querySelector(".hero h1").innerHTML = t.heroTitle;
    document.querySelector(".hero p").innerHTML = t.heroText;
    document.querySelector(".hero .button").innerHTML = t.heroButton;

    // ¿Qué es KeepItFresh?
    document.querySelector(".ofrecimiento h2").innerHTML = t.queEsTitle;
    document.querySelector(".ofrecimiento p").innerHTML = t.queEsText;
    const cards = document.querySelectorAll(".ofrecimiento .card");
    cards.forEach((card, i) => {
        card.querySelector("h3").innerHTML = t.cards[i];
        card.querySelector("p").innerHTML = t.cardsP[i];
    });

    // Nosotros
    const nos = document.querySelector("#nosotros");
    if (nos) {
        nos.querySelector("h2").innerHTML = t.nosotrosTitle;
        nos.querySelector("p").innerHTML = t.nosotrosText;
        const nosotrosCards = nos.querySelectorAll(".card");
        nosotrosCards.forEach((card, i) => {
            card.querySelector("h3").innerHTML = t.nosotrosCards[i];
            card.querySelector("p").innerHTML = t.nosotrosP[i];
        });
    }

    // Precios
    const plans = document.querySelectorAll(".plan");
    document.querySelector(".pricing-plans h2").innerHTML = t.pricingTitle;
    document.querySelector(".pricing-plans p").innerHTML = t.pricingDesc;
    plans[0].querySelector("h3").innerHTML = t.firstPlanTitle;
    plans[0].querySelector("h4").innerHTML = t.firstPlanDesc;
    plans[0].querySelector("h5").innerHTML = t.firstPlanPrice;
    plans[0].querySelector("ul").innerHTML = t.firstPlanList.map(i => `<li>${i}</li>`).join("");
    plans[1].querySelector("h3").innerHTML = t.premiumPlanTitle;
    plans[1].querySelector("h4").innerHTML = t.premiumPlanDesc;
    plans[1].querySelector("h5").innerHTML = t.premiumPlanPrice;
    plans[1].querySelector("ul").innerHTML = t.premiumPlanList.map(i => `<li>${i}</li>`).join("");

    // Beneficios
    document.querySelector("#beneficios h2").innerHTML = t.beneficios;
    const beneficiosCards = document.querySelectorAll("#beneficios .card:not(.opinion)");
    beneficiosCards.forEach((card, i) => {
        card.querySelector("h3").innerHTML = t.beneficiosCards[i];
        card.querySelector("p").innerHTML = t.beneficiosP[i];
    });

    // Opiniones
    const opinionTitle = document.querySelector("#opiniones h2");
    if (opinionTitle) opinionTitle.innerHTML = t.opiniones;
    const opiniones = document.querySelectorAll(".opinion-slide p");
    opiniones.forEach((p, i) => {
        p.innerHTML = t.testimonios[i];
    });

    // Contacto
    document.querySelector("#contacto h2").innerHTML = t.contacto;
    const labels = document.querySelectorAll("#contacto label");
    labels.forEach((label, i) => (label.innerHTML = t.labels[i]));
    document.querySelector("#contacto button").innerHTML = t.enviar;
}

// Cambiar idioma desde el dropdown
function setLanguage(lang) {
    currentLang = lang;
    applyTranslations(lang);
    document.getElementById("selected-lang").innerText =
        lang === "es" ? "🌐 Español ▾" : "🌐 English ▾";
    document.getElementById("lang-dropdown").classList.add("hidden");
}

// Mostrar/ocultar menú de idioma
function toggleDropdown() {
    document.getElementById("lang-dropdown").classList.toggle("hidden");
}

// Carrusel de opiniones
function showSlide(index) {
    const slides = document.querySelectorAll(".opinion-slide");
    const dots = document.querySelectorAll(".dot");

    if (index < 0 || index >= slides.length) return;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

// Iniciar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Aplicar traducción inicial
    applyTranslations(currentLang);
    document.getElementById("selected-lang").innerText =
        currentLang === "es" ? "🌐 Español ▾" : "🌐 English ▾";

    // Resaltar sección activa en el menú al hacer scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#main-nav a");

    const getOffset = el => el.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 100; // margen para activar antes

        sections.forEach(section => {
            const top = getOffset(section);
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active-link");
            }
        });
    });
});
