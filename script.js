/* Background Effect */
function random_digit(){
    var array = ['0', '1'];
    digit = array[Math.floor(Math.random() * array.length)];
    return digit;
}

function rain(){
    const rain_cont = document.getElementById("rain_cont");

    let digit = document.createElement('p');
    let left = Math.floor(Math.random() * 100);

    digit.classList.add('digit_txt');
    rain_cont.appendChild(digit);
    digit.innerText = random_digit();
    digit.style.left = left + '%';

    setTimeout(function(){
        rain_cont.removeChild(digit);
    }, 5000);
}

setInterval(function(){
    rain();
}, 70)

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

/* Parallax Effect */
const hiddenItems = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('active', entry.isIntersecting);
    });
}, {
    threshold: 0.15
});

observer.observe(hiddenItems[0])