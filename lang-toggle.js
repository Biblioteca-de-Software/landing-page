document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("language-toggle");

    const translations = {
        es: {
            heroTitle: "Optimiza la distribución y conservación de alimentos",
            heroText: "Con nuestra solución IoT, controla tu inventario en tiempo real y mejora tu servicio.<br />A partir de 50 USD/mes. Cancela cuando quieras.",
            heroButton: "Comienza tu periodo de prueba gratis",
            nav: ["¿Qué ofrecemos?", "Sobre nosotros", "Beneficios", "Contacto"],
            queEsTitle: "¿Qué es KeepItFresh?",
            queEsText: "“KeepItFresh” es un servicio el cual permite el monitoreo de puntos críticos del inventario de un restaurante, monitoreando fechas de caducidad, temperaturas y gases (tales como etileno y calidad de aire) para confirmar los niveles de descomposición de los productos en el inventario del restaurante. Así mismo este servicio también ofrece un botón para llamar a los trabajadores del restaurante desde la mesa, con el fin de optimizar la atención dirigida al consumidor.",
            cards: [
                "🔒 Tu negocio seguro",
                "📈 Gestión inteligente",
                "📊 Datos en tiempo real"
            ],
            cardsP: [
                "Monitorea en tiempo real tus dispositivos IoT (temperatura, humedad, puertas abiertas, etc.) para prevenir pérdidas por fallas o accidentes. Tu inventario y equipos estarán siempre bajo control.",
                "Automatiza el seguimiento de insumos. Recibe alertas cuando haya escasez o exceso de stock y optimiza tus compras según consumo real.",
                "Accede a reportes y métricas desde cualquier dispositivo. Toma decisiones basadas en información actualizada y confiable."
            ],
            nosotrosTitle: "¿Quiénes somos?",
            nosotrosText: "Somos una startup dedicada a soluciones digitales enfocadas en restaurantes. Utilizamos tecnologías IoT para agilizar la gestión de restaurantes. Nuestro enfoque es preventivo, proporcionando sensores y herramientas para evitar problemas como la descomposición de alimentos.",
            nosotrosCards: [
                "📌 Misión",
                "🚀 Visión",
                "📦 Producto: KeepItFresh"
            ],
            nosotrosP: [
                "Facilitar la gestión de los restaurantes a través del monitoreo continuo y el uso de tecnologías digitales.",
                "Ser la empresa más importante del Perú en gestión y optimización de restaurantes.",
                "Monitoreo de puntos críticos del inventario de restaurantes."
            ],
            pricingTitle: "Precios y planes",
            pricingDesc: "Los planes se basan en la cantidad de puntos de monitoreo",
            firstPlanTitle: "Primer Plan",
            firstPlanDesc: "Ideal para pequeñas empresas que deseen mejorar su inventario y ahorrar.",
            firstPlanPrice: "$10 al mes",
            firstPlanList: ["Control de inventario", "Monitoreo del inventario", "Registro de productos"],
            premiumPlanTitle: "Plan Premium",
            premiumPlanDesc: "Enfocado a restaurantes ya consolidados y que deseen implementar una plataforma para optimizar procesos de inventario.",
            premiumPlanPrice: "$100 al mes",
            premiumPlanList: ["Análisis de presupuestos e ingresos", "Reportes diarios sobre el restaurante", "Registro de varios inventarios"],
            beneficios: "Beneficios",
            beneficiosCards: [
                "Reducir el desperdicio",
                "Garantizar frescura",
                "Mejorar el servicio"
            ],
            beneficiosP: [
                "Verifica los niveles de descomposición para confirmar la calidad del producto.",
                "Verifica los niveles de descomposición para confirmar la calidad del producto.",
                "Optimiza la atención al cliente con un botón de llamado para empleados."
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
            heroTitle: "Optimize food distribution and preservation",
            heroText: "With our IoT solution, control your inventory in real time and improve your service.<br />Starting at $50/month. Cancel anytime.",
            heroButton: "Start your free trial",
            nav: ["What do we offer?", "About us", "Benefits", "Contact"],
            queEsTitle: "What is KeepItFresh?",
            queEsText: "\"KeepItFresh\" is a service that allows the monitoring of critical points in a restaurant's inventory, tracking expiration dates, temperatures, and gases (such as ethylene and air quality) to confirm the levels of spoilage of products in the restaurant's inventory. This service also offers a button to call restaurant staff from the table, in order to optimize customer service.",
            cards: [
                "🔒 Your business safe",
                "📈 Smart management",
                "📊 Real-time data"
            ],
            cardsP: [
                "Monitor your IoT devices in real time (temperature, humidity, open doors, etc.) to prevent losses due to failures or accidents. Your inventory and equipment will always be under control.",
                "Automate supply tracking. Receive alerts when there is a shortage or overstock and optimize your purchases based on actual consumption.",
                "Access reports and metrics from any device. Make decisions based on updated and reliable information."
            ],
            nosotrosTitle: "Who are we?",
            nosotrosText: "We are a startup dedicated to digital solutions for restaurants. We use IoT technologies to streamline restaurant management. Our approach is preventive, providing sensors and tools to avoid issues like food spoilage.",
            nosotrosCards: [
                "📌 Mission",
                "🚀 Vision",
                "📦 Product: KeepItFresh"
            ],
            nosotrosP: [
                "Facilitate restaurant management through continuous monitoring and the use of digital technologies.",
                "Be the most important restaurant optimization company in Peru.",
                "Monitoring of critical points in restaurant inventory."
            ],
            pricingTitle: "Pricing & Plans",
            pricingDesc: "Plans are based on the number of monitoring points",
            firstPlanTitle: "First Plan",
            firstPlanDesc: "Ideal for small businesses looking to improve inventory and save.",
            firstPlanPrice: "$10 per month",
            firstPlanList: ["Inventory control", "Inventory monitoring", "Product registration"],
            premiumPlanTitle: "Premium Plan",
            premiumPlanDesc: "Focused on established restaurants that want to implement a platform to optimize inventory processes.",
            premiumPlanPrice: "$100 per month",
            premiumPlanList: ["Budget and revenue analysis", "Daily restaurant reports", "Multiple inventory registration"],
            beneficios: "Benefits",
            beneficiosCards: [
                "Reduce waste",
                "Ensure freshness",
                "Improve service"
            ],
            beneficiosP: [
                "Check spoilage levels to confirm product quality.",
                "Check spoilage levels to confirm product quality.",
                "Optimize customer service with a staff call button."
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

    let currentLang = "en";

    const applyTranslations = (lang) => {
        const t = translations[lang];

        // Nav
        document.querySelector("header nav").innerHTML = t.nav
            .map((text, i) => `<a href="#${["ofrecemos", "nosotros", "beneficios", "contacto"][i]}">${text}</a>`)
            .join("");

        // Hero
        document.querySelector(".hero h1").innerHTML = t.heroTitle;
        document.querySelector(".hero p").innerHTML = t.heroText;
        document.querySelector(".hero .button").innerHTML = t.heroButton;

        // Ofrecimiento
        document.querySelector(".ofrecimiento h2").innerHTML = t.queEsTitle;
        document.querySelector(".ofrecimiento p").innerHTML = t.queEsText;
        const cards = document.querySelectorAll(".ofrecimiento .card");
        cards.forEach((card, i) => {
            card.querySelector("h3").innerHTML = t.cards[i];
            card.querySelector("p").innerHTML = t.cardsP[i];
        });

        // Nosotros
        document.querySelector("#nosotros h2").innerHTML = t.nosotrosTitle;
        document.querySelector("#nosotros p").innerHTML = t.nosotrosText;
        const nosotrosCards = document.querySelectorAll("#nosotros .card");
        nosotrosCards.forEach((card, i) => {
            card.querySelector("h3").innerHTML = t.nosotrosCards[i];
            card.querySelector("p").innerHTML = t.nosotrosP[i];
        });

        // Pricing
        document.querySelector(".pricing-plans h2").innerHTML = t.pricingTitle;
        document.querySelector(".pricing-plans p").innerHTML = t.pricingDesc;
        const plans = document.querySelectorAll(".plan");
        plans[0].querySelector("h3").innerHTML = t.firstPlanTitle;
        plans[0].querySelector("h4").innerHTML = t.firstPlanDesc;
        plans[0].querySelector("h5").innerHTML = t.firstPlanPrice;
        plans[0].querySelector("ul").innerHTML = t.firstPlanList.map(item => `<li>${item}</li>`).join("");
        plans[1].querySelector("h3").innerHTML = t.premiumPlanTitle;
        plans[1].querySelector("h4").innerHTML = t.premiumPlanDesc;
        plans[1].querySelector("h5").innerHTML = t.premiumPlanPrice;
        plans[1].querySelector("ul").innerHTML = t.premiumPlanList.map(item => `<li>${item}</li>`).join("");

        // Beneficios
        document.querySelector("#beneficios h2").innerHTML = t.beneficios;
        const beneficiosCards = document.querySelectorAll("#beneficios .card:not(.opinion)");
        beneficiosCards.forEach((card, i) => {
            card.querySelector("h3").innerHTML = t.beneficiosCards[i];
            card.querySelector("p").innerHTML = t.beneficiosP[i];
        });

        // Opiniones
        document.querySelectorAll("#beneficios .card.opinion p").forEach((el, i) => {
            el.innerHTML = t.testimonios[i];
        });
        document.querySelectorAll("h2").forEach(h => {
            if (h.innerHTML === "Opiniones de usuarios" || h.innerHTML === "User reviews") {
                h.innerHTML = t.opiniones;
            }
        });

        // Contacto
        document.querySelector("#contacto h2").innerHTML = t.contacto;
        const labels = document.querySelectorAll("#contacto label");
        labels.forEach((label, i) => (label.innerHTML = t.labels[i]));
        document.querySelector("#contacto button").innerHTML = t.enviar;
    };

    toggleButton.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "es" : "en";
        applyTranslations(currentLang);
        toggleButton.innerText = currentLang === "en" ? "ES" : "EN";
    });

    // Inicializa en inglés
    applyTranslations("en");
});
