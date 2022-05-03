const canvas = document.getElementById('shapes');
const ctx = canvas.getContext('2d');
console.log(ctx);

// Limpiar el lienzo
ctx.clearRect(0, 0, 1000, 500) // x,y,width,height

// Cuadrado
ctx.fillStyle = 'purple'; // Defino el color
ctx.fillRect(260, 260, 30, 30) // x,y,width,height

// Rectángulo pero con borde
ctx.strokeStyle = 'blue';
ctx.lineWidth = 20;
ctx.strokeRect(300, 300, 70, 70); // x,y,width,height

// Arc
ctx.beginPath(); // Empiezo a dibujar
ctx.lineWidth = 15; 
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'purple';
ctx.arc(100, 75, 60, 0, 2 * Math.PI); // x centro, y centro, radius, angulo empieza, angulo que acaba
ctx.fill(); // Rellénate
ctx.stroke(); // Pinta tu borde



