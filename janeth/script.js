const mensaje = document.getElementById('mensaje');
const musica = document.getElementById('musicaFondo');
let musicaIniciada = false; // Para evitar múltiples inicios

// Animación con imágenes de mariposa azul
const container = document.querySelector('.butterflies');

for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');
    img.src = '../Images/mariposa.png'; // ajusta según la carpeta real
    img.alt = 'mariposa azul';
    img.className = 'butterfly';
    img.style.left = `${Math.random() * 100}%`;
    img.style.animationDuration = `${10 + Math.random() * 20}s`;
    img.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(img);
}

// Control de reproducción
mensaje.addEventListener('play', () => {
    // Solo iniciar música si no se ha iniciado aún
    if (!musicaIniciada) {
        musica.volume = 0.05;
        musica.play().catch(err => console.warn("Autoplay bloqueado:", err));
        musicaIniciada = true;
    } else {
        musica.volume = 0.05; // bajar volumen si ya sonaba
    }
});

mensaje.addEventListener('pause', () => {
    musica.volume = 0.3;
});

mensaje.addEventListener('ended', () => {
    musica.volume = 0.3;
});
