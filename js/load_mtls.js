function load_mtls(scene, models) {
  for (var i = 0; i < models.length; i++) {
    setTimeout(function(model) {
    	var texture = new THREE.Texture();
    	var loader = new THREE.ImageLoader();
    	loader.load(model.texture, function ( image ) {
    		texture.image = image;
    		texture.needsUpdate = true;
        // console.log('texture')
        // repeat the texture
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    	});

			var mtlLoader = new THREE.MTLLoader();

			mtlLoader.load(model.file + ".mtl", function( materials ) {
				materials.preload();
				var objLoader = new THREE.OBJLoader();
				objLoader.setMaterials( materials );
        // dirname of model file
				objLoader.load(model.file, function ( object ) {
					// object.position.y = - 95;
					scene.add( object );
				});
			});
    }, 10, models[i]);
  }
}
