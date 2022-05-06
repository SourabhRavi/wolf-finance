// var Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector('body'))

// $(window).scroll(function () {

//     // selectors
//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.panel');

//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + ($window.height() / 3);

//     $panel.each(function () {
//         var $this = $(this);

//         // if position is within range of this panel.
//         // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//         // Remember we set the scroll to 33% earlier in scroll var.
//         if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

//             // Remove all classes on body with color-
//             $body.removeClass(function (index, css) {
//                 return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
//             });

//             // Add class of currently active div
//             $body.addClass('color-' + $(this).data('color'));
//         }
//     });

// }).scroll();

// hero section height equal to window height
$(window).on('load', function () {
    var windowHeight = $(window).height();
    $('#hero').css('height', windowHeight);
}).trigger('resize');

function setTranslate(yPos, el) {
    el.style.backgroundPosition = `0px ${yPos - 100}px`;
}

var aboutImg = document.querySelector("#about-img");
var tradingImg = document.querySelector("#trading-img");
var ctaImg = document.querySelector("#cta");

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;
    // console.log("scroll:", xScrollPosition, yScrollPosition)

    setTranslate((yScrollPosition * 0.2) - 300, aboutImg);
    setTranslate((yScrollPosition * 0.2) - 800, tradingImg);
    setTranslate((yScrollPosition * 0.2) - 1000, ctaImg);

    window.requestAnimationFrame(scrollLoop);
}
scrollLoop();


document.addEventListener('mousemove', (e) => {
    if (e.clientX > window.innerWidth - 20) {
        document.querySelector('html').classList.add('active-scrollbar');
    }
    else {
        document.querySelector('html').classList.remove('active-scrollbar');
    }
});

// gsap.set("#circle", { xPercent: -20, yPercent: -20 });

// const ball = document.querySelector("#circle");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// const mouse = { x: pos.x, y: pos.y };
// const speed = 0.35;

// const xSet = gsap.quickSetter(ball, "x", "px");
// const ySet = gsap.quickSetter(ball, "y", "px");

// window.addEventListener("mousemove", e => {
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// gsap.ticker.add(() => {

//     // adjust speed for higher refresh monitors
//     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

//     pos.x += (mouse.x - pos.x) * dt;
//     pos.y += (mouse.y - pos.y) * dt;
//     xSet(pos.x);
//     ySet(pos.y);
// });

