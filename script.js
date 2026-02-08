// 1. GENERAR CORAZONES FLOTANTES
function createHearts() {
    const container = document.getElementById('heartBg');
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');

        // Aleatoriedad
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5 a 10s
        heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
        heart.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(heart);
    }
}
createHearts();

// 2. CONTADOR DE TIEMPO (Cuenta atrás o adelante)
// Configura la fecha de inicio aquí: Año, Mes (0-11), Día
// Ejemplo: 5 meses atrás desde hoy aprox.
const startDate = new Date();
startDate.setMonth(startDate.getMonth() - 5);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
setInterval(updateTimer, 1000);
updateTimer();

// 3. SORPRESA Y CONFETTI
function celebrate() {
    // Mostrar modal
    document.getElementById('surpriseModal').style.display = 'flex';

    // Lanzar confetti
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function closeModal() {
    document.getElementById('surpriseModal').style.display = 'none';
}

// 4. MÚSICA SIMULADA (Placeholder)
// 4. MÚSICA DE FONDO
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
        // Opcional: Feedback visual
        document.querySelector('.music-control').style.transform = "scale(1.1)";
    } else {
        audio.pause();
        document.querySelector('.music-control').style.transform = "scale(1)";
    }
}
