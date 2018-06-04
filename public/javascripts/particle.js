window.onload = function() {
    Particles.init({
        selector: '.background-particle',
        color: ['#007bff', '#00C9B1'],
        connectParticles: false,
        sizeVariations: 5,
        maxParticles: 500,
        speed: 2,
        responsive: [
            {
                breakpoint: 850,
                options: {
                  color: '#00C9B1',
                  maxParticles: 500,
                connectParticles: false
              }
            }

        ]
    });
};