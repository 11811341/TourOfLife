import * as THREE from 'three';
import {GridHelper, Vector3} from 'three';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {Renderer2D} from './Renderer2D';
import {Grid2D} from './components/Grid2D';
import {Cell2D} from './components/Cell2D';

export class Life2DContainer{

  private scene = new THREE.Scene();
  private renderer: Renderer2D;

  private helperGrid: GridHelper;
  private clock = new THREE.Clock();
  private delta = 0;
  interval = 0.1;
  running: boolean = false;

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private raycast_plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({color: 0xffff00}));
  private mouse_down: boolean = false;

  private trackball;

  nr_to_die = 0;
  nr_to_birth = 0;

  legend: boolean = false;

  bg_color = new THREE.Color('rgb(0,0,0)');
  cell_color = new THREE.Color('rgb(255,193,7)');

  prediction_mode: boolean = false;

  private sidebar_open: boolean = false;

  private grid = new Grid2D();

  min_survival:number = this.grid.getMinSurvival();
  max_survival:number = this.grid.getMaxSurvival();
  birth:number = this.grid.getBirth();

  hide_grid: boolean = false;

  constructor(parent: string){

    window.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);

    // document.getElementById('controls').addEventListener('mousedown', function(e) {
    //   e.stopPropagation();
    // }, false);
    // document.getElementById('options_drawer').addEventListener('mousedown', function(e) {
    //   e.stopPropagation();
    // }, false);
    // document.getElementById('navigation_drawer').addEventListener('mousedown', function(e) {
    //   e.stopPropagation();
    // }, false);

    const width = document.getElementById(parent).offsetWidth;
    const height = document.getElementById(parent).offsetHeight;


    this.renderer = new Renderer2D(width, height);
    document.getElementById(parent).appendChild(this.renderer.getRenderer());
    let that = this;

    window.addEventListener('resize', function() {
      that.renderer.setSize(document.getElementById("render_window").offsetWidth, document.getElementById("render_window").offsetHeight);
    }, false);

    this.renderer.getRenderer().addEventListener('mousemove', function(e) {
      that.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      that.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (that.mouse_down) {
        if (e.which == 1 && !that.prediction_mode) {
          that.check_addition();
        } else if (e.which == 3 && !that.prediction_mode) {
          that.check_deletion();
        }
      }
    }, false);


    this.renderer.getRenderer().addEventListener('mouseup', function(e) {
      that.mouse_down = false;
    }, false);


    this.raycast_plane.material.colorWrite = false;
    this.renderer.getRenderer().addEventListener('mousedown', function(e) {
      that.mouse_down = true;
      if (e.button == 0 && !that.prediction_mode) {  //perform left click action -> add
        that.check_addition();
      } else if (e.button == 2 && !that.prediction_mode) {  //perform right click action -> delete
        that.check_deletion();
      }

    }, false);


    this.helperGrid = new THREE.GridHelper(100, 1000, new THREE.Color(0x888888));
    // this.helperGrid = new THREE.GridHelper(100, 1000);
    this.helperGrid.rotateOnAxis(new Vector3(1, 0, 0), 90 * Math.PI / 180);
    this.scene.add(this.helperGrid);
    this.scene.add(this.raycast_plane);
    this.scene.background = this.bg_color;

    //Not sure why this needs to be here for the manual camera movement to work???????
    this.trackball = new TrackballControls(this.renderer.getCamera(), this.renderer.getRenderer());

    this.animate();
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
    const cell = new Cell2D(x, y, this.cell_color);
    this.grid.add_to_grid(cell);
    this.scene_reload();
  }

  scene_reload() {
    this.scene = new THREE.Scene();
    if(!this.hide_grid)
      this.scene.add(this.helperGrid);
    this.scene.add(this.raycast_plane);
    this.scene.background = this.bg_color;
    const cells = this.grid.get_cells();
    for (let c of cells) {
      this.scene.add(c.getCell());
    }
  }

  change_speed(e) {
    this.interval = e.value / 10;
  }

  hideGrid(){
    this.hide_grid = !this.hide_grid;
    this.scene_reload();
  }

  getLiveCount(){
    return this.grid.get_cells().length;
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());

    if (this.running) {
      this.delta += this.clock.getDelta();
      if (this.delta > this.interval) {
        this.grid.advance();
        this.nr_to_die = this.grid.getToDie().length;
        this.nr_to_birth = this.grid.getToBirth().length;
        this.scene_reload();
        this.delta = this.delta % this.interval;
      }
    }
    this.renderer.render(this.scene);
  };

  public advance(e) {
    e.stopPropagation();
    if (!this.running) {
      this.grid.advance();
      this.scene_reload();
    }
    this.nr_to_die = this.grid.getToDie().length;
    this.nr_to_birth = this.grid.getToBirth().length;
  }

  public play(e) {
    e.stopPropagation();
    this.running = !this.running;
  }

  public clear(e) {
    e.stopPropagation();
    this.grid.clear_grid();
    this.scene_reload();
  }

  public restore(e) {
    e.stopPropagation();
    this.grid.restore_grid();
    this.scene_reload();
  }

  public revert(e) {
    e.stopPropagation();
    this.grid.revert_grid();
    this.scene_reload();
  }

  setRevert(e) {
    this.grid.setRevert(e.target.value);
  }

  getRevert() {
    return this.grid.getRevert();
  }

  setMinSurvival(e){
    if(this.prediction_mode) {
      this.predictionMode();
      (document.getElementById('prediction_mode') as HTMLInputElement).checked  = false;
    }
    this.min_survival = parseInt(e.target.value);
    this.grid.setMinSurvival(this.min_survival);
  }

  setMaxSurvival(e){
    if(this.prediction_mode) {
      this.predictionMode();
      (document.getElementById('prediction_mode') as HTMLInputElement).checked  = false;
    }
    this.max_survival = parseInt(e.target.value);
    this.grid.setMaxSurvival(this.max_survival);
  }

  setBirth(e){
    if(this.prediction_mode) {
      this.predictionMode();
      // console.log((document.getElementById('prediction_mode').childNodes[0] as HTMLInputElement));
    }
    this.birth = parseInt(e.target.value);
    this.grid.setBirth(this.birth);
  }

  public toggleLegend(){
    this.legend = !this.legend;
  }
  public getLegend(){
    return this.legend;
  }

  getRunning(){
    return this.running;
  }

  sceneColor() {
    let r = document.getElementById('bg_r').innerText;
    let g = document.getElementById('bg_g').innerText;
    let b = document.getElementById('bg_b').innerText;
    this.bg_color = new THREE.Color('rgb(' + r + ',' + g + ',' + b + ')');
    this.scene_reload();
  }

  cellColor() {
    let r = document.getElementById('c_r').innerText;
    let g = document.getElementById('c_g').innerText;
    let b = document.getElementById('c_b').innerText;
    this.cell_color = new THREE.Color('rgb(' + r + ',' + g + ',' + b + ')');
    this.grid.cellColor(this.cell_color);
    this.scene_reload();
  }

  predictionMode() {
    this.bg_color = new THREE.Color(0x000000);
    this.cell_color = new THREE.Color(0xffc107);
    this.grid.cellColor(this.cell_color);
    this.prediction_mode = !this.prediction_mode;
    this.grid.predictionMode();
    this.scene_reload();
  }

  devMode(){
    this.renderer.devMode();
  }

  //PLACEHOLDER FUNCTION TIL I FIND A BETTER FIX FOR CLICK EVENT BLOCKING
  misclick(){
    this.grid.misclick();
    this.scene_reload();
  }

  public disableZoom(){
    this.renderer.disableZoom();
  }


}
