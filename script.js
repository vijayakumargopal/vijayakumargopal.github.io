/* ===========================================
   LOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/* ===========================================
   MOBILE MENU
=========================================== */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ===========================================
   SCROLL PROGRESS BAR
=========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width = (scrollTop / height) * 100 + "%";

});

/* ===========================================
   SCROLL TO TOP
=========================================== */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================================
   COUNTER
=========================================== */

const counters = document.querySelectorAll(".counter");

const speed = 60;

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / speed);

                if (count >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));

/* ===========================================
   REVEAL ANIMATION
=========================================== */

const revealElements = document.querySelectorAll(

    ".section,.timeline-item,.project-card,.skill-card,.cert-card,.education-card,.contact-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});

/* ===========================================
   ACTIVE NAVIGATION
=========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================================
   THEME TOGGLE
=========================================== */

const themeBtn = document.getElementById("theme-toggle");

let dark = true;

themeBtn.addEventListener("click", () => {

    dark = !dark;

    if (!dark) {

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#111827";

        document.querySelectorAll(".project-card,.skill-card,.stat-card,.timeline-content,.contact-card,.education-card,.cert-card,.highlight")
            .forEach(card => {

                card.style.background = "#ffffff";
                card.style.color = "#111827";

            });

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        location.reload();

    }

});

/* ===========================================
   PARALLAX HERO
=========================================== */

window.addEventListener("mousemove", e => {

    const bg = document.querySelector(".hero-bg");

    const x = (window.innerWidth / 2 - e.clientX) / 60;

    const y = (window.innerHeight / 2 - e.clientY) / 60;

    bg.style.transform = `translate(${x}px,${y}px)`;

});

/* ===========================================
   NAVBAR SHADOW
=========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ===========================================
   END
=========================================== */
