//TERCERA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFCA500);
var loader = new THREE.TextureLoader();

loader.load("../img/rio.png", function(texture){
    scene.background = texture;
});

/*var fogColor = new THREE.Color(0x000000);
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.20, 7); */


//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry3 = new THREE.ConeGeometry( 1, 5, 10 );
const material3 = new THREE.MeshBasicMaterial( {color: "yellow"} );
const cone = new THREE.Mesh( geometry3, material3 );
scene.add( cone );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cone.rotation.x += 0.02;
    cone.rotation.y += 0.02;
}

animate();