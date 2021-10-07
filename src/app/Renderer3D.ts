import * as THREE from 'three';

export class Renderer{

  private scene: THREE.Scene;
  private camera: THREE.Camera;
  // private camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
  private renderer = new THREE.WebGLRenderer();

  private width = window.innerWidth;
  private height = window.innerHeight;

  constructor() {
    this.scene = new THREE.Scene();
  }

}
