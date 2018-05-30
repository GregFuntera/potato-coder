window.onload = function() {
    Particles.init({
        selector: '.background-particle',
        color: ['#007bff', '#00C9B1'],
        connectParticles: true,
        sizeVariations: 5,
        maxParticles: 250,
        speed: 2,
        responsive: [
            {
                breakpoint: 850,
                options: {
                  color: '#00C9B1',
                  maxParticles: 80,
                connectParticles: false
              }
            }

        ]
    });
};