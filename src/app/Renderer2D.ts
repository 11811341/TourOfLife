import * as THREE from 'three';

export class Renderer2D{

  private scene;
  private camera;
  // private camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
  private renderer;

  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.renderer = new THREE.WebGLRenderer();
    // this.camera = new THREE.OrthographicCamera(width / - 500, width / 500, height / 500, height / - 500, 1, 1000);
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    this.camera.position.z = 5;
    // this.camera.lookAt(0);

    const cam = this.camera;
    document.addEventListener( 'wheel', (event) => {
      // cam.position.z +=event.deltaY/500;
      console.log(Math.sign(event.deltaY));
      if((cam.position.z < 10 && event.deltaY>0) || (cam.position.z > 2 && event.deltaY<0))
        cam.position.z += Math.sign(event.deltaY)*0.5;
    }, false);

    this.setSize(width, height);
  }

  public getRenderer() {
    return this.renderer.domElement;
  }

  public setSize(width: number, height: number): void{
    this.width = width;
    this.height = height;
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  public render(scene: THREE.Scene): void{
    this.scene = scene;
    this.renderer.render(this.scene, this.camera);
  }

}
