const canvas = document.getElementById('shapes');
const ctx = canvas.getContext('2d');

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

// Limpiar el lienzo
ctx.clearRect(0, 0, 1000, 500) // x,y,width,height

const sun = {
  x: 100,
  y: 100,
  width: 200,
  height: 200
}

const car = {
  x: 600,
  y: 425,
  width: 100,
  height: 100,
}

// Pintar imagen en Canvas
const sunImg = new Image();
sunImg.src = './img/sun.png';

const carImg = new Image();
carImg.src = './img/car.png';

const treeImg = new Image();
treeImg.src = './img/tree.png';

const trees = [
  {
	  x: 200,
	  y: 400,
	  width: 100,
	  height: 100
  },
  {
	  x: 400,
	  y: 400,
	  width: 100,
	  height: 100
  },
  {
	  x: 600,
	  y: 400,
	  width: 100,
	  height: 100
  },
  {
	  x: 800,
	  y: 400,
	  width: 100,
	  height: 100
  }
]

// Función que pinta todos los elementos
window.onload = function () {
  ctx.drawImage(sunImg, sun.x, sun.y, sun.width, sun.height);
  trees.forEach(elem => {
    ctx.drawImage(treeImg, elem.x, elem.y, elem.width, elem.height);
  })
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height); // imagen, x, y, width, height
}

// Función que mueve el coche
function moveCar() {
  ctx.clearRect(0, 0, 1000, 500);
  car.x = car.x + 10;
  if (car.x > 1000) {
    car.x = -50;
  }
  ctx.drawImage(sunImg, sun.x, sun.y, sun.width, sun.height);
  trees.forEach(elem => {
    ctx.drawImage(treeImg, elem.x, elem.y, elem.width, elem.height);
  })
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height); // imagen, x, y, width, height
}

// Función que arranca los movimientos
setTimeout(function () {
  let interval = setInterval(moveCar, 100);
}, 1000)

