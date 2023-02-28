import * as THREE from "three";
import * as EASING from "src/utils/easing";

type Size ={
  width:number;
  height:number;
}

const Sketches_Panels = (_divSize:Size) => {

  //initialize
  const canvasSize = new THREE.Vector2();
  canvasSize.width = _divSize.width;
  canvasSize.height = _divSize.height;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasSize.width, canvasSize.height);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#e4e4e4");

  const textureLoader = new THREE.TextureLoader();
  // const camera = new THREE.PerspectiveCamera(45, canvasSize.width / canvasSize.height, 1, 10000);
  const camera = new THREE.OrthographicCamera(-canvasSize.width/2,canvasSize.width/2,-canvasSize.height/2,canvasSize.height/2);
  camera.position.set(0, 0, 1000);

  const periodBefore = 1.0;
  const periodChanging = 2.0;
  const time = new THREE.Clock();
  

  //contents
  //main geo
  const panelsNum = 6;
  const panelSize = new THREE.Vector2(canvasSize.width*3/4/panelsNum,canvasSize.height*3/4);
  const panelPadding = 10;

  const geometry = new THREE.PlaneGeometry(panelSize.width,panelSize.height);
  // const texture = textureLoader.load("/moon_map.jpg");
  // const material = new THREE.MeshBasicMaterial({
  //   map: texture,
  // });
  const shaderMaterials:THREE.ShaderMaterial[]=[];

  const panels :THREE.Mesh[] = [];
  
  for (let i =0; i<panelsNum;i++){
    const shaderMaterial = new THREE.ShaderMaterial({
      fragmentShader:frag,
      uniforms:{
        time:{value:0.0},
        panelsNum:{value:panelsNum},
        id:{value:i}
      },
      transparent:true
    })
    shaderMaterials.push(shaderMaterial);
    const panel = new THREE.Mesh(geometry,shaderMaterial);
    panel.position.set((panelSize.width+panelPadding*2)*(i+0.5-panelsNum/2),0,0);
    // panel.position.set(0,0,0);
    panel.rotation.x= Math.PI;
    panels.push(panel);
  }
  scene.add(...panels);

  //debug geo
  // const sphereGeo = new THREE.SphereGeometry(30);
  // const sphereMat = new THREE.MeshStandardMaterial();
  // const sphere = new THREE.Mesh(sphereGeo,sphereMat);
  // scene.add(sphere);

  //lights
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  //animation

  const tick = () => {
    // if (time.getElapsedTime() < periodBefore) {
    //   const _t = 0;
    //   for (const panel of panels){
    //     panel.scale.set(_t, _t, _t);
    //   }
    // } else if (time.getElapsedTime() < periodBefore + periodChanging) {
    //   const _t = EASING.easeOutBack((time.getElapsedTime() - periodBefore) / periodChanging);
    //   for(const panel of panels){
    //     panel.scale.set(_t,_t,_t);
    //   }
    // }
    
    for (const shaderMaterial of shaderMaterials){
      shaderMaterial.uniforms.time.value = time.getElapsedTime();
    }
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  };
  tick();

  return renderer.domElement;
};

export default Sketches_Panels;


const frag = `
  uniform float time;
  uniform float id;
  uniform float panelsNum;
  void main(){
    float alpha = 0.0;
    float delta = 1.0; 
    if(time>id/10.){
      alpha += (time-id/10.0)/0.1;
      delta = 0.9-(id/panelsNum +1./panelsNum)*0.3;
    }
    gl_FragColor=vec4(vec2(delta),delta*1.04,alpha);
  }
`;
