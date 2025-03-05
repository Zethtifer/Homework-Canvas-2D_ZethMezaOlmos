const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 1. Primer imagen 

// 1.1 Analisis de la imagen
// 1.1.1 Fondo negro (#161616), con 1 línea y cuadrilateros de diversos tamaños de color #ececec, con "salpicaduras" de negro.

// 1.2 Fondo
// 1.2.1 Rectangulo - Definir el inicio del trazo
ctx.beginPath();

// 1.2.2 Definir los estilos
ctx.fillStyle = '#161616';

// 1.2.3 Especificar la figura
// ctx.rect(x,y,width,lenght);
ctx.rect(0, 0, 500, 500); 

// 1.2.4 Dibujar relleno o contorno
ctx.fill();

// 1.3 Línea 
// 1.3.1 Definir la función para hacer la línea
function dibujarLineaSola(y) {
    // 1.3.1.1 Definir inicio del trazo
    ctx.beginPath();

    // 1.3.1.2 Definir los estilos
    ctx.strokeStyle = '#ECECEC';
    ctx.lineWidth = 3;

    // 1.3.1.3 Especificamos la figura 
    ctx.moveTo (30, y);
    ctx.lineTo (30, y + 420);

    // 1.3.1.4 Dibujar el relleno o contorno
    ctx.stroke();
}

//1.3.2 Dibujar la línea
dibujarLineaSola(40);

// 1.4 Cuadrilateros inclinados 
// 1.4.1 Definir la función para hacer los cuadrilateros
// 1.4.1.1 Primer cuadrilatero
function dibujarCuadrilatero(x, y, width, height, inclinacion) {
    ctx.beginPath ();
    ctx.strokeStyle = '#161616';

    ctx.moveTo(x, 100);
    ctx.lineTo(x + width, y - inclinacion);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, 400);
    ctx.closePath();

    ctx.fillStyle = "#ECECEC";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
}

// 1.4.2 Dibujar los multiples cuadriláteros con un patrón
let inicioX = 50;
let ancho = 25;
let alto = 400;
let inclinacion = 30;
let espacio = 15;

for (let i = 0; i < 6; i++) {
    dibujarCuadrilatero(inicioX, 65, ancho, alto, inclinacion);
    inicioX += ancho + espacio; // Avanza la siguiente figura
    
    ancho += 15;
    espacio -= 2.5
}



// 2. Segunda imagen
// 2.1 Analisis de la imagen
// 2.1.1 Mitad fondo negro (#161616) y mitad fondo blanco (#f3f0ee), dos circulos grandes de 180º (a.k.a medios circulos), y desde el centro son 20 circulos (pura línea) que van aumentando su tamaño (del centro para afuera), misma idea de colores invertidos.

// 2.2 Fondo (primera mitad)
// 2.2.1 Rectangulo - Definir el inicio del trazo
ctx.beginPath();

// 2.2.2 Definir los estilos
ctx.fillStyle = '#161616';

// 2.2.3 Especificar la figura
// ctx.rect(x,y,width,lenght);
ctx.rect(600, 0, 400, 250); 

// 2.2.4 Dibujar relleno o contorno
ctx.fill();

// 2.3 Circulo grande
// 2.3.1 Definir Inicio del trazo
ctx.beginPath();

// 2.3.2 Definir los estilos
ctx.strokeStyle = '#F3F0EE';
ctx.fillStyle = '#F3F0EE';

// 2.3.3 Especificar la figura.
// ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
ctx.ellipse(800, 250, 135, 135, 0, Math.PI, Math.PI*2);

// 2.3.4 Dibujar relleno o contorno
ctx.stroke();
ctx.fill();

// 2.4. Circulos chicos (pt1)
// 2.4.1 Definir la función para los circulos
function dibujarCirculosNegros(x, y, radius, startAngle, endAngle) {
    // 2.4.1.1 Definir el inicio del trazo
    ctx.beginPath();
    
    // 2.4.1.2 Definir los estilos
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.strokeStyle = '#161616';
    ctx.lineWidth = 2;

    // 2.4.1.3 Dibujar el circulo
    ctx.stroke();
}

// 2.4.2 Dibujar los multiples circulos con un patrón
let centroX = 800;
let centroY = 250;
let radioInicial = 2.5;


for (let j = 0; j < 20; j++) {
    dibujarCirculosNegros(centroX, centroY, radioInicial, Math.PI, Math.PI*2);
    
    radioInicial += 4;
}

// 2.5 Fondo (segunda mitad)
// 2.5.1 Rectangulo - Definir el inicio del trazo
ctx.beginPath();

// 2.5.2 Definir los estilos
ctx.fillStyle = '#F3F0EE';

// 2.5.3 Especificar la figura
// ctx.rect(x,y,width,lenght);
ctx.rect(600, 250, 400, 250); 

// 2.5.4 Dibujar relleno o contorno
ctx.fill();

// 2.6 Circulo grande
// 2.6.1 Definir Inicio del trazo
ctx.beginPath();

// 2.6.2 Definir los estilos
ctx.strokeStyle = '#161616';
ctx.fillStyle = '#161616';

// 2.6.3 Especificar la figura.
// ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
ctx.ellipse(800, 250, 135, 135, 0, 0, Math.PI);

// 2.6.4 Dibujar relleno o contorno
ctx.stroke();
ctx.fill();

// 2.7. Circulos chicos (pt1)
// 2.7.1 Definir la función para los circulos
function dibujarCirculosBlancos(x, y, radius, startAngle, endAngle) {
    // 2.4.1.1 Definir el inicio del trazo
    ctx.beginPath();
    
    // 2.4.1.2 Definir los estilos
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.strokeStyle = '#F3F0EE';
    ctx.lineWidth = 2;

    // 2.4.1.3 Dibujar el circulo
    ctx.stroke();
}

// 2.7.2 Dibujar los multiples circulos con un patrón
let centreX = 800;
let centreY = 250;
let radiusInicial = 2.5;


for (let k = 0; k < 20; k++) {
    dibujarCirculosBlancos(centreX, centreY, radiusInicial, 0, Math.PI);
    
    radiusInicial += 4;
}