const educ_sec = document.querySelectorAll("#educ");
const educ_div = document.querySelectorAll(".educ_inact");

const educ_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        function appear(el){
            el.classList.toggle('educ_active', entry.isIntersecting);
            if(entry.isIntersecting) educ_ob.unobserve(entry.target);
        }

        educ_div.forEach((el) => appear(el));
    });
}, {
    threshold: 0.3
});

educ_sec.forEach((el) => educ_ob.observe(el));

/* Footer Section */

const footer_sec = document.querySelectorAll("#cont_footer");
const footer_content = document.getElementById("footer_content");
const footer_logo = document.getElementById("footer_logo");
const skill_seg = document.getElementById("skills");

const footer_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const skill_seg = document.getElementById("about");
        if(entry.isIntersecting){
            footer_content.style.top = "50%";
            footer_logo.style.top = "50%";
            skill_seg.style.boxShadow = "0px 30px 20px black";
        }
        else {
            footer_content.style.top = "-20%";
            footer_logo.style.top = "-20%";
            skill_seg.style.boxShadow = "0px 18px 8px black";
        }
    });
}, {
    threshold: 0.3
})

footer_sec.forEach((el) => footer_ob.observe(el));

/* Skills Page */
const skills_sec = document.querySelectorAll("#skills");
const skills_div = document.querySelectorAll(".skill_inact")

const skills_op = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        function skill_desc(el) {
            el.classList.toggle('skill_active', entry.isIntersecting);
        }
        skills_div.forEach((el) => skill_desc(el));
    });
}, {
    threshold: 0.7
});

skills_sec.forEach((el) => skills_op.observe(el));