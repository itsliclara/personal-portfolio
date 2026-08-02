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
