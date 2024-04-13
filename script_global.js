/* Dynamic Navigation Button */

const nav_header = document.querySelectorAll("#nav_header");
const nav_butt = document.getElementById("nav_button");
const header_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        nav_butt.classList.toggle("nav_active", !entry.isIntersecting)
    });
}, {
    threshold: 0.1
});

nav_header.forEach((el) => header_ob.observe(el));

