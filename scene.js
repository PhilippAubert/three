import * as THREE from '/build/three.module.js'; 

// BASIC RENDER SETUP

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// CAMERA 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 150 );
camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 10, 0 );

// MESHES : VECTOR

const material = new THREE.LineDashedMaterial( { color: 0x00f0ff, linewidth:1 } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 10, 10, 10 ) );
points.push( new THREE.Vector3( 0, 10, 10 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( - 10, 10, 0 ) );
points.push( new THREE.Vector3( 0, 20, 20 ) );
points.push( new THREE.Vector3( 10, -10, 0 ) );
points.push( new THREE.Vector3( 10, 10, 10 ) );
points.push( new THREE.Vector3( 10, 30, 10 ) );
points.push( new THREE.Vector3( -10, 0, 10 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

// MESHES: PLANE
 



// LIGHT

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );


scene.add( line, light );
renderer.render( scene, camera );

function animate(){
	requestAnimationFrame(animate); 
	line.rotation.x += 0.05; 
	line.rotation.y += 0.01; 
	renderer.render(scene, camera); 
}

 animate()