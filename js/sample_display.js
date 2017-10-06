function sample_display(scene, camera, renderer) {
  // create cube and fill it with material
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  //create a blue LineBasicMaterial
  var material = new THREE.LineBasicMaterial({ color: 0xff0000 });
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 1, 0));
  geometry.vertices.push(new THREE.Vector3(1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
  var line = new THREE.Line(geometry, material);
  line.position.set(-2, 2, 0)
  scene.add(line);
  // reposition the camera
  camera.position.z = 3;
  var animate = function() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    renderer.render( scene, camera );
  }
  animate();
}
