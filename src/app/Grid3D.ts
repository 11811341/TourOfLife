import {Cell3D} from './Cell3D';
import * as THREE from 'three';

export class Grid3D {

  private coords = [];

  private active = [];

  private to_die = [];
  private to_birth = [];

  private lonely = [];
  private overcrowded = [];

  private restore = [];

  private revert = [];

  private revert_limit = 20;

  private cell_color = new THREE.Color(0xffc107);

  private prediction_mode: boolean = false;
  private predicted_count: number = 0;

  private min_survival: number = 5;
  private max_survival: number = 7;
  private birth: number = 6;


  public add_to_grid(cell: Cell3D, auto: boolean = false) {

    if (this.coords[cell.getX()] && this.coords[cell.getX()][cell.getY()] && this.coords[cell.getX()][cell.getY()][cell.getZ()] != null) {
      return;
    }

    this.active.push(cell);

    // let config = "";
    // for(let a of this.active)
    //   config+="["+a.getX()+","+a.getY()+"],";
    // console.log(config);

    if (this.coords[cell.getX()] == null) {
      this.coords[cell.getX()] = [];
    }
    if (this.coords[cell.getX()][cell.getY()] == null) {
      this.coords[cell.getX()][cell.getY()] = [];
    }
    this.coords[cell.getX()][cell.getY()][cell.getZ()] = cell;

    // this.restore = [];
  }

  public remove_from_grid(x: number, y: number, z: number) {
    // for (let c of this.active) {
    //   if (c.getX() == x && c.getY() == y) {
    //     this.active.splice(this.active.indexOf(c), 1);
    //     this.coords[x][y] = null;
    //   }
    // }
    if (this.coords[x] && this.coords[x][y] && this.coords[x][y][z]) {
      this.active.splice(this.active.indexOf(this.coords[x][y][z]), 1);
      this.coords[x][y][z] = null;
    }
  }


  public advance() {
    if (this.predicted_count > 0) {
      this.active.splice(this.active.length - this.predicted_count);
    }

    this.to_die = [];
    this.to_birth = [];
    this.lonely = [];
    this.overcrowded = [];

    if (this.revert.length >= this.revert_limit) {
      this.revert = this.revert.slice(1);
    }

    this.revert.push(this.active.slice());

    for (let a of this.active) {
      this.check_neighbors(a.getX(), a.getY(), a.getZ());
    }

    for (let death of this.to_die) {
      this.active.splice(this.active.indexOf(death), 1);
      this.coords[death.getX()][death.getY()][death.getZ()] = null;
    }

    for (let live of this.to_birth) {
      this.active.push(live);
      if (!this.coords[live.getX()]) {
        this.coords[live.getX()] = [];
      }
      if (!this.coords[live.getX()][live.getY()]) {
        this.coords[live.getX()][live.getY()] = [];
      }
      this.coords[live.getX()][live.getY()][live.getZ()] = live;
    }

    if (this.prediction_mode) {
      this.predict();
    }
  }

  private check_neighbors(x: number, y: number, z: number) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          const coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
          const coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
          const coord_z = (z < 0 && z + k == 0) ? 1 : ((z > 0 && z + k == 0) ? -1 : z + k);
          if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
            this.cell_death(this.coords[coord_x][coord_y][coord_z]);
          } else {
            this.cell_birth(coord_x, coord_y, coord_z);
          }
        }
      }
    }
  }

  private cell_death(cell: Cell3D) {
    let counter = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          const coord_x = (cell.getX() < 0 && cell.getX() + i == 0) ? 1 : ((cell.getX() > 0 && cell.getX() + i == 0) ? -1 : cell.getX() + i);
          const coord_y = (cell.getY() < 0 && cell.getY() + j == 0) ? 1 : ((cell.getY() > 0 && cell.getY() + j == 0) ? -1 : cell.getY() + j);
          const coord_z = (cell.getZ() < 0 && cell.getZ() + k == 0) ? 1 : ((cell.getZ() > 0 && cell.getZ() + k == 0) ? -1 : cell.getZ() + k);
          if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
            counter++;
          }
        }
      }
    }
    if (!this.to_die.includes(cell)) {
      if (counter < this.min_survival + 1) {
        this.to_die.push(cell);
        this.lonely.push(cell);
      } else if (counter > this.max_survival + 1) {
        this.to_die.push(cell);
        this.overcrowded.push(cell);
      }
    }
  }

  private cell_birth(x: number, y: number, z: number) {
    var counter = 0;
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        for (var k = -1; k <= 1; k++) {
          var coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
          var coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
          var coord_z = (z < 0 && z + k == 0) ? 1 : ((z > 0 && z + k == 0) ? -1 : z + k);
          if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
            counter++;
          }
        }
      }
    }
    if (counter == this.birth) {
      for (let cell of this.to_birth) {
        if (cell.getX() == x && cell.getY() == y && cell.getZ() == z) {
          return;
        }
      }
      this.to_birth.push(new Cell3D(x, y, z, this.cell_color));
    }
  }

  public clear_grid() {
    this.restore = this.active;
    this.active = [];
    this.coords = [];
    this.to_birth = [];
    this.to_die = [];
    this.revert = [];
    this.lonely = [];
    this.overcrowded = [];
  }

  public restore_grid() {
    for (let c of this.restore) {
      this.add_to_grid(c);
    }
  }

  public revert_grid() {
    if (this.revert.length > 0) {  //checks if any reverse steps exist
      const prev = this.revert.pop();

      //clear everything. computation starts fresh after a revert
      this.active = [];
      this.coords = [];
      this.to_birth = [];
      this.to_die = [];
      this.restore = [];

      //go through last state and add cells to grid
      for (let c of prev) {
        this.add_to_grid(c);
      }
    }
  }

  public setRevert(limit: number) {
    this.revert_limit = limit;
  }

  public getRevert() {
    return this.revert_limit;
  }

  public getToDie() {
    return this.to_die;
  }

  public getToBirth() {
    return this.to_birth;
  }


  public get_cells() {
    return this.active;
  }

  public getMinSurvival(){
    return this.min_survival;
  }

  public setMinSurvival(n: number){
    this.min_survival = n;
  }

  public getMaxSurvival(){
    return this.max_survival;
  }

  public setMaxSurvival(n:number){
    this.max_survival = n;
  }

  public getBirth(){
    return this.birth;
  }

  public setBirth(n:number){
    this.birth = n;
  }

  public cellColor(color: THREE.Color) {
    this.cell_color = color;
    for (let c of this.active) {
      c.setColor(color);
    }
  }

  public predictionMode() {
    this.prediction_mode = !this.prediction_mode;
    if (this.prediction_mode) {
      this.predict();
    } else {
      for (let d of this.to_die) {
        this.active[this.active.indexOf(d)].setColor(this.cell_color);
      }
      if(this.predicted_count>0){
        this.active.splice(this.active.length-this.predicted_count);
      }
      this.predicted_count = 0;
    }
  }

  private predict() {
    this.overcrowded = [];
    this.lonely = [];
    this.to_die = [];
    this.to_birth = [];
    for (let a of this.active) {
      this.check_neighbors(a.getX(), a.getY(), a.getZ());
    }

    for (let l of this.lonely) {
      this.active[this.active.indexOf(l)].setColor(new THREE.Color(0xd81b60)); //pink
    }
    for (let o of this.overcrowded) {
      this.active[this.active.indexOf(o)].setColor(new THREE.Color(0x1e88e5)); //blue
    }
    this.predicted_count = this.to_birth.length;
    for (let b of this.to_birth){
      b.setColor(new THREE.Color(0x004d40), true); //green
      this.active.push(b);
    }
  }

}
