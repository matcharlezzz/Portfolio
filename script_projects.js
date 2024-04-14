
/* Footer Section */

const footer_sec = document.querySelectorAll("#cont_footer");
const footer_content = document.getElementById("footer_content");
const footer_logo = document.getElementById("footer_logo");

const footer_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const projects_sec = document.getElementById("projects");
        if(entry.isIntersecting){
            footer_content.style.top = "50%";
            footer_logo.style.top = "50%";
            projects_sec.style.boxShadow = "0px 20px 20px black";
        }
        else {
            footer_content.style.top = "-20%";
            footer_logo.style.top = "-20%";
            projects_sec.style.boxShadow = "0px 8px 8px black";
        }
    });
}, {
    threshold: 0.3
})

footer_sec.forEach((el) => footer_ob.observe(el));