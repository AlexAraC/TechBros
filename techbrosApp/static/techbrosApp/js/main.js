document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js cargado");
    console.log("JS cargado");

    /* ===== HERO VANTA ===== */
    const hero = document.querySelector("#hero");
    if (hero && typeof VANTA !== "undefined") {
        VANTA.WAVES({
            el: hero,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0x41ac,
            shininess: 30,
            waveHeight: 15,
            waveSpeed: 1,
            zoom: 1
        });
    }

    /* ===== NAVBAR SCROLL ===== */
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        });
    }

    /* ===== GALERÍA ===== */
    const images = document.querySelectorAll(".grid-gallery img");
    if (images.length > 0) {
        const galleryObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                        entry.target.classList.add("show");
                        galleryObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        images.forEach(img => galleryObserver.observe(img));
    }

    /* ===== TEXT EMPLOYEES ===== */
    const section = document.querySelector(".text-employees");
    if (section) {
        const paragraphs = section.querySelectorAll("p");

        const textObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add("show");

                        if (paragraphs[0]) paragraphs[0].style.transitionDelay = "1s";
                        if (paragraphs[1]) paragraphs[1].style.transitionDelay = "1.5s";

                        textObserver.unobserve(section);
                    }
                });
            },
            { threshold: 0.4 }
        );

        textObserver.observe(section);
    }

    /* ===== SERVICIOS TITULO ===== */
    const titulo = document.querySelector(".serviciosTitulo");
    console.log("serviciosTitulo:", titulo);
    if (titulo) {
        const tituloObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    titulo.classList.add("show");
                    tituloObserver.unobserve(titulo);
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -80px 0px"
            }
        );

        tituloObserver.observe(titulo);
    }

});
