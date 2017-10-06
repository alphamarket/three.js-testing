function model_display(scene, camera, renderer, model_file) {
  // set camera's position
  camera.position.set(0, 50, 100)

	var texture = new THREE.Texture();
	var loader = new THREE.ImageLoader();
	loader.load( 'textures/UV_Grid_Sm.jpg', function ( image ) {
		texture.image = image;
		texture.needsUpdate = true;
	} );

  var loader = new THREE.OBJLoader();
  furniture = null;
	// load a resource
	loader.load(
		// resource URL
		model_file,
		// Function when resource is loaded
		function ( object ) {
      furniture = object;
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					// child.material.map = texture;
          // child.material.ambient.setHex(0xFF0000);
          // child.material.color.setHex(0x00FF00);
				}
			} );

			scene.add( object );
		}
	);
  var animate = function() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
  }
  animate();
}
