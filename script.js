const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [
    { offset: Math.random() * 100, frequency: 0.005, amplitude: 80, speed: 0.09 },  // Wave 2
    { offset: Math.random() * 100, frequency: 0.008, amplitude: 60, speed: 0.11 } ,  // Wave 4
    { offset: Math.random() * 100, frequency: 0.007, amplitude: 40, speed: 0.1 },  // Wave 2
    { offset: Math.random() * 100, frequency: 0.006, amplitude: 50, speed: 0.08 }   // Wave 4
];

function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.strokeStyle = '#C49EF7'; // Set wave color

    for (let i = 0; i < waves.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;

        // Create wave shape for each wave
        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin(x * waves[i].frequency + waves[i].offset) * waves[i].amplitude;
            ctx.lineTo(x, y + (i * 20)); // Offset each wave vertically
        }

        ctx.stroke();
        waves[i].offset += waves[i].speed; // Update offset for animation
    }

    requestAnimationFrame(drawWaves); // Call drawWaves again for the next frame
}

// Start the animation
drawWaves();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
