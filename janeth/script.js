const mensaje = document.getElementById('mensaje');
const musica = document.getElementById('musicaFondo');

// Volumen inicial de música de fondo
musica.volume = 0.3;

// Reducir volumen al reproducir mensaje
mensaje.addEventListener('play', () => {
    musica.volume = 0.05;
});

// Volver al volumen normal al pausar o terminar
mensaje.addEventListener('pause', () => {
    musica.volume = 0.3;
});

mensaje.addEventListener('ended', () => {
    musica.volume = 0.3;
});

// Animación con imágenes de mariposa azul
const container = document.querySelector('.butterflies');

for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');
    img.src = '/images/mariposa.png';
    img.alt = 'mariposa azul';
    img.className = 'butterfly';
    img.style.left = `${Math.random() * 100}%`;
    img.style.animationDuration = `${10 + Math.random() * 20}s`;
    img.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(img);
}