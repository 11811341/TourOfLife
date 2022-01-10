import {Component, OnInit} from '@angular/core';

import * as THREE from 'three';
import {Renderer3D} from '../../Renderer3D';
import {GridHelper, Ray, Raycaster, Vector3} from 'three';
import {Cell3D} from '../../Cell3D';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {Grid3D} from '../../Grid3D';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';


@Component({
  selector: 'life-3d',
  templateUrl: './Life3D.component.html',
  styleUrls: ['./Life3D.component.css']
})
export class Life3DComponent implements OnInit {

  private scene = new THREE.Scene();
  protected renderer: Renderer3D;

  private helperGrid: GridHelper;
  private clock = new THREE.Clock();
  private delta = 0;
  interval: number = 0.3;
  running: boolean = false;

  private mouse = new THREE.Vector2();
  private painting: boolean = false;
  private deleting: boolean = false;

  private trackball;

  private grid = new Grid3D();

  private raycaster = new THREE.Raycaster();
  private raycast_plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({color: 0xffff00}));
  private pointer;
  private indicator;

  min_survival: number = this.grid.getMinSurvival();
  max_survival: number = this.grid.getMaxSurvival();
  birth: number = this.grid.getBirth();

  nr_to_die = 0;
  nr_to_birth = 0;

  prediction_mode: boolean = false;

  bg_color = new THREE.Color('rgb(0,0,0)');
  cell_color = new THREE.Color('rgb(255,193,7)');

  legend: boolean = false;

  private edit_mode: boolean = false;

  ngOnInit(): void {
    let parent: string = 'render_window';
    const width = document.getElementById(parent).offsetWidth;
    const height = document.getElementById(parent).offsetHeight;

    this.renderer = new Renderer3D(width, height);
    document.getElementById(parent).appendChild(this.renderer.getRenderer());
    let that = this;

    window.addEventListener('resize', function() {
      that.renderer.setSize(document.getElementById(parent).offsetWidth, document.getElementById(parent).offsetHeight);
    }, false);

    window.addEventListener('click', function() {
      if (that.getLegend()) {
        that.toggleLegend();
      }
    }, false);

    this.renderer.getRenderer().addEventListener('mouseup', function(e) {
      if (e.button == 0) {
        that.painting = false;
      } else if (e.button == 2) {
        that.deleting = false;
      }
    }, false);

    this.raycast_plane.material.colorWrite = false;
    this.raycast_plane.material.transparent = true;
    this.renderer.getRenderer().addEventListener('mousedown', function(e) {

      let set_pred = false;
      if (that.prediction_mode) {
        set_pred = true;
        that.predictionMode();
      }

      if (e.button == 0) {  //perform left click action -> add
        that.painting = true;
        that.deleting = false;
        that.check_addition();
      } else if (e.button == 2) {  //perform right click action -> delete
        that.deleting = true;
        that.painting = false;
        that.check_deletion();
      }

      if (set_pred && !that.prediction_mode) {
        that.predictionMode();
      }

    }, false);

    const geometry = new THREE.IcosahedronGeometry(0.025, 1);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000});
    this.pointer = new THREE.Mesh(geometry, material);
    this.scene.add(this.pointer);

    const indicator_g = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const indicator_m = new THREE.MeshBasicMaterial({color: 0xff0000});
    indicator_m.transparent = true;
    indicator_m.opacity = 0.5;
    this.indicator = new THREE.Mesh(indicator_g, indicator_m);

    const geo = new THREE.EdgesGeometry(this.indicator.geometry);
    const mat = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1});
    let wireframe = new THREE.LineSegments(geo, mat);
    wireframe.renderOrder = 1;
    this.indicator.add(wireframe);


    this.renderer.getRenderer().addEventListener('mousemove', function(e) {
      const rect = that.renderer.getRenderer().getBoundingClientRect();
      that.mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
      that.mouse.y = -((e.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

      that.raycast_plane.quaternion.copy(that.renderer.getCamera().quaternion);

      that.cursorUpdate();
      let set_pred = false;

      if (that.painting || that.deleting) {
        if (that.prediction_mode) {
          set_pred = true;
          that.predictionMode();
        }
        if (that.painting) {
          that.check_addition();
        } else if (that.deleting) {
          that.check_deletion();
        }
      }

      if (set_pred && !that.prediction_mode) {
        that.predictionMode();
      }

    }, false);

    window.addEventListener('keydown', function(e) {
      if (e.key == 'e') {
        that.edit_mode = !that.edit_mode;
        that.trackball.noZoom = that.edit_mode;
      }
    }, false);

    window.addEventListener('wheel', function(e) {
      if (that.edit_mode) {
        var lookAtVector = new THREE.Vector3();
        lookAtVector.x = that.pointer.position.x - that.renderer.getCamera().position.x;
        lookAtVector.y = that.pointer.position.y - that.renderer.getCamera().position.y;
        lookAtVector.z = that.pointer.position.z - that.renderer.getCamera().position.z;
        lookAtVector = lookAtVector.normalize();
        lookAtVector = lookAtVector.multiplyScalar(-1 * (Math.sign(e.deltaY) * 0.05));
        that.raycast_plane.position.x += lookAtVector.x;
        that.raycast_plane.position.y += lookAtVector.y;
        that.raycast_plane.position.z += lookAtVector.z;
      }
      that.cursorUpdate();

      if (that.painting) {
        that.check_addition();
      } else if (that.deleting) {
        that.check_deletion();
      }
    }, false);


    // this.helperGrid = new THREE.GridHelper(100, 1000, new THREE.Color(0x888888));
    // this.helperGrid.position.z = 0.001;
    // this.helperGrid.rotateOnAxis(new Vector3(1, 0, 0), 90 * Math.PI / 180);
    this.trackball = new TrackballControls(this.renderer.getCamera(), this.renderer.getRenderer());
    this.trackball.mouseButtons = {LEFT: THREE.MOUSE.MIDDLE, RIGHT: null, MIDDLE: null};
    this.trackball.keys = [null, null, 'ShiftLeft'];
    this.trackball.rotateSpeed = 2;

    this.scene_reload();
    this.animate();

    // this.renderer.getRenderer().addEventListener('wheel', function(){
    //   that.showGrid();
    // }, false);
  }

  private cursorUpdate() {
    const intersects = this.raycaster.intersectObject(this.raycast_plane);
    if (intersects.length != 0) {
      this.pointer.position.x = intersects[0].point.x;
      this.pointer.position.y = intersects[0].point.y;
      this.pointer.position.z = intersects[0].point.z;
    }

    let preview_pos = this.generateCellPosition();
    this.indicator.position.x = preview_pos.x / 10 - Math.sign(preview_pos.x) * (this.indicator.geometry.parameters.width / 2);
    this.indicator.position.y = preview_pos.y / 10 - Math.sign(preview_pos.y) * (this.indicator.geometry.parameters.height / 2);
    this.indicator.position.z = preview_pos.z / 10 - Math.sign(preview_pos.z) * (this.indicator.geometry.parameters.depth / 2);

  }

  private check_addition() {
    const new_pos = this.generateCellPosition();
    this.generate_cell(new_pos.x, new_pos.y, new_pos.z);
    this.scene_reload();
  }

  private check_deletion() {
    const new_pos = this.generateCellPosition();
    this.grid.remove_from_grid(new_pos.x, new_pos.y, new_pos.z);
    this.scene_reload();
  }

  generate_cell(x: number, y: number, z: number, auto: boolean = false, regenerate = true) {
    const cell = new Cell3D(x, y, z, this.cell_color);
    this.grid.add_to_grid(cell, auto);
    if (regenerate) {
      this.scene_reload();
    }
  }

  private generateCellPosition(): THREE.Vector3 {
    let x = this.pointer.position.x < 0 ? Math.trunc(this.pointer.position.x * 10) - 1 : Math.trunc(this.pointer.position.x * 10) + 1;
    let y = this.pointer.position.y < 0 ? Math.trunc(this.pointer.position.y * 10) - 1 : Math.trunc(this.pointer.position.y * 10) + 1;
    let z = this.pointer.position.z < 0 ? Math.trunc(this.pointer.position.z * 10) - 1 : Math.trunc(this.pointer.position.z * 10) + 1;
    return new Vector3(x, y, z);
  }

  scene_reload() {
    this.scene = new THREE.Scene();
    this.scene.add(this.raycast_plane);

    this.scene.add(this.pointer);
    this.scene.add(this.indicator);
    this.scene.background = this.bg_color;
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


  clear() {
    this.grid.clear_grid();
    this.scene_reload();
  }

  revert() {
    this.grid.revert_grid();
    this.scene_reload();
  }

  play() {
    this.running = !this.running;
  }

  advance() {
    if (!this.running) {
      this.grid.advance();
      this.scene_reload();
    }
    this.nr_to_die = this.grid.getToDie().length;
    this.nr_to_birth = this.grid.getToBirth().length;
  }

  restore() {
    this.grid.restore_grid();
    this.scene_reload();
  }

  setMinSurvival(e) {
    if (this.prediction_mode) {
      this.predictionMode();
      (document.getElementById('prediction_mode') as HTMLInputElement).checked = false;
    }
    this.min_survival = parseInt(e.target.value);
    this.grid.setMinSurvival(this.min_survival);
  }

  setMaxSurvival(e) {
    if (this.prediction_mode) {
      this.predictionMode();
      (document.getElementById('prediction_mode') as HTMLInputElement).checked = false;
    }
    this.max_survival = parseInt(e.target.value);
    this.grid.setMaxSurvival(this.max_survival);
  }

  setBirth(e) {
    if (this.prediction_mode) {
      this.predictionMode();
      (document.getElementById('prediction_mode') as HTMLInputElement).checked = false;
    }
    this.birth = parseInt(e.target.value);
    this.grid.setBirth(this.birth);
  }

  setRevert(e) {
    this.grid.setRevert(e.target.value);
  }

  getRevert() {
    return this.grid.getRevert();
  }

  change_speed(e) {
    this.interval = e.value / 10;
  }

  getLiveCount() {
    return this.grid.get_cells().length;
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

  toggleLegend() {
    this.legend = !this.legend;
  }

  getLegend() {
    return this.legend;
  }

  inputMesh() {
    document.getElementById('file_picker').click();
  }

  async loadMesh(e) {

    let file = URL.createObjectURL((e.currentTarget as HTMLInputElement).files[0]);

    const loader = new OBJLoader();
    const that = this;

    loader.load(
      file,
      function(object) {
        that.clear();
        const box = new THREE.Box3();
        for(let i = 0; i < object.children.length; i++){
          const mesh = (object.children[i] as THREE.Mesh);
          mesh.geometry.computeBoundingBox();
          box.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
          let size = new Vector3();
          box.getSize(size);

          let move_by = new Vector3(-size.x/2, -size.y/2, -size.z/2);
          move_by = move_by.subVectors(move_by, box.min);

          mesh.position.x+=move_by.x;
          mesh.position.y+=move_by.y;
          mesh.position.z+=move_by.z;
          mesh.updateMatrixWorld();

          const step = 0.1;
          let intersects = [];

          for (let x = -size.x / 2; x <= size.x / 2; x += step) {
            for (let z = - size.z / 2; z <= size.z / 2; z += step) {
              let caster = new Raycaster(new Vector3(x, size.y, z), new Vector3(0, -1, 0));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
              caster = new Raycaster(new Vector3(x, - size.y, z), new Vector3(0, 1, 0));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
            }
          }
          for (let x = -size.x / 2; x <= size.x / 2; x += step) {
            for (let y = - size.y / 2; y <= size.y / 2; y += step) {
              let caster = new Raycaster(new Vector3(x, y, size.z), new Vector3(0, 0, -1));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
              caster = new Raycaster(new Vector3(x, y, -size.z), new Vector3(0, 0, 1));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
            }
          }
          for (let z = -size.z / 2; z <= size.z / 2; z += step) {
            for (let y = - size.y / 2; y <= size.y / 2; y += step) {
              let caster = new Raycaster(new Vector3(size.x, y, z), new Vector3(-1, 0, 0));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
              caster = new Raycaster(new Vector3(-size.x, y, z), new Vector3(1, 0, 0));
              intersects = [...intersects, ...caster.intersectObject(mesh)];
            }
          }

          if (intersects.length > 0) {
            for (let i of intersects) {
              let p = i.point;
              let pos_x = p.x < 0 ? Math.trunc(p.x * 10) - 1 : Math.trunc(p.x * 10) + 1;
              let pos_y = p.y < 0 ? Math.trunc(p.y * 10) - 1 : Math.trunc(p.y * 10) + 1;
              let pos_z = p.z < 0 ? Math.trunc(p.z * 10) - 1 : Math.trunc(p.z * 10) + 1;
              that.generate_cell(pos_x, pos_y, pos_z, false, false);
            }
          }

          that.scene_reload();
          // that.scene.add(mesh);
        }


      }
      ,
      function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }
      ,
      function(error) {
        console.log('An error happened');
      }
    );
  }

}
