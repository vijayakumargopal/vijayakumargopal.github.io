/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       DARK MODE
    =============================== */

    const themeBtn = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if (themeBtn)
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem("theme", "dark");

            } else {

                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem("theme", "light");

            }

        });

    }

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-xmark"></i>';

            } else {

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }

    /* Close menu after clicking */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            if (menuBtn)
                menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    /* ===============================
       ACTIVE NAVBAR
    =============================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active-link");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active-link");

            }

        });

    });



    /* ===============================
       SCROLL REVEAL
    =============================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".card,.timeline-item,.skill-card,.project-card,.contact-box"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });



    /* ===============================
       COUNTER ANIMATION
    =============================== */

    const counters = document.querySelectorAll(".card h3");

    counters.forEach(counter => {

        const value = counter.innerText;

        const num = parseInt(value);

        if (isNaN(num)) return;

        let current = 0;

        const increment = Math.ceil(num / 35);

        const update = () => {

            current += increment;

            if (current >= num) {

                counter.innerText = value;

                return;

            }

            if (value.includes("+"))
                counter.innerText = current + "+";
            else
                counter.innerText = current;

            requestAnimationFrame(update);

        };

        update();

    });



    /* ===============================
       HEADER SHADOW
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });



    /* ===============================
       TYPEWRITER EFFECT
    =============================== */

    const title = document.querySelector(".hero h2");

    if (title) {

        const text = "Technical Specialist";

        title.innerHTML = "";

        let i = 0;

        function typing() {

            if (i < text.length) {

                title.innerHTML += text.charAt(i);

                i++;

                setTimeout(typing, 70);

            }

        }

        typing();

    }



    /* ===============================
       IMAGE PARALLAX
    =============================== */

    const image = document.querySelector(".hero-right img");

    window.addEventListener("mousemove", e => {

        if (!image) return;

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        image.style.transform =
            `translate(${x}px,${y}px)`;

    });



    /* ===============================
       SMOOTH BUTTON HOVER
    =============================== */

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0px)";

        });

    });

});
