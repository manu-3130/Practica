//CUARTA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFCA500);

var fogColor = new THREE.Color(0xFFFFFF);
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.20, 7);


//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry = new THREE.CircleGeometry( 3, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x779CED } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    circle.rotation.x += 0.02;
    circle.rotation.y += 0.02;
}

animate();