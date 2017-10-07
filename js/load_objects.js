function load_objects(scene, models) {
  for (var i = 0; i < models.length; i++) {
    setTimeout(function(model) {
    	var texture = new THREE.Texture();
    	var loader = new THREE.ImageLoader();
    	loader.load(model.texture, function ( image ) {
    		texture.image = image;
    		texture.needsUpdate = true;
        console.log('texture')
        // repeat the texture
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    	});

      var loader = new THREE.OBJLoader();
    	// load a resource
    	loader.load(
    		// resource URL
    		model.file,
    		// Function when resource is loaded
    		function ( object ) {
    			object.traverse( function ( child ) {
    				if ( child instanceof THREE.Mesh ) {
    					child.material.map = texture;
              // child.material.ambient.setHex(0xFF0000);
              // child.material.color.setHex(0x00FF00);
    				}
    			});
    			scene.add(object);
    		}
    	);
    }, 10, models[i]);
  }
}
