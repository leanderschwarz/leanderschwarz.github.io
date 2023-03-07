import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// TODO fix grid // x y

// Graphics
var renderer, scene, camera, controls;
var dim = 10;
var apple_n = 1;

// Game Logic
var started = false;
const snake = [];
const apples = new Array(dim);
var highscore = 0;

init();
render();

// TTODO init game
init_apple();

function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    300
  );
  camera.position.set(-(dim * 1.5), dim * 2, 5);
  //camera.lookAt(dim / 2, 0, dim / 2);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(dim/2, 0, dim/2);

  scene = new THREE.Scene();
  scene.background = new THREE.Color('skyblue');
  
      // Importar un modelo en json
    const object_loader = new THREE.ObjectLoader();

/*   const loader = new THREE.TextureLoader();
  loader.load(
	// resource URL
	'resource/bg.jpg',

	// onLoad callback
	function ( texture ) {
		// in this example we create the material when the texture is loaded
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened: ' + err.message );
	}); */

  const ambientLight = new THREE.AmbientLight(0x606060);
  scene.add(ambientLight);

  let middle = Math.floor(dim / 2);
  let head = createBox(middle, middle, "yellow");
  snake.push(head);
  scene.add(head);
  controls.target.copy(head.position);
  
  spawnPlayground();

  const gridHelper = new THREE.GridHelper(dim - 1, dim - 1, "red", "red");
  gridHelper.position.x = (dim - 1) / 2;
  gridHelper.position.y = .55;
  gridHelper.position.z = (dim - 1) / 2;
  scene.add(gridHelper);

  drawHighscore();
  drawFloor();

  scene.add(new THREE.AxesHelper(30));

  document.body.appendChild(renderer.domElement);
}

function drawFloor() {
    const geometry = new THREE.PlaneGeometry(400, 400);
    geometry.rotateX(-Math.PI/2);
    geometry.normal
    const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color("grey"),
      }); 
    const plane = new THREE.Mesh(geometry, material);
    plane.position.y = -.5;
    scene.add(plane)
}

function spawnSun() {

}

function spawnPlayground() {
  let dim_offset = dim + 1;
  const geometry = new THREE.BoxGeometry(dim_offset, 1, dim_offset);
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color("white"),
  });
  const pg = new THREE.Mesh(geometry, material);
  pg.position.x += (dim - 1) / 2;
  pg.position.y = 0;
  pg.position.z += (dim - 1) / 2;
  scene.add(pg);
}

function drawHighscore() {}

function createBox(x, z, color) {
  const lx = x;
  const lz = z;
  const geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color(color),
  });
  const box = new THREE.Mesh(geometry, material);
  box.position.x = lx;
  box.position.y += 0.52 + 0.85/2;
  box.position.z = lz;
  return box;
}

var direction = "KeyW";

function update_direction(new_direction) {
  direction = new_direction;
}

function get_snake_collision_map() {
  var collision_map = new Array(dim);
  for (let i = 0; i < dim; i++) {
    collision_map[i] = new Array(dim).fill(0);
  }

  snake.forEach((s, idx) => {
    // Skip head
    if (idx != 0) {
      collision_map[s.position.x][s.position.z] = 1;
    } else {
      collision_map[s.position.x][s.position.z] = 2;
    }
  });

  return collision_map;
}

function check_snake_colision(head_x, head_y) {
  let cm = get_snake_collision_map();
  return cm[head_x][head_y] == 1;
}

function move() {
  let head = snake[0];
  let tail = snake[snake.length - 1];
  let body = createBox(tail.position.x, tail.position.z, "green");

  for (let i = snake.length - 1; i >= 1; i--) {
    let lx = snake[i - 1].position.x;
    let lz = snake[i - 1].position.z;
    snake[i].position.x = lx;
    snake[i].position.z = lz;
  }

  switch (direction) {
    case "KeyW":
      if (head.position.x == dim - 1) head.position.x = 0;
      else head.position.x += 1;
      break;
    case "KeyA":
      if (head.position.z == 0) head.position.z = dim - 1;
      else head.position.z -= 1;
      break;
    case "KeyS":
      if (head.position.x == 0) head.position.x = dim - 1;
      else head.position.x -= 1;
      break;
    case "KeyD":
      if (head.position.z == dim - 1) head.position.z = 0;
      else head.position.z += 1;
  }

  if (check_snake_colision(head.position.x, head.position.z)) {
    alert("You Lost!  Highscore: " + highscore + '\n\nKlick "OK" to restart.');
    // Hard-reload (uncache)
    setTimeout(window.location.reload(true), 4000);
  }

  if (check_apple(head.position.x, head.position.z)) {
    scene.add(body);
    snake.push(body);
  }

  //controls.target.copy(head.position);
}

function cameraBoundaries() {
    if (camera.position.x < -100) {
        camera.position.x = -100;
    }
    if (camera.position.x > 100) {
        camera.position.x = 100;
    }
    if (camera.position.y < 5) {
        camera.position.y = 5;
    }
    if (camera.position.y > 100) {
        camera.position.y = 100;
    }
    if (camera.position.z < -100) {
        camera.position.z = -100;
    }
    if (camera.position.z > 100) {
        camera.position.z = 100;
    }
}

function render() {
  requestAnimationFrame(render);
  cameraBoundaries();
  controls.update();
  renderer.render(scene, camera);
}

function random_coordinate() {
  return Math.floor(Math.random() * dim);
}

function random_position() {
  return [random_coordinate(), random_coordinate()];
}

function init_apple() {
  for (let i = 0; i < dim; i++) {
    apples[i] = new Array(dim).fill(null);
  }
}

function spawn_apple() {
  let position = random_position();
  let x = position[0];
  let y = position[1];

  let cm = get_snake_collision_map();

  let fail = 0;
  while ((cm[x][y] > 0 || apples[x][y] !== null) && fail++ < 1000) {
    x = (x + 1) % (dim - 1);
    y = (y + 2) % (dim - 1);
  }

  if (fail >= 100) alert("Critical failure!");

  let apple = createBox(x, y, "red");
  apples[x][y] = apple;
  scene.add(apple);
}

function check_apple(x, y) {
  if (apples[x][y] != null) {
    scene.remove(apples[x][y]);
    apples[x][y] = null;
    spawn_apple();
    highscore += 100;
    return true;
  }
  return false;
}

function camera_reset() {
    camera.position.x = -dim/2;
    camera.position.y = dim*2;
    camera.position.z = dim/2;
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  if (!started) {
    started = true;
    setInterval(move, 500);
    for (let i = 0; i < apple_n; i++) spawn_apple();
    camera_reset(); 
  }
  update_direction(event.code);
}

// TODO clearInterval();
