import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

let speed = 0.03;
let DirectionalLight;
let DirectionalLight2;
let objects = [];
let car;


document.body.onload = () => {
  main();
  const speedUpBtn = document.querySelector('#speedUp');
  const speedDownBtn = document.querySelector('#speedDown');

  speedUpBtn.onclick = () => {
    speedUp();
  };
  speedDownBtn.onclick = () => {
    speedDown();
  };
};

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = false;
  renderer.setClearColor(0x457b9d, 1);
  document.body.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 27;
  camera.position.y = 5;

  // Lights
  setupLights();

  // 1-Tittle
  let tittle1 = titulos('GOD OF WAR',-4.5, 5.5, -10, null);
  // 2-Tittle
  let tittle2= titulos('PEPSIMAN',-10,5.5,5, Math.PI/2);
  // 3-Tittle
  let tittle3= titulos('GTA CJ',10,5.5,-2, Math.PI/-2);

  // 1-Column
  let column1 = cylinder();
  column1.position.x=14.5;
  column1.position.z=14.5;
  column1.position.y=2.5;
  scene.add(column1);

  // 2-Column
  let column2 = cylinder();
  column2.position.x=-14.5;
  column2.position.z=-14.5;
  column2.position.y=2.5;
  scene.add(column2);

  // 3- Column
  let column3 = cylinder();
  column3.position.x=11.5;
  column3.position.z=14.5;
  column3.position.y=2.5;
  scene.add(column3);

  // 4-Column
  let column4 = cylinder();
  column4.position.x=14.5;
  column4.position.z=-14.5;
  column4.position.y=2.5;
  scene.add(column4);

  // 5- Column
  let column5 = cylinder();
  column5.position.x=-11.5;
  column5.position.z=14.5;
  column5.position.y=2.5;
  scene.add(column5);

  // 6-Column
  let column6 = cylinder();
  column6.position.x=-14.5;
  column6.position.z=14.5;
  column6.position.y=2.5;
  scene.add(column6);

   // 7- Column
   let column7 = cylinder();
   column7.position.x=-11.5;
   column7.position.z=-11.5;
   column7.position.y=2.5;
   scene.add(column7);

   // 8- Column
   let column8 = cylinder();
   column8.position.x=11.5;
   column8.position.z=-11.5;
   column8.position.y=2.5;
   scene.add(column8);

  // 1-Wall
  let Wall1 = drawCube(28,5,0.5);
  Wall1.position.z=-14.5;
  Wall1.position.y=2.5;
  scene.add(Wall1);
  objects.push(Wall1);

  // 2-Wall
  let Wall2 = drawCube(28,5,0.5 );
  Wall2.position.x=14.5;
  Wall2.position.y=2.5;
  Wall2.rotation.y=Math.PI/2;
  scene.add(Wall2);
  objects.push(Wall2);

  // 3-Wall
  let Wall3 = drawCube(28,5,0.5 );
  Wall3.position.x=-14.5;
  Wall3.position.y=2.5;
  Wall3.rotation.y=Math.PI/2;
  scene.add(Wall3);
  objects.push(Wall3);

  // 4-Wall
  let Wall4 = drawCube(30,5,0.5 );
  Wall4.position.x=-12.5;
  Wall4.position.y=5;
  Wall4.rotation.x=Math.PI/2;
  Wall4.rotation.z=Math.PI/2;
  scene.add(Wall4);
  objects.push(Wall4);

  // 5-Wall
  let Wall5 = drawCube(30,5,0.5 );
  Wall5.position.x=12.5;
  Wall5.position.y=5;
  Wall5.rotation.x=Math.PI/2;
  Wall5.rotation.z=Math.PI/2;
  scene.add(Wall5);
  objects.push(Wall5);

  // 6-Wall
  let Wall6 = drawCube(20,5,0.5 );
  Wall6.position.z=-12.5;
  Wall6.position.y=5;
  Wall6.rotation.x=Math.PI/2;
  scene.add(Wall6);
  objects.push(Wall6);

  // 7-Wall
  let Wall7 = drawCube(8,5,0.5 );
  Wall7.position.x=-11.5;
  Wall7.position.y=2.5;
  Wall7.position.z=10;
  Wall7.rotation.y=Math.PI/2;
  scene.add(Wall7);
  objects.push(Wall7);

  // 8-Wall
  let Wall8 = drawCube(8,5,0.5 );
  Wall8.position.x=-11.5;
  Wall8.position.y=2.5;
  Wall8.position.z=-8;
  Wall8.rotation.y=Math.PI/2;
  scene.add(Wall8);
  objects.push(Wall8);

  // 9-Wall
  let Wall9 = drawCube(6,5,0.5 );
  Wall9.position.x=-11.5;
  Wall9.position.y=2.5;
  Wall9.position.z=6;
  Wall9.rotation.y=Math.PI*2;
  scene.add(Wall9);
  objects.push(Wall9);

  // 10-Wall
  let Wall10 = drawCube(6,5,0.5 );
  Wall10.position.x=-11.5;
  Wall10.position.y=2.5;
  Wall10.position.z=-4;
  Wall10.rotation.y=Math.PI*2;
  scene.add(Wall10);
  objects.push(Wall10);

  // 11-Wall
  let Wall11 = drawCube(5,5,0.5 );
  Wall11.position.x=-8.5;
  Wall11.position.y=2.5;
  Wall11.position.z=-11.5;
  Wall11.rotation.y=Math.PI*2;
  scene.add(Wall11);
  objects.push(Wall11);

  // 12-Wall
  let Wall12 = drawCube(5,5,0.5 );
  Wall12.position.x=8.5;
  Wall12.position.y=2.5;
  Wall12.position.z=-11.5;
  Wall12.rotation.y=Math.PI*2;
  scene.add(Wall12);
  objects.push(Wall12);
  
   // 13-Wall
   let Wall13 = drawCube(6,5,0.5 );
   Wall13.position.x=-6;
   Wall13.position.y=2.5;
   Wall13.position.z=-11;
   Wall13.rotation.y=Math.PI/2;
   scene.add(Wall13);
   objects.push(Wall13);

   // 14-Wall
   let Wall14 = drawCube(6,5,0.5 );
   Wall14.position.x=6;
   Wall14.position.y=2.5;
   Wall14.position.z=-11;
   Wall14.rotation.y=Math.PI/2;
   scene.add(Wall14);
   objects.push(Wall14);

   // 15-Wall
   let Wall15 = drawCube(8,5,0.5 );
   Wall15.position.x=11.5;
   Wall15.position.y=2.5;
   Wall15.position.z=-7.5;
   Wall15.rotation.y=Math.PI/2;
   scene.add(Wall15);
   objects.push(Wall15);

   // 16-Wall
   let Wall16 = drawCube(8,5,0.5 );
   Wall16.position.x=11.5;
   Wall16.position.y=2.5;
   Wall16.position.z=10;
   Wall16.rotation.y=Math.PI/2;
   scene.add(Wall16);
   objects.push(Wall16);

   // 17-Wall
   let Wall17 = drawCube(6,5,0.5 );
   Wall17.position.x=11.5;
   Wall17.position.y=2.5;
   Wall17.position.z=6;
   scene.add(Wall17);
   objects.push(Wall17);

  // 18-Wall
  let Wall18 = drawCube(6,5,0.5 );
  Wall18.position.x=11.5;
  Wall18.position.y=2.5;
  Wall18.position.z=-3.8;
  scene.add(Wall18);
  objects.push(Wall18);

  //plano piso
  let plane = drawPlane(30, 30, 4, 4, 0xfefae0, true);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  //video1
  let video1 = document.getElementById('video1');
  let plane1 = video(9, 4.5, 10, 3, 0x404040, video1);
  plane1.position.x=0;
  plane1.position.y=2.4;
  plane1.position.z=-14;
  scene.add(plane1);
  
  //video2
  let video2 = document.getElementById('video2');
  let plane2 = video(8, 5, 10, 3, 0x404040, video2);
  plane2.position.x=14;
  plane2.position.y=2.4;
  plane2.position.z=1;
  plane2.rotation.y=Math.PI/-2;
  scene.add(plane2);

  //video3
  let video3 = document.getElementById('video3');
  let plane3 = video(8, 5, 10, 3, 0x404040, video3);
  plane3.position.x=-14;
  plane3.position.y=2.4;
  plane3.position.z=1;
  plane3.rotation.y=Math.PI/2;
  scene.add(plane3);

  Models1();
  Models2();
  Models3();
  Audio();
  Interaction();
  animate();
}

//funcion de letras
function titulos(n,x,y,z,r){
  var loader = new THREE.FontLoader();
  var geometry;
  loader.load( './assets/Streetart Demo_Regular.json', 
      // Crea texto en 3D después de cargar la fuente
      function ( font ) {
          geometry = new THREE.TextGeometry( n, {
              font: font,
              size: 1,
              height: 1,
              curveSegments: 1,
	            bevelEnabled: false,
		          bevelThickness: 1,
		          bevelSize: 0,
		          bevelOffset: 0,
		          bevelSegments: 1
          } );
          // Crear material vectorial normal
          var meshMaterial = new THREE.MeshNormalMaterial({
              flatShading: THREE.FlatShading,
              transparent: false,
              opacity: 100
      });
          var mesh = new THREE.Mesh(geometry, meshMaterial);
          mesh.position.set(x, y, z);
          mesh.rotation.y=r;
          scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
          console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      // se produjo un error
      function (err) {
          console.log(err);
      }
   );
}

//funcion movimiento con teclas 
function Interaction(){
  window.addEventListener('keydown',(e)=>{
    let tecla = e.key;
    switch(tecla){
      case 'w':
        camera.position.z=camera.position.z+0.8;
        break;
      case 'a':
        camera.position.x=camera.position.x-0.8;
        break;
      case 'd':
        camera.position.x=camera.position.x+0.8;
        break;
      case 's':
        camera.position.z=camera.position.z-0.8;
        break;
      case '.':
        camera.rotation.x=camera.rotation.x+0.5;
        break;
      case 'e':
        camera.rotation.y=camera.rotation.y-0.5;
        break;
      case 'q':
        camera.rotation.y=+camera.rotation.y+0.5;
        break;
    }

  });
}

//funcion audio
function Audio(){
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( './assets/Cancion1.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( -0.01 );
	sound.play();
});
}

//funcion video
function video(w, h, sh, sw, color,video) {
  const video1=video;
  const texture = new THREE.VideoTexture(video1);
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    map: texture,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  
  return plane;
}

//funcion plano principal piso
function drawPlane(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  
  return plane;
}

//funcion cilindro
function cylinder(){
  const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 5, 26 );
  const texture = new THREE.TextureLoader().load( "./assets/Texture1.jpg" );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1,  1 );
  const material = new THREE.MeshPhongMaterial( { color: 0xbb3e03, map: texture } );
  const cylinder = new THREE.Mesh( geometry, material );

  return cylinder;
}

//funcion de cubos 
function drawCube(l,h,p) {
  const geometry = new THREE.BoxGeometry(l,h,p);
  const texture = new THREE.TextureLoader().load( "./assets/Texture1.jpg" );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshPhongMaterial( { color: 0xf8edeb, map: texture } );
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//funcion modelo cj
function Models1(){
  let loader = new GLTFLoader();

  loader.load(
    'assets/ModelCJ/scene.gltf',
    function (gltf) {
      car = gltf.scene.children[0];
      car.position.y = 0;
      car.position.x = 10;
      car.position.z = -1;
      car.scale.set(0.06,0.06,0.06);
      car.rotation.z=Math.PI/-2;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
  DirectionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
  DirectionalLight2.position.set(-6, 2, -3);
  DirectionalLight2.angle = Math.PI/2;
  DirectionalLight2.penumbra = 0.1;
  DirectionalLight2.decay = 0.1;
  DirectionalLight2.distance = 100;

  DirectionalLight2.castShadow = true;
  scene.add(DirectionalLight2);
}

//funcion modelo sonic
function Models2(){
  let loader = new GLTFLoader();

  loader.load(
    'assets/ModelPepsi/scene.gltf',
    function (gltf) {
      car = gltf.scene.children[0];
      car.position.y = 0;
      car.position.x = -10;
      car.position.z = -1;
      car.scale.set(2.5,2.5,2.5);
      car.rotation.z=Math.PI/2;
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
  setupLights2();
}

//funcion modelo kratos
function Models3(){
  let loader = new GLTFLoader();

  loader.load(
    'assets/ModelKratos/scene.gltf',
    function (gltf) {
      car = gltf.scene.children[0];
      car.position.y = 0;
      car.position.x = -3;
      car.position.z = -10;
      car.scale.set(1,1,1);
      
      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
  setupLights2();
}

//funcion de luces
function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);

  DirectionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  DirectionalLight.position.set(1, 2, 1);
  DirectionalLight.angle = Math.PI / 2;
  DirectionalLight.penumbra = 0.1;
  DirectionalLight.decay = 0.1;
  DirectionalLight.distance = 100;

  DirectionalLight.castShadow = true;
  scene.add(DirectionalLight);

  DirectionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
  DirectionalLight2.position.set(-6, 5, -3);
  DirectionalLight2.angle = Math.PI/2;
  DirectionalLight2.penumbra = 0.1;
  DirectionalLight2.decay = 0.1;
  DirectionalLight2.distance = 100;

  DirectionalLight2.castShadow = true;
  scene.add(DirectionalLight2);

  /* lightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(lightHelper); */
}

//funcion de luces
function setupLights2() {

  DirectionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  DirectionalLight.position.set(1, 2, 1);
  DirectionalLight.angle = Math.PI / 2;
  DirectionalLight.penumbra = 0.1;
  DirectionalLight.decay = 0.1;
  DirectionalLight.distance = 100;

  DirectionalLight.castShadow = true;
  scene.add(DirectionalLight);

}

//funcion animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function speedUp() {
  speed += 0.01;
}

function speedDown() {
  speed -= 0.01;
}
