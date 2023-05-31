//Declaracion de variables

var radioMayor = 60;
var x = radioMayor;
var y = radioMayor;
var velocidadX = 2; // velocidad de movimiento en eje X
var velocidadY = 3.5; // velocidad de movimiento en eje Y
var direccionX = 1; // dirección de movimiento en eje X
var direccionY = 1; // dirección de movimiento en eje Y
var velocidad = 5;
var direccion = 1;
var anguloRotacion = 270;


function setup() {
  createCanvas(400, 400);
  background(19, 105, 147);
}


function draw() {
  background(100, 200, 150, 150);

  //lineas negras
  push ();
  strokeWeight(0.8);

  line(330, 130, 400, 130); //lineas horizontales
  line(250, 160, 400, 160);
  //line(350, 200, 400, 200);

  line(220, 20, 270, 90); //lineas diagonales
  line(250, 20, 300, 80);

  line(150, 250, 60, 350); //lineas al lado de circulo pequeño
  line(150, 200, 56, 311); //Linea al lado de circulo pequeño

  line(300, 40, 100, 100); //linea sola
  line(80, 80, 300, 300); //linea triangulo
  line(200, 100, 300, 300); //linea triangulo
  pop();

  //circulos

  stroke(0);
  fill(255);
  ellipse(100, 250, 60, 60); //blanco pequeño

  noStroke();
  fill(500, 150, 0);
  ellipse(100, 250, 50, 50); //naranja

  fill(250, 250, 250);
  ellipse(100, 100, 140, 140); //blanco grande

  fill(250, 250, 20);
  ellipse(100, 100, 100, 100); //amarillo

  fondo();

  // cambia direcciónX
  x += velocidadX * direccionX;

  if (x > width - radioMayor || x < radioMayor) {
    direccionX = -direccionX;
  }

  // cambia direcciónY
  y += velocidadY * direccionY;

  if (y > height - radioMayor || y < radioMayor) {
    direccionY = -direccionY;
  }

  push();
  ellipseMode(RADIUS);

  //Transformaciones
  translate(x, y);
  rotate(radians(x));

  fill(255, 100, 150, 200);
  noStroke();
  ellipse(0, 0, 40, 40); //elipse rosa
  pop();

  push();

  x += velocidad * direccion; // Cambio de direccion
  translate(200 + x, height / 2);
  rotate(radians(anguloRotacion));


  //linea negra en movimiento
  
  strokeWeight(1);
  stroke(0);
  line(0, 20, 0, 80);

  if (x > width - radioMayor || x < radioMayor) {
    direccion = -direccion; // Cambiar dirección
  }
  if (direccion == 1) {
    anguloRotacion = 270;
  } else {
    anguloRotacion = 90;
    pop();
  }
}

function fondo() {
  stroke(0);
  strokeWeight(2);
}
