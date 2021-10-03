import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'life-2d',
    templateUrl: './Life2D.component.html',
    styleUrls: ['./Life2D.component.css']
  })
  export class Life2DComponent implements OnInit {

    title = "lel";

    private scene = new THREE.Scene();
    private camera: THREE.Camera;
    // private camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
    private renderer = new THREE.WebGLRenderer();

    private width = window.innerWidth;
    private height = window.innerHeight;

    cube: THREE.Mesh

    initialize_renderer(): void{
      this.camera = new THREE.OrthographicCamera(this.width / - 500, this.width / 500, this.height / 500, this.height / - 500, 1, 1000);
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );
      this.camera.position.z = 5;
    }

    initialize_geometry(): void{
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      this.cube = new THREE.Mesh( geometry, material );
      this.scene.add( this.cube );
    }

    animate = () => {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render( this.scene, this.camera );
    }

    ngOnInit(): void {
    this.initialize_renderer();
    this.initialize_geometry();
    this.animate();
    }


  }
