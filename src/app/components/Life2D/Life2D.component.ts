import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {Renderer2D} from '../../Renderer2D';

@Component({
    selector: 'life-2d',
    templateUrl: './Life2D.component.html',
    styleUrls: ['./Life2D.component.css']
  })
  export class Life2DComponent implements OnInit {

    title = "lel";

    private scene = new THREE.Scene();
    private renderer: Renderer2D;

    private width;
    private height;

    private cube: THREE.Mesh

    initialize_renderer(): void{
      this.renderer = new Renderer2D(this.width, this.height);
      document.getElementById("render_window").appendChild( this.renderer.getRenderer());

      var r = this.renderer;
      window.addEventListener('resize', function(){
        r.setSize(document.getElementById("render_window").offsetWidth, document.getElementById("render_window").offsetHeight);
      }, false);
    }

    initialize_geometry(): void{
      const geometry = new THREE.PlaneGeometry( 1, 1 );
      const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
      this.cube = new THREE.Mesh( geometry, material );
      this.scene.add( this.cube );
    }

    animate = () => {

      requestAnimationFrame(this.animate);

      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene);
    }

    ngOnInit(): void {
      this.width = document.getElementById("render_window").offsetWidth;
      this.height = document.getElementById("render_window").offsetHeight;
      this.initialize_renderer();
      this.initialize_geometry();
      this.animate();
    }


  }
