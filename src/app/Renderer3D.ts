import * as THREE from 'three';

export class Renderer3D{

  private scene;
  private camera;
  // private camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
  private renderer;

  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    this.camera.position.z = 1;

    this.setSize(width, height);
  }

  public setSize(width: number, height: number): void{
    this.width = width;
    this.height = height;
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  public getRenderer() {
    return this.renderer.domElement;
  }



  public getCamera(){
    return this.camera;
  }

  private getScale() {
    const fov = this.camera.fov * Math.PI / 180;
    const scale_height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const scale = this.height / scale_height;
    return scale;
  }

  public render(scene: THREE.Scene): void{
    this.scene = scene;
    this.renderer.render(this.scene, this.camera);
  }

  //unused method to close webgl context
  public closeContext(){
    this.renderer.forceContextLoss();
    this.renderer.context = null;
    this.renderer.domElement = null;
    this.renderer = null;
  }

}
