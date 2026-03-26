window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', { duration: 1000 });

sr.reveal('.area-2', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-3', { 
    rotate: { x: 100, y: 100, z: 0},
    duration: 2000
});

sr.reveal('.sr-texto', { 
    duration: 1500, 
    origin: 'bottom', 
    distance: '30px' 
});