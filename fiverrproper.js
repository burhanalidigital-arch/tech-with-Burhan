/* ==========================================
   TECH WITH BURHAN
   MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       1. ACTIVE NAVBAR LINK
    ========================================== */

    const navLinks = document.querySelectorAll(".navbar a");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });


    /* ==========================================
       2. SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .about-image, .about-content, " +
        ".portfolio-item, .why-card, .section-title, .cta-box"
    );

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ==========================================
       3. SMOOTH PAGE BUTTON EFFECT
    ========================================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.96)";

            setTimeout(() => {

                this.style.transform = "";

            }, 150);

        });

    });


    /* ==========================================
       4. IMAGE LOADING EFFECT
    ========================================== */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("load", function () {

            this.classList.add("loaded");

        });

    });


    /* ==========================================
       5. PORTFOLIO IMAGE CLICK
    ========================================== */

    const portfolioImages =
        document.querySelectorAll(".portfolio-item img");

    portfolioImages.forEach(image => {

        image.addEventListener("click", function () {

            const imageViewer =
                document.createElement("div");

            imageViewer.className = "image-viewer";

            imageViewer.innerHTML = `
                <div class="viewer-content">

                    <button class="close-viewer">
                        ×
                    </button>

                    <img src="${this.src}" alt="Portfolio Image">

                </div>
            `;

            document.body.appendChild(imageViewer);

            document.body.style.overflow = "hidden";


            /* Close Button */

            const closeButton =
                imageViewer.querySelector(".close-viewer");

            closeButton.addEventListener("click", function () {

                imageViewer.remove();

                document.body.style.overflow = "";

            });


            /* Close by clicking background */

            imageViewer.addEventListener(
                "click",
                function (event) {

                    if (event.target === imageViewer) {

                        imageViewer.remove();

                        document.body.style.overflow = "";

                    }

                }
            );

        });

    });


    /* ==========================================
       6. CURRENT YEAR
    ========================================== */

    const yearElements =
        document.querySelectorAll(".footer-bottom p");

    yearElements.forEach(element => {

        const currentYear =
            new Date().getFullYear();

        element.innerHTML =
            `© ${currentYear} Tech With Burhan. All Rights Reserved.`;

    });


    /* ==========================================
       7. CONSOLE MESSAGE
    ========================================== */

    console.log(
        "Tech With Burhan website loaded successfully."
    );

});