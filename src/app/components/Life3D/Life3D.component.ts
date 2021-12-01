import {Component, OnInit} from '@angular/core';

import * as THREE from 'three';
import {Renderer3D} from '../../Renderer3D';
import {Color, GridHelper, Vector3} from 'three';
import {Cell3D} from '../../Cell3D';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {Grid3D} from '../../Grid3D';


@Component({
  selector: 'life-3d',
  templateUrl: './Life3D.component.html',
  styleUrls: ['./Life3D.component.css']
})
export class Life3DComponent implements OnInit{

  private scene = new THREE.Scene();
  protected renderer: Renderer3D;

  private helperGrid: GridHelper;
  private clock = new THREE.Clock();
  private delta = 0;
  interval: number = 0.3;
  running: boolean = false;

  private mouse = new THREE.Vector2();
  private mouse_down: boolean = false;

  private trackball;

  private grid = new Grid3D();

  private raycaster = new THREE.Raycaster();
  private raycast_plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({color: 0xffff00}));

  private paint_level: number = 1;


  ngOnInit(): void{console.log("test");
    let parent: string = "render_window";
    const width = document.getElementById(parent).offsetWidth;
    const height = document.getElementById(parent).offsetHeight;

    this.renderer = new Renderer3D(width, height);
    document.getElementById(parent).appendChild(this.renderer.getRenderer());
    let that = this;

    window.addEventListener('resize', function() {
      that.renderer.setSize(document.getElementById(parent).offsetWidth, document.getElementById(parent).offsetHeight);
    }, false);

    this.renderer.getRenderer().addEventListener('mouseup', function(e) {
      that.mouse_down = false;
    }, false);


    // this.raycast_plane.material.colorWrite = false;
    this.renderer.getRenderer().addEventListener('mousedown', function(e) {
      that.mouse_down = true;

      if (e.button == 0) {  //perform left click action -> add
        that.check_addition();
      } else if (e.button == 2) {  //perform right click action -> delete
        that.check_deletion();
      }

    }, false);

    this.renderer.getRenderer().addEventListener('mousemove', function(e) {
      const rect = that.renderer.getRenderer().getBoundingClientRect();
      that.mouse.x = ( ( e.clientX - rect.left ) / ( rect.right - rect.left ) ) * 2 - 1;
      that.mouse.y = - ( ( e.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;

      if (that.mouse_down) {
        if (e.which == 1) {
          that.check_addition();
        } else if (e.which == 3) {
          that.check_deletion();
        }
      }
    }, false);

    window.addEventListener("keydown", function(e){
      if(e.key == "ArrowUp"){
        console.log("up");
        that.paint_level++;
      }
      else if(e.key == "ArrowDown"){
        console.log("down");
        that.paint_level--;
      }
    }, false);


    this.helperGrid = new THREE.GridHelper(100, 1000, new THREE.Color(0x888888));
    // this.helperGrid = new THREE.GridHelper(100, 1000);
    this.helperGrid.position.z = 0.001;
    this.helperGrid.rotateOnAxis(new Vector3(1, 0, 0), 90 * Math.PI / 180);
    this.trackball = new TrackballControls(this.renderer.getCamera(), this.renderer.getRenderer());
    this.trackball.mouseButtons={LEFT: THREE.MOUSE.MIDDLE, RIGHT:null, MIDDLE: null};
    this.trackball.rotateSpeed=2;

    this.animate();

    // this.renderer.getRenderer().addEventListener('wheel', function(){
    //   that.showGrid();
    // }, false);
  }

  private check_addition() {
    // if (this.scene.children.length > 2) {  //if scene contains more that 2 objects(grid and plane) that means a cell is in place and can be deleted
    //   this.scene.children.splice(0, 2);
    //   const cell_check = this.raycaster.intersectObjects(this.scene.children);
    //   if (cell_check.length != 0) {
    //     console.log(cell_check);
    //     this.scene_reload();
    //     return;
    //   }
    // }
    const intersects = this.raycaster.intersectObject(this.raycast_plane);
    if (intersects.length != 0) {
      let x = intersects[0].point.x < 0 ? Math.trunc(intersects[0].point.x * 10) - 1 : Math.trunc(intersects[0].point.x * 10) + 1;
      let y = intersects[0].point.y < 0 ? Math.trunc(intersects[0].point.y * 10) - 1 : Math.trunc(intersects[0].point.y * 10) + 1;

      this.generate_cell(x, y, this.paint_level);
      this.scene_reload();
    }
  }

  private check_deletion() {
    if (this.scene.children.length > 2) {  //if raycast detects more that 2 objects(grid and plane) that means a cell is in place and can be deleted
      this.scene.children.splice(0, 2);
      const cell_check = this.raycaster.intersectObjects(this.scene.children);
      if (cell_check.length != 0) {
        let x = cell_check[0].point.x < 0 ? Math.trunc(cell_check[0].point.x * 10) - 1 : Math.trunc(cell_check[0].point.x * 10) + 1;
        let y = cell_check[0].point.y < 0 ? Math.trunc(cell_check[0].point.y * 10) - 1 : Math.trunc(cell_check[0].point.y * 10) + 1;

        this.grid.remove_from_grid(x, y, this.paint_level);
      }
      this.scene_reload();
    }
  }

  generate_cell(x: number, y: number, z: number, auto: boolean = false) {
    const cell = new Cell3D(x, y, z, new Color('rgb(255,0,0)'));
    this.grid.add_to_grid(cell, auto);
    this.scene_reload();
  }

  scene_reload() {
    this.scene = new THREE.Scene();
    // if(!this.hide_grid)
      this.scene.add(this.helperGrid);
    this.scene.add(this.raycast_plane);
    // this.scene.background = this.bg_color;
    const cells = this.grid.get_cells();
    for (let c of cells) {
      this.scene.add(c.getCell());
    }
  }


  animate = () => {
    requestAnimationFrame(this.animate);

    this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());
    this.trackball.update();

    if (this.running) {
      this.delta += this.clock.getDelta();
        // this.nr_to_die = this.grid.getToDie().length;
        // this.nr_to_birth = this.grid.getToBirth().length;
        // this.scene_reload();
      this.delta = this.delta % this.interval;
    }
    this.renderer.render(this.scene);
  };

}
