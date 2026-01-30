document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#hero")) {
        VANTA.WAVES({
            el: "#hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4a141f,
            shininess: 30,
            waveHeight: 15,
            waveSpeed: 1,
            zoom: 1
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

