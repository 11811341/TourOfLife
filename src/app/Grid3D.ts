import {Cell3D} from './Cell3D';


export class Grid3D{

  private coords = [];

  private active = [];


  public add_to_grid(cell: Cell3D, auto: boolean = false) {

    if(this.coords[cell.getX()] && this.coords[cell.getX()][cell.getY()] && this.coords[cell.getX()][cell.getY()][cell.getZ()]!=null)
      return;

    this.active.push(cell);

    // let config = "";
    // for(let a of this.active)
    //   config+="["+a.getX()+","+a.getY()+"],";
    // console.log(config);

    if (this.coords[cell.getX()] == null)
      this.coords[cell.getX()] = [];
    if(this.coords[cell.getX()][cell.getY()]==null)
      this.coords[cell.getX()][cell.getY()]=[];
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
    this.active.splice(this.active.indexOf(this.coords[x][y][z]),1);
    this.coords[x][y][z]=null;
  }

  public get_cells() {
    return this.active;
  }

}
