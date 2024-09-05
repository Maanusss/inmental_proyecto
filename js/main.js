const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('Av. Bartolome Mitre 2073')
.pauseFor(2000)
.start();