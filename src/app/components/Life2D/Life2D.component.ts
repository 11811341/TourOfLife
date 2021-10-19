import {Component, OnInit} from '@angular/core';
import * as THREE from 'three';
import {Renderer2D} from '../../Renderer2D';
import {GridHelper, Vector3} from 'three';
import {Cell2D} from '../Cell2D';
import {Grid2D} from '../Grid2D';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';


@Component({
  selector: 'life-2d',
  templateUrl: './Life2D.component.html',
  styleUrls: ['./Life2D.component.css']
})
export class Life2DComponent implements OnInit {

  title = 'lel';

  private scene = new THREE.Scene();
  private renderer: Renderer2D;

  private helperGrid: GridHelper;
  private clock = new THREE.Clock();
  private delta = 0;
  public interval = 0.1;
  public running: boolean = false;

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private raycast_plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({color: 0xffff00}));
  private clicked: boolean = false;
  private mouse_down: boolean = false;

  private trackball;

  private width;
  private height;

  private grid = new Grid2D();


  initialize_renderer(): void {
    this.renderer = new Renderer2D(this.width, this.height);
    document.getElementById('render_window').appendChild(this.renderer.getRenderer());
    let that = this;

    window.addEventListener('resize', function() {
      that.renderer.setSize(document.getElementById('render_window').offsetWidth, document.getElementById('render_window').offsetHeight);
    }, false);

    window.addEventListener('mousemove', function(e) {
      that.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      that.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (that.mouse_down) {
        if(e.which == 1) {
          that.check_addition();
        }else if(e.which == 3) {
          that.check_deletion();
        }
      }
    }, false);


    window.addEventListener('mouseup', function(e) {
      that.mouse_down = false;
    }, false);


    this.raycast_plane.material.colorWrite = false;
    window.addEventListener('mousedown', function(e) {
      that.mouse_down = true;

      if(!that.clicked) {
        if (e.button == 0) {  //perform left click action -> add
          that.check_addition();
        } else if (e.button == 2) {  //perform right click action -> delete
          that.check_deletion();
        }
      }else{
        that.clicked = false;
      }
    }, false);




    // this.helperGrid = new THREE.GridHelper(100, 1000, new Color(0x888888));
    this.helperGrid = new THREE.GridHelper(100, 1000);
    this.helperGrid.rotateOnAxis(new Vector3(1, 0, 0), 90 * Math.PI / 180);
    this.scene.add(this.helperGrid);
    this.scene.add(this.raycast_plane);
  }

  private check_deletion() {
    if (this.scene.children.length > 2) {  //if raycast detects more that 2 objects(grid and plane) that means a cell is in place and can be deleted
      this.scene.children.splice(0, 2);
      const cell_check = this.raycaster.intersectObjects(this.scene.children);
      if (cell_check.length != 0) {
        let x = cell_check[0].point.x < 0 ? Math.trunc(cell_check[0].point.x * 10) - 1 : Math.trunc(cell_check[0].point.x * 10) + 1;
        let y = cell_check[0].point.y < 0 ? Math.trunc(cell_check[0].point.y * 10) - 1 : Math.trunc(cell_check[0].point.y * 10) + 1;

        this.grid.remove_from_grid(x, y);
      }
      this.scene_reload();
    }
  }

  private check_addition() {
    if (this.scene.children.length > 2) {  //if scene contains more that 2 objects(grid and plane) that means a cell is in place and can be deleted
      this.scene.children.splice(0, 2);
      const cell_check = this.raycaster.intersectObjects(this.scene.children);
      if (cell_check.length != 0) {
        this.scene_reload();
        return;
      }
    }
    const intersects = this.raycaster.intersectObject(this.raycast_plane);
    if (intersects.length != 0) {
      let x = intersects[0].point.x < 0 ? Math.trunc(intersects[0].point.x * 10) - 1 : Math.trunc(intersects[0].point.x * 10) + 1;
      let y = intersects[0].point.y < 0 ? Math.trunc(intersects[0].point.y * 10) - 1 : Math.trunc(intersects[0].point.y * 10) + 1;
      this.generate_cell(x, y);
      this.scene_reload();
    }
  }

  generate_cell(x: number, y: number) {
    const cell = new Cell2D(x, y);
    this.grid.add_to_grid(cell);
    this.scene_reload();
  }

  scene_reload() {
    this.scene = new THREE.Scene();
    this.scene.add(this.helperGrid);
    this.scene.add(this.raycast_plane);
    const cells = this.grid.get_cells();
    for (let c of cells) {
      this.scene.add(c.getCell());
    }
  }

  change_speed(e){
    this.interval = e.value/10;
    console.log(this.interval);
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());

    this.trackball.update();

    if (this.running) {
      this.delta += this.clock.getDelta();
      if (this.delta > this.interval) {
        this.grid.advance();
        this.scene_reload();
        this.delta = this.delta % this.interval;
      }
    }

    this.renderer.render(this.scene);
  };

  public advance() {
    this.clicked = true;
    if (!this.running) {
      this.grid.advance();
      this.scene_reload();
    }
  }

  public play() {
    this.clicked = true;
    this.running = !this.running;
  }

  public clear() {
    this.clicked = true;
    this.grid.clear_grid();
    this.scene_reload();
  }

  public restore() {
    this.clicked = true;
    this.grid.restore_grid();
    this.scene_reload();
  }

  public revert(){
    this.clicked = true;
    this.grid.revert_grid();
    this.scene_reload();
  }

  ngOnInit(): void {
    this.width = document.getElementById('render_window').offsetWidth;
    this.height = document.getElementById('render_window').offsetHeight;

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);

    this.initialize_renderer();

    this.trackball = new TrackballControls(this.renderer.getCamera(), this.renderer.getRenderer());
    this.trackball.noRotate = true;
    this.trackball.noZoom = true;
    this.trackball.staticMoving = true;
    this.trackball.panSpeed = 1;
    this.trackball.mouseButtons = {RIGHT: null, MIDDLE: THREE.MOUSE.RIGHT, LEFT: null};
    this.trackball.addEventListener('start', () => console.log("Controls Start Event"))
    console.log(this.trackball);

    this.animate();
  }


}
