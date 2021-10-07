import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {Renderer2D} from '../../Renderer2D';
import {GridHelper, Vector3} from 'three';
import {Cell2D} from '../Cell2D';

@Component({
    selector: 'life-2d',
    templateUrl: './Life2D.component.html',
    styleUrls: ['./Life2D.component.css']
  })
  export class Life2DComponent implements OnInit {

    title = "lel";

    private scene = new THREE.Scene();
    private renderer: Renderer2D;

    private helperGrid: GridHelper;

    private width;
    private height;

    private cube: THREE.Mesh

    initialize_renderer(): void{
      this.renderer = new Renderer2D(this.width, this.height);
      document.getElementById("render_window").appendChild( this.renderer.getRenderer());

      const r = this.renderer;
      window.addEventListener('resize', function(){
        r.setSize(document.getElementById("render_window").offsetWidth, document.getElementById("render_window").offsetHeight);
      }, false);

      this.helperGrid = new THREE.GridHelper(1000, 10000);
    }

    initialize_geometry(): void{
      this.helperGrid.rotateOnAxis(new Vector3(1,0,0), 90 * Math.PI/180);
      this.scene.add(this.helperGrid);

      const s = 1/10;
      const cell = new Cell2D(s, -5, 6);
      this.scene.add(cell.getCell());
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
