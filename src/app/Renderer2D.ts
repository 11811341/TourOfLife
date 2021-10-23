import * as THREE from 'three';

export class Renderer2D{

  private scene;
  private camera;
  // private camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
  private renderer;

  private width: number;
  private height: number;

  private wheel_down: boolean = false;

  constructor(width: number, height: number) {
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    this.camera.position.z = 5;

    const that = this;
    document.addEventListener( 'wheel', (event) => {
      // cam.position.z +=event.deltaY/500;
      if((that.camera.position.z < 10 && event.deltaY>0) || (that.camera.position.z > 2 && event.deltaY<0))
        that.camera.position.z += Math.sign(event.deltaY)*0.5;
    }, false);

    // document.addEventListener('mousedown', function(e){
    //   if(e.button == 1)
    //     that.wheel_down = true;
    // }, false);
    //
    // document.addEventListener('mousemove', function(e){
    //   if(that.wheel_down){
    //     // console.log([e.movementX, e.movementY]);
    //     // that.camera.position.set(that.camera.position.x - e.movementX/scale, that.camera.position.y + e.movementY/scale, that.camera.position.z);
    //     that.camera.position.set(that.camera.position.x, that.camera.position.y-1, that.camera.position.z);
    //     console.log(that.camera.getWorldDirection());
    //   }
    // }, false);
    //
    // document.addEventListener('mouseup', function(e){
    //   if(e.button == 1)
    //     that.wheel_down = false;
    // }, false);

    this.setSize(width, height);
  }


  public getRenderer() {
    return this.renderer.domElement;
  }

  public getCamera(){
    return this.camera;
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
