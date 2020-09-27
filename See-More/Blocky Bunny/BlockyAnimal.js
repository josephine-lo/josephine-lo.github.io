// BlockyAnimal.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotateMatrix;
  void main() {
    gl_Position = u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
  } `

// Fragment shader program
var FSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  } `

// Global Variables
let canvas;
let gl;
let a_Position;
let u_FragColor;
let u_Size;
let u_ModelMatrix;
let u_GlobalRotateMatrix;

function setUpWebGL(){
  // Retrieve <canvas> element
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  gl.enable(gl.DEPTH_TEST);

}

function connectVariablesToGLSL(){
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Get the storage location of a_Position
  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if (!u_ModelMatrix) {
    console.log('Failed to get the storage location of u_ModelMatrix');
    return;
  }

  u_GlobalRotateMatrix = gl.getUniformLocation(gl.program, 'u_GlobalRotateMatrix');
  if (!u_GlobalRotateMatrix) {
    console.log('Failed to get the storage location of u_GlobalRotateMatrix');
    return;
  }

  var identityM = new Matrix4();
  gl.uniformMatrix4fv(u_ModelMatrix, false, identityM.elements);
}

// Constants
const POINT = 0;
const TRIANGLE = 1;
const CIRCLE = 2;


// Globals related UI elements
let g_selectedColor = [1.0, 1.0, 1.0, 1.0];
let g_selectedSize = 5;
let g_selectedType = POINT;
let g_globalAngle = 0;
let g_yellowAngle = 0;
let g_handAngle = 0;
let g_waveAngle = 0;
let g_armAngle = 0;
let g_yellowAnimation = false;
let g_handAnimation = false;
let g_waveAnimation = false;
let g_armAnimation = false;


function addFunctionsForHTMLUI() {
  // // Button Events (Shape Type)
  document.getElementById('animButtonON').onclick = function() { g_yellowAnimation = true; };
  document.getElementById('animButtonOFF').onclick = function() { g_yellowAnimation = false; };
  document.getElementById('mAnimButtonON').onclick = function() { g_handAnimation = true; };
  document.getElementById('mAnimButtonOFF').onclick = function() { g_handAnimation = false; };
  document.getElementById('waveButtonON').onclick = function() { g_waveAnimation = true; };
  document.getElementById('waveButtonOFF').onclick = function() { g_waveAnimation = false; };
  document.getElementById('armButtonON').onclick = function() { g_armAnimation = true; };
  document.getElementById('armButtonOFF').onclick = function() { g_armAnimation = false; };


  // Size Slider Events
  document.getElementById('yellowSlide').addEventListener('input', function() { g_yellowAngle = this.value; renderAllShapes(); });
  document.getElementById('handSlide').addEventListener('input', function() { g_handAnimation = this.value; renderAllShapes(); });
  document.getElementById('waveSlide').addEventListener('input', function() { g_waveAngle = this.value; renderAllShapes(); });
  document.getElementById('angleSlide').addEventListener('input', function() { g_globalAngle = this.value; renderAllShapes(); });
}

function main() {
  // Set up canvas and gl variables
  setUpWebGL();

  // Set up GLSL shader progarms and connect GLSL variables
  connectVariablesToGLSL();

  // Set up actions for the HTML UI elements
  addFunctionsForHTMLUI();

  // Specify the color for clearing <canvas>
  gl.clearColor(0.67843, 0.82745098, 0.9019607, 1.0);

  requestAnimationFrame(tick);
}

var g_startTime = performance.now()/1000.0;
var g_seconds = performance.now()/1000.0 - g_startTime;

function tick(){
  // Save current time
  g_seconds = performance.now()/1000.0 - g_startTime;
  //console.log(g_seconds);
  
  updateAnimationAngles();

  // Draw everything
  renderAllShapes();

  // Update again
  requestAnimationFrame(tick);

}




function updateAnimationAngles(){
  if(g_yellowAnimation){
    g_yellowAngle = (5 * Math.sin(g_seconds));    
  } 
  if(g_handAnimation){
    g_handAngle = (5 * Math.sin(5 * g_seconds));    
  } 
  if(g_waveAnimation){
    g_waveAngle = (10 * Math.sin(3 * g_seconds));
  }
  if(g_armAnimation){
    g_armAngle = (3 * Math.sin(5 * g_seconds)); 
  }
}


// Draw every shape that is supposed to be in the canvas
function renderAllShapes(){
  
  var startTime = performance.now();

  var globalRotMat = new Matrix4().rotate(g_globalAngle, 0, 1, 0);
  gl.uniformMatrix4fv(u_GlobalRotateMatrix, false, globalRotMat.elements);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.clear(gl.COLOR_BUFFER_BIT);

  var body = new Cube();
  body.color = [0.862745, 0.862745, 0.862745, 1.0];
  body.matrix.setTranslate(-0.5, -0.5, 0.0);
  body.matrix.rotate(-5, 1, 0, 0);
  body.matrix.scale(0.5, 0.6, 0.4);
  body.matrix.translate(0.5, 0, 0);
  body.render();

  //left arm
  var armL = new Cube();
  armL.color = [1.0, 1.0, 1.0, 1.0];
  armL.matrix.setTranslate(-0.39, -0.3, 0.15);
  armL.matrix.rotate(-g_armAngle, 1, 0, 0);
  armL.matrix.rotate(-5, 1, 0, 0);
  armL.matrix.rotate(-22, 0, 0, 1);
  var armLCoor = new Matrix4(armL.matrix);
  armL.matrix.scale(0.1, 0.35, 0.1);
  armL.matrix.translate(-0.5, 0.2, 0);
  armL.render();

  // left hand
  var handL = new Cube();
  handL.color = [1.0, 1.0, 1.0, 1.0];
  handL.matrix = armLCoor;
  handL.matrix.rotate(-g_handAngle, 1, 0, 0);
  handL.matrix.rotate(20, 0, 0, 1);
  handL.matrix.scale(0.1, 0.13, 0.1);
  handL.matrix.translate(-0.18, -0.4, 0.0);
  handL.render();

  // right arm
  var armR = new Cube();
  armR.color = [1.0, 1.0, 1.0, 1.0];
  armR.matrix.setTranslate(0.3, -0.35, 0.15);
  armR.matrix.rotate(-5, 1, 0, 0);
  armR.matrix.rotate(22, 0, 0, 1);
  var armRCoor = new Matrix4(armR.matrix);
  armR.matrix.scale(0.1, 0.35, 0.1);
  armR.matrix.translate(0.5, 0.2, 0);
  armR.render();

  // right hand
  var handR = new Cube();
  handR.color = [1.0, 1.0, 1.0, 1.0];
  handR.matrix = armRCoor;
  handR.matrix.rotate(g_waveAngle, 0, 0, 1);
  handR.matrix.rotate(-35, 0, 0, 1);
  handR.matrix.scale(0.1, 0.15, 0.1);
  handR.matrix.translate(0.03, 0.6, 0.0);
  handR.render();

  // head
  var head = new Cube();
  head.color = [1.0, 1.0, 1.0, 1.0];
  head.matrix.setTranslate(-0.7, 0.08, -0.15);
  head.matrix.rotate(-5, 1, 0, 0);
  head.matrix.rotate(-g_yellowAngle, 0, 1, 0);
  var headCoor = new Matrix4(head.matrix);
  var headCoor1 = new Matrix4(head.matrix);
  var headCoor2 = new Matrix4(head.matrix);
  var headCoor3 = new Matrix4(head.matrix);
  head.matrix.scale(0.7, 0.5, 0.6);
  head.matrix.translate(0.5, 0, 0);
  head.render();

  // left leg
  var legL = new Cube();
  legL.color = [1.0, 1.0, 1.0, 1.0];
  legL.matrix.setTranslate(-0.25, -0.585, 0.15);
  legL.matrix.rotate(-5, 1, 0, 0);
  legL.matrix.scale(0.1, 0.1, 0.1);
  legL.render();

  // right leg
  var legR = new Cube();
  legR.color = [1.0, 1.0, 1.0, 1.0];
  legR.matrix.setTranslate(0.15, -0.585, 0.15);
  legR.matrix.rotate(-5, 1, 0, 0);
  legR.matrix.scale(0.1, 0.1, 0.1);
  legR.render();

  // left ear
  var earL = new Cube();
  earL.color = [1.0, 1.0, 1.0, 1.0];
  earL.matrix = headCoor;
  earL.matrix.scale(0.15, 0.3, 0.07);
  earL.matrix.translate(3.2, 1.65, 2.3);
  earL.render();

  // right ear
  var earR = new Cube();
  earR.color = [1.0, 1.0, 1.0, 1.0];
  earR.matrix = headCoor1;
  earR.matrix.scale(0.15, 0.3, 0.07);
  earR.matrix.translate(5.3, 1.65, 2.3);
  earR.render();

  // left tip
  var tipL = new Cube();
  tipL.color = [1.0, 0.75294, 0.7960784, 1.0];
  tipL.matrix = headCoor;
  tipL.matrix.rotate(-5, 1, 0, 0);
  tipL.matrix.scale(0.5, 0.7, 0.07);
  tipL.matrix.translate(0.5, 0.0, -0.0001);
  tipL.render();

  // right tip
  var tipR = new Cube();
  tipL.color = [1.0, 0.75294, 0.7960784, 1.0];
  tipL.matrix = headCoor1;
  tipL.matrix.rotate(-5, 1, 0, 0);
  tipL.matrix.scale(0.5, 0.7, 0.07);
  tipL.matrix.translate(0.55, 0.0, -0.0001);
  tipL.render();

  // left eye
  var eyeL = new Cube();
  eyeL.color = [0.0, 0.0, 0.0, 1.0];
  eyeL.matrix = headCoor2;
  eyeL.matrix.translate(0.5, 0.18, 0);
  eyeL.matrix.scale(0.08, 0.08, 0.08);
  eyeL.matrix.translate(0, 0, -0.5);
  eyeL.render();

  // right eye
  var eyeR = new Cube();
  eyeR.color = [0.0, 0.0, 0.0, 1.0];
  eyeR.matrix = headCoor3;
  eyeR.matrix.translate(0.83, 0.18, 0);
  eyeR.matrix.scale(0.08, 0.08, 0.08);
  eyeR.matrix.translate(0, 0, -0.5);
  eyeR.render();

  // tail
  var tail = new Cube();
  tail.color = [1.0, 0.75294, 0.7960784, 1.0];
  tail.matrix.setTranslate(-0.08, -0.5, 0.0);
  tail.matrix.rotate(-5, 1, 0, 0);
  tail.matrix.scale(0.15, 0.15, 0.15);
  tail.matrix.translate(0.0, 0, 2.5);
  tail.render();

}
