/* Background Effect */
function random_digit(){
    var array = ['0', '1'];
    digit = array[Math.floor(Math.random() * array.length)];
    return digit;
}

function rain(rain_cont, font_size, anim, death_rate){
    let digit = document.createElement('p');
    let left = Math.floor(Math.random() * 100);

    digit.classList.add('digit_txt');
    rain_cont.appendChild(digit);
    digit.innerText = random_digit();
    digit.style.left = left + '%';
    digit.style.fontSize = font_size + 'pt';
    digit.style.animation = anim;

    setTimeout(function(){
        rain_cont.removeChild(digit);
    }, death_rate);
}

const rain_cont = document.querySelectorAll("#rain_cont");
console.log(rain_cont);
setInterval(function(){
    rain(rain_cont[0], 52, "rain linear 5s", 5000);
}, 100);

setInterval(function(){
    rain(rain_cont[1], 32, "rain linear 15s", 15000);
}, 200);

/* Description Scrolling */

const desc_cont = document.getElementById("desc_home");
let i = 0;

function animate_desc(){
    for(let i = 0; i < desc_cont.children.length; i++){
        desc_cont.children[i].classList.remove('desc_in')
        desc_cont.children[i].classList.remove('desc_out')
    }
    desc_cont.children[i].classList.add('desc_in')

    setTimeout(function(){
        desc_cont.children[i].classList.add('desc_out')
    }, 2800);

    setTimeout(function(){
        if(i == desc_cont.children.length-1){
            i = 0;
        }
        else {
            i++;
        }
        animate_desc();
    }, 3000);
}

window.onload = animate_desc;

/* About Lights */

const about_page = document.querySelectorAll("#about");
const about_bg = document.querySelectorAll(".bg_inact");
const desc_img = document.getElementById("desc_img");
const desc_header = document.getElementById("desc_header");
const desc_subheader = document.getElementById("desc_subheader");
const desc_info = document.querySelectorAll("#desc_info");
const about_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        function light_bg (el){
            el.classList.toggle('bg_active', entry.isIntersecting);
        }
        
        function light_p (el){
            el.classList.toggle('desc_active_p', entry.isIntersecting);
        }
        
        about_bg.forEach((el) => light_bg(el));
        desc_img.classList.toggle('desc_img_act', entry.isIntersecting);
        desc_header.classList.toggle('desc_active_h1', entry.isIntersecting);
        desc_subheader.classList.toggle('desc_active_h2', entry.isIntersecting);
        desc_info.forEach((el) => light_p(el));
    });
}, {
    threshold: 0.5
});

about_page.forEach((el) => about_ob.observe(el));

/* About Button */

const about_btn = document.getElementById("btn_about");
const cont_desc = document.querySelectorAll("#cont_desc");

const about_edge_ob = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        about_btn.classList.toggle("btn_active", entry.isIntersecting);
        if(entry.isIntersecting) about_edge_ob.unobserve(entry.target);
    });
}, {
    threshold: 1
});
cont_desc.forEach((el) => about_edge_ob.observe(el));

/* Footer Section */

const footer_sec = document.querySelectorAll("#cont_footer");
const footer_content = document.getElementById("footer_content");
const footer_logo = document.getElementById("footer_logo");
const about_sec = document.getElementById("about");

const footer_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const about_sec = document.getElementById("about");
        if(entry.isIntersecting){
            footer_content.style.top = "50%";
            footer_logo.style.top = "50%";
            about_sec.style.boxShadow = "0px 20px 20px black";
        }
        else {
            footer_content.style.top = "-20%";
            footer_logo.style.top = "-20%";
            about_sec.style.boxShadow = "0px 8px 8px black";
        }
    });
}, {
    threshold: 0.3
})

footer_sec.forEach((el) => footer_ob.observe(el));