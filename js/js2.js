//SEGUNDA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFCA500);

var fogColor = new THREE.Color(0x000000);
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.20, 7);


//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry = new THREE.BoxGeometry( 2, 3, 5 );
const material = new THREE.MeshBasicMaterial( {color: 0x6FE2F7} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
}

animate();