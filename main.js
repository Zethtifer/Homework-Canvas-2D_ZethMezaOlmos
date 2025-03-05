const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// First image
// 1. Background = Rectangle
// 1.1 Define the beginning of the outline
ctx.beginPath();

// 1.2 Define the styles
ctx.fillStyle = '#161616';

// 1.3 Specify the shape
// ctx.rect(x, y, width, height);
ctx.rect(0, 0, 300, 450);

// 1.4 Draw the filling or outline
ctx.fill();

// 2. Circles
// ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);

// 2.1 Define the function to make the circles
function dibujarCirculo(x, y, radius) {
    ctx.beginPath();

    ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#F3F0EE';
    ctx.lineWidth = 2;

    ctx.stroke();
    ctx.closePath();
}

// 2.2 Draw multiple circles
let centreX = 150; 
let centreY = 145; 
let radioInicial = 90;
let distanciaEntreCirculos = 16; 

for (let k = 0; k < 11; k++) {
    dibujarCirculo(centreX, centreY, radioInicial);

    centreY += distanciaEntreCirculos; 
}


// Second image 
// 3. Background = Rectangle
// 3.1 Define the beginning of the outline
ctx.beginPath();

// 3.2 Define the styles
ctx.fillStyle = '#EEEAE8';

// 3.3 Specify the shape
// ctx.rect(x, y, width, height);
ctx.rect(320, 0, 310, 365);

// 3.4 Draw the filling or outline
ctx.fill();

// 4. Half circles (top part)
// 4.1 Define the beginning of the outline
function dibujarCirculosNegros(x, y, radius) {
    ctx.beginPath();

    ctx.ellipse(x, y, radius, radius, 1.57, Math.PI, 2 * Math.PI); 
    ctx.fillStyle = '#19171C';

    ctx.fill();
    //ctx.closePath();
}

// 4.2 Draw multiple circles
let centroX = 330; 
let centroY = 65; 
let radiusInicial = 58;
let distanceEntreCirculos = 58; 

for (let k = 0; k < 5; k++) {
    dibujarCirculosNegros(centroX, centroY, radiusInicial);

    centroX += distanceEntreCirculos; 
}

// 5. Half circles (middle part)
// 5.1 Define the beginning of the outline
function dibujarCirculosNegrus(x, y, radius) {
    ctx.beginPath();

    ctx.ellipse(x, y, radius, radius, 4.71, Math.PI, 2 * Math.PI); 
    ctx.fillStyle = '#19171C';

    ctx.fill();
    //ctx.closePath();
}

// 5.2 Draw multiple circles
let centriX = 388; 
let centriY = 181; 
let radisInicial = 58;
let distanceEntreCircus = 58; 

for (let k = 0; k < 5; k++) {
    dibujarCirculosNegrus(centriX, centriY, radisInicial);

    centriX += distanceEntreCircus; 
}

// 6. Half circles (top part)
// 6.1 Define the beginning of the outline
function dibujarCirculosNegros(x, y, radius) {
    ctx.beginPath();

    ctx.ellipse(x, y, radius, radius, 1.57, Math.PI, 2 * Math.PI); 
    ctx.fillStyle = '#19171C';

    ctx.fill();
    //ctx.closePath();
}

// 6.2 Draw multiple circles
let centraX = 331; 
let centraY = 297; 
let radiousInicial = 58;
let distnceEntreCirculos = 58; 

for (let k = 0; k < 5; k++) {
    dibujarCirculosNegros(centraX, centraY, radiousInicial);

    centraX += distnceEntreCirculos; 
}


// third image 
// 7. Background = Rectangle
// 7.1 Define the beginning of the outline
ctx.beginPath();

// 7.2 Define the styles
ctx.fillStyle = '#EBE7E1';

// 7.3 Specify the shape
// ctx.rect(x, y, width, height);
ctx.rect(640, 0, 300, 400);

// 7.4 Draw the filling or outline
ctx.fill();

// 8. Orange Circle
// 8.1 Define the beginning of the outline
ctx.beginPath();

// 8.2 Define the styles
ctx.fillStyle = '#E5965D';

// 8.3 Specify the shape
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startingAngle, endingAngle);
ctx.ellipse(785, 225, 100, 100, 0, 0, Math.PI*2);

// 8.4 Draw the filling or outline
ctx.fill();

// 9. Lines
// 9.1 Define the function for the lines
function dibujarLineasLargas(x){
    // 9.1.1 Define the beginning of the outline
    ctx.beginPath();

    // 9.1.2 Define the styles 
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // 9.1.3 Specify the shape
    ctx.moveTo(x, 15);
    ctx.lineTo(x, 370);

    // 9.1.4 Draw the filling or outline
    ctx.stroke();
}

// 9.2 Draw the line
dibujarLineasLargas(745);
dibujarLineasLargas(755);
dibujarLineasLargas(765);
dibujarLineasLargas(775);
dibujarLineasLargas(785);
dibujarLineasLargas(795);
dibujarLineasLargas(805);
dibujarLineasLargas(815);
dibujarLineasLargas(825);

// 10. Black Circle
// 10.1 Define the beginning of the outline
ctx.beginPath();

// 10.2 Define the styles
ctx.fillStyle = '#000000';

// 10.3 Specify the shape
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startingAngle, endingAngle);
ctx.ellipse(765, 145, 65, 65, 0, 0, Math.PI*2);

// 10.4 Draw the filling or outline
ctx.fill();


// Fourth image
// 11. Background = Rectangle
// 11.1 Define the beginning of the outline
ctx.beginPath();

// 11.2 Define the styles
ctx.fillStyle = '#E2E2D9';

// 11.3 Specify the shape
// ctx.rect(x, y, width, height);
ctx.rect(960, 0, 300, 400);

// 11.4 Draw the filling or outline
ctx.fill();

// 12. Background circle
// 12.1 Define the beginning of t he outline
ctx.beginPath();

// 12.2 Define the styles
ctx.fillStyle = '#D85342';

// 12.3 Specify the shape
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startingAngle, endingAngle);
ctx.ellipse(1110, 100, 80, 80, 0, 0, Math.PI*2);

// 12.4 Draw the filling or outline
ctx.fill();

// 13. Black arcs
// 13.1 Definir la función para los circulos
function dibujarCirculosNegros(x, y, radius, startAngle, endAngle) {
    // 13.1.1 Define the beginning of the outline
    ctx.beginPath();
    
    // 13.1.2 Define the styles
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.strokeStyle = '#161616';
    ctx.lineWidth = 6;

    // 13.1.3 Draw the filling or outline
    ctx.stroke();
}

// 13.2 Dibujar los multiples circulos con un patrón
let centruX = 1110;
let centruY = 198;
let radieInicial = 8;
let separacion = 10;


for (let j = 0; j < 9; j++) {
    dibujarCirculosNegros(centruX, centruY, radieInicial, Math.PI, Math.PI*2);

    radieInicial += separacion;
}

// 14. Lines (right side)
// 14.1 Define the function for the lines
function dibujarLineasDerecha(x){
    // 9.1.1 Define the beginning of the outline
    ctx.beginPath();

    // 9.1.2 Define the styles 
    ctx.strokeStyle = '#161616';
    ctx.lineWidth = 6;

    // 9.1.3 Specify the shape
    ctx.moveTo(x, 198);
    ctx.lineTo(x, 390);

    // 9.1.4 Draw the filling or outline
    ctx.stroke();
}

// 9.2 Draw the line
dibujarLineasDerecha(1022);
dibujarLineasDerecha(1032);
dibujarLineasDerecha(1042);
dibujarLineasDerecha(1052);
dibujarLineasDerecha(1062);
dibujarLineasDerecha(1072);
dibujarLineasDerecha(1082);
dibujarLineasDerecha(1092);
dibujarLineasDerecha(1102);

dibujarLineasDerecha(1118);
dibujarLineasDerecha(1128);
dibujarLineasDerecha(1138);
dibujarLineasDerecha(1148);
dibujarLineasDerecha(1158);
dibujarLineasDerecha(1168);
dibujarLineasDerecha(1178);
dibujarLineasDerecha(1188);
dibujarLineasDerecha(1198);
