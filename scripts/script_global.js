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

const body_div = document.getElementById("body_div");
const main_sec = document.getElementById("main");
const side_bar = document.getElementById("side_bar");
const nav_img = document.getElementById("nav_img");

let is_open = false

function openNav(){
    if (is_open == false){
        body_div.style.overflowY="hidden";
        main_sec.style.filter = "blur(20px)";
        main_sec.style.pointerEvents = "none";
        side_bar.style.visibility = "visible";
        side_bar.classList.add('side_bar_act');
        nav_img.src = "assets/img/exit.png";
        is_open = true;
    }
    else {
        body_div.style.overflowY="visible";
        main_sec.style.filter = "blur(0px)";
        main_sec.style.pointerEvents = "all";
        side_bar.style.visibility = "none";
        side_bar.classList.remove('side_bar_act');
        nav_img.src = "assets/img/nav.png";
        is_open = false;
    }
}