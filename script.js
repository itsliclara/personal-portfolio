gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".navbar-wrapper",{
    y:-80,
    opacity:0,
    duration:1
})

.from(".small-title",{
    y:20,
    opacity:0,
    duration:.6
},"-=.5")

.from(".hero-title",{
    y:60,
    opacity:0,
    duration:.9
},"-=.4")

.from(".hero-subtitle",{
    y:40,
    opacity:0,
    duration:.7
},"-=.5")

.from(".hero-description",{
    y:30,
    opacity:0,
    duration:.7
},"-=.4")

.from(".button-wrapper",{
    y:20,
    opacity:0,
    duration:.6
},"-=.4")

.from(".hero-photo",{
    x:120,
    opacity:0,
    scale:.9,
    duration:1
},"-=1")

.from(".badge",{
    y:25,
    opacity:0,
    duration:.6
},"-=.5");

gsap.to(".hero-photo",{

    y:90,

    ease:"none",

    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"bottom top",

        scrub:true
    }

});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-content", {
    y: -80,
    opacity: 0.35,
    ease: "none",

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".hero-photo", {
    y: 100,
    scale: 0.92,
    ease: "none",

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".badge", {
    y: 45,
    opacity: 0,
    ease: "none",

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "70% top",
        scrub: 1
    }
});