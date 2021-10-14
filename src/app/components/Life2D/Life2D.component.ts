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

    private raycaster = new THREE.Raycaster();
    private mouse = new THREE.Vector2();
    private raycast_plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial( {color: 0xffff00} ));


    private width;
    private height;

    private grid = new Grid2D();

    private cube: THREE.Mesh

    initialize_renderer(): void{
      this.renderer = new Renderer2D(this.width, this.height);
      document.getElementById("render_window").appendChild( this.renderer.getRenderer());
      let that = this;

      window.addEventListener('resize', function(){
        that.renderer.setSize(document.getElementById("render_window").offsetWidth, document.getElementById("render_window").offsetHeight);
      }, false);

      window.addEventListener( 'mousemove', function(e){
        that.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        that.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        // console.log([Math.trunc(m.x * 100), Math.trunc(m.y * 100)]);
      }, false );

      this.raycast_plane.material.colorWrite = false;
      window.addEventListener('click', function(){
        const intersects = that.raycaster.intersectObject(that.raycast_plane);
        if(intersects.length != 0) {
          let x = intersects[0].point.x < 0 ? Math.trunc(intersects[0].point.x * 10) - 1 : Math.trunc(intersects[0].point.x * 10) + 1;
          let y = intersects[0].point.y < 0 ? Math.trunc(intersects[0].point.y * 10) - 1 : Math.trunc(intersects[0].point.y * 10) + 1;
          // console.log([x, y]);
          that.generate_cell(x, y);
        }
      }, false);

      this.helperGrid = new THREE.GridHelper(100, 1000);
      console.log(this.helperGrid.scale);
    }

    initialize_geometry(): void{
      this.helperGrid.rotateOnAxis(new Vector3(1,0,0), 90 * Math.PI/180);

      const cell1 = new Cell2D(-20, 20);
      const cell2 = new Cell2D(-19, 20);
      const cell3 = new Cell2D(-18, 20);
      const cell4 = new Cell2D(-18, 21);
      const cell5 = new Cell2D(-19, 22);

      const cell6 = new Cell2D(5, 4);
      const cell7 = new Cell2D(6, 4);
      const cell8 = new Cell2D(4, 5);
      const cell9 = new Cell2D(6, 5);
      const cell10 = new Cell2D(6, 6);


      // this.grid.add_to_grid(cell1);
      // this.grid.add_to_grid(cell2);
      // this.grid.add_to_grid(cell3);
      // this.grid.add_to_grid(cell4);
      // this.grid.add_to_grid(cell5);

      // this.grid.add_to_grid(cell6);
      // this.grid.add_to_grid(cell7);
      // this.grid.add_to_grid(cell8);
      // this.grid.add_to_grid(cell9);
      // this.grid.add_to_grid(cell10);

      // this.advance();

      this.scene_reload();

    }

    generate_cell(x: number, y: number){
      const cell = new Cell2D(x, y);
      this.grid.add_to_grid(cell);
      this.scene_reload();
      this.scene.add(cell.getCell());
    }

    scene_reload(){
      this.scene = new THREE.Scene();
      this.scene.add(this.helperGrid);
      this.scene.add(this.raycast_plane);
      const cells = this.grid.get_cells();
      for(var c of cells)
        this.scene.add(c.getCell());
    }

    animate = () => {
      requestAnimationFrame(this.animate);

      this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());

      // calculate objects intersecting the picking ray

      // let pos = intersects[0].point;
      // console.log([Math.trunc(pos.x * 10), Math.trunc(pos.y * 10)]);


      // this.raycast_plane.rotation.x += 0.01;
      // this.raycast_plane.rotation.y += 0.01;

      // this.delta += this.clock.getDelta();
      //
      // if(this.delta > this.interval){
      //   this.grid.advance();
      //   this.scene_reload();
      //   this.delta = this.delta % this.interval;
      // }
      this.renderer.render(this.scene);
    }

    public advance(){
      this.grid.advance();
      this.scene_reload();
    }

    ngOnInit(): void {
      this.width = document.getElementById("render_window").offsetWidth;
      this.height = document.getElementById("render_window").offsetHeight;

      // window.addEventListener( 'mousemove', this.onMouseMove, false );

      this.initialize_renderer();
      this.initialize_geometry();
      this.animate();
    }


  }
