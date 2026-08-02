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

// GitHub API — load projects dynamically
async function loadProjects() {
    const grid = document.getElementById('projects-grid');
    const username = 'itsliclara';

    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await res.json();

        grid.innerHTML = '';

        const filtered = repos.filter(repo => !repo.fork && repo.name !== 'personal-portfolio');

        if (filtered.length === 0) {
            grid.innerHTML = '<p>No projects yet. Check back soon!</p>';
            return;
        }

        filtered.forEach(repo => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${repo.name.replace(/-/g, ' ')}</h3>
                <p>${repo.description || 'No description yet.'}</p>
                <a href="${repo.homepage || repo.html_url}" target="_blank">
                    View Project
                </a>
            `;
            grid.appendChild(card);
        });

    } catch (err) {
        grid.innerHTML = '<p>Could not load projects. Try again later.</p>';
    }
}

loadProjects();
