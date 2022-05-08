// hamburger menu icon animation
$(document).ready(function () {
    $('#nav-hamburger').click(function () {
        $(this).toggleClass('open');
    });
});
// navbar toggler
let navItem = document.getElementsByClassName("nav-item");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
        if (parseInt(window.innerWidth) > 0) {
            document.getElementById("nav-hamburger").classList.remove("open");
            document.getElementById("hamburger-wrap").click();
        }
    })
}

function setTranslate(yPos, el) {
    el.style.backgroundPosition = `0px ${yPos - 100}px`;
}

var aboutImg = document.querySelector("#about-img");
var tradingImg = document.querySelector("#trading-img");
var ctaImg = document.querySelector("#cta");

// var xScrollPosition;
// var yScrollPosition;

// function scrollLoop() {
//     xScrollPosition = window.scrollX;
//     yScrollPosition = window.scrollY;
//     // console.log("scroll:", xScrollPosition, yScrollPosition)

//     setTranslate((yScrollPosition * 0.2) - 300, aboutImg);
//     setTranslate((yScrollPosition * 0.2) - 800, tradingImg);
//     setTranslate((yScrollPosition * 0.2) - 1000, ctaImg);

//     window.requestAnimationFrame(scrollLoop);
// }
// scrollLoop();


document.addEventListener('mousemove', (e) => {
    if (e.clientX > window.innerWidth - 20) {
        document.querySelector('html').classList.add('active-scrollbar');
    }
    else {
        document.querySelector('html').classList.remove('active-scrollbar');
    }
});

gsap.set("#circle", { xPercent: -20, yPercent: -20 });

const ball = document.querySelector("#circle");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed2 = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

gsap.ticker.add(() => {

    // adjust speed2 for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed2, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});

let body = document.body,
    jsScroll = document.getElementsByClassName('js-scroll')[0],
    height = jsScroll.getBoundingClientRect().height - 1,
    speed = 0.05

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;
    var scroll1 = "translateY(-" + offset + "px) translateZ(0) ";
    jsScroll.style.transform = scroll1;

    // setTranslate((offset * 0.2) - 300, aboutImg);
    // setTranslate((offset * 0.2) - 800, tradingImg);
    // setTranslate((offset * 0.2) - 1000, ctaImg);
    console.log(offset);
    raf = requestAnimationFrame(smoothScroll);
}

smoothScroll();