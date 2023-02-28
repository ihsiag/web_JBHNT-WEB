import * as THREE from "three";
import * as EASING from "src/utils/easing";

type Size ={
  width:number;
  height:number;
}

const Sketches_Moon = (_divSize:Size) => {
  
  const canvasSize = new THREE.Vector2();
  canvasSize.width = _divSize.width;
  canvasSize.height = _divSize.height;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasSize.width, canvasSize.height);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(250,0,0)");

  const camera = new THREE.PerspectiveCamera(45, canvasSize.width / canvasSize.height, 1, 10000);
  // const camera = new THREE.OrthographicCamera(-w/2,w/2,-h/2,h/2);

  camera.position.set(0, 0, +1000);

  const r_sphere = 200.0;

  const geometry = new THREE.SphereGeometry(r_sphere, 30, 30);

  const loader = new THREE.TextureLoader();

  const texture = loader.load("/moon_map.jpg");

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });

  const mesh = new THREE.Mesh(geometry, material);
  const meshTwo = new THREE.Mesh(geometry, material);
  mesh.position.set(0, (r_sphere / 5) * 3, 0);
  meshTwo.position.set(0, (-r_sphere / 4) * 3, 0);

  scene.add(mesh);
  scene.add(meshTwo);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);

  scene.add(directionalLight);

  const periodBefore = 1.0;
  const periodChanging = 2.0;

  const time = new THREE.Clock();

  const tick = () => {
    if (time.getElapsedTime() < periodBefore) {
      const _t = 0;
      mesh.scale.set(_t, _t, _t);
      meshTwo.scale.set(_t, _t, _t);
    } else if (time.getElapsedTime() < periodBefore + periodChanging) {
      const _t = EASING.easeOutBack((time.getElapsedTime() - periodBefore) / periodChanging);
      mesh.scale.set(_t, _t, _t);
      meshTwo.scale.set(_t, _t, _t);
    }
    // console.log(time.getElapsedTime());
    mesh.rotation.y += 0.001;
    meshTwo.rotation.y -= 0.001;
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  };

  tick();
  return renderer.domElement;
};

export default Sketches_Moon;
