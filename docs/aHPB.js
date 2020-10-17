const PHASE_IN_TEXT = document.getElementById("phaseInText");
const COLOR_CLICK1 = document.getElementById("colorClick1");
const COLOR_CLICK2 = document.getElementById("colorClick2");
const COLOR_CLICK3 = document.getElementById("colorClick3");

function phase1() {
        if (window.document.scrollTOP || document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            PHASE_IN_TEXT.style.opacity = 1;
        } else {
            PHASE_IN_TEXT.style.opacity = 0;
        }
    }

function phase2() {
        if (window.document.scrollTOP || document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            COLOR_CLICK1.style.opacity = 1;
            COLOR_CLICK2.style.opacity = 1;
            COLOR_CLICK3.style.opacity = 1;
        } else {
            COLOR_CLICK1.style.opacity = 0;
            COLOR_CLICK2.style.opacity = 0;
            COLOR_CLICK3.style.opacity = 0;
        }
    }

function scrolling() {
    phase1();
    phase2();
}
window.onscroll = scrolling;


/* window.addEventListener("scroll", phase1());
window.addEventListener("scroll", phase2()); */