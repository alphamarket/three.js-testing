function load_objects(models, callback) {
  objects = {}
  for (var i = 0; i < models.length; i++) {
    setTimeout(function(model, id) {
    	var texture = new THREE.Texture();
    	var loader = new THREE.ImageLoader();
    	loader.load(model.texture, function ( image ) {
    		texture.image = image;
    		texture.needsUpdate = true;
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
    				}
    			});
          objects[id] = object;
          if(Object.keys(objects).length === models.length && typeof callback === "function")
            callback(objects)
    		}
    	);
    }, 10, models[i], i);
  }
}
