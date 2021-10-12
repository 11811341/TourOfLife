import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {Renderer2D} from '../../Renderer2D';
import {GridHelper, Vector3} from 'three';
import {Cell2D} from '../Cell2D';
import {Grid2D} from '../Grid2D';
import {animate} from '@angular/animations';

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
    private clock = new THREE.Clock();
    private delta = 0;
    private interval = 5;

    private width;
    private height;

    private grid = new Grid2D();

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

      const cell1 = new Cell2D(-5, 6);
      const cell2 = new Cell2D(-4, 6);
      const cell3 = new Cell2D(-6, 6);
      const cell4 = new Cell2D(-5, 7);

      this.grid.add_to_grid(cell1);
      this.grid.add_to_grid(cell2);
      // this.grid.add_to_grid(cell3);
      // this.grid.add_to_grid(cell4);

      this.scene_reload();
    }

    scene_reload(){
      this.scene = new THREE.Scene();
      this.scene.add(this.helperGrid);
      const cells = this.grid.get_cells();
      for(var c of cells)
        this.scene.add(c.getCell());
    }

    animate = () => {
      requestAnimationFrame(this.animate);

      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;

      this.delta += this.clock.getDelta();

      if(this.delta > this.interval){
        this.grid.advance();
        this.scene_reload();
        this.delta = this.delta % this.interval;
      }
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
