import {Cell2D} from './Cell2D';

export class Grid2D {

  private coords = [];

  private active = [];

  private to_die = [];
  private to_birth = [];

  public add_to_grid(cell: Cell2D) {

    this.to_birth.push(cell);
    // this.active.push(cell);

    // if(cell.getX()<0 && cell.getY()<0){
    //   if(this.tl[Math.abs(cell.getX())]==null)
    //     this.tl = [];
    //   this.tl[Math.abs(cell.getX())][Math.abs(cell.getY())] = cell;
    // }else if(cell.getX()>0 && cell.getY()<0){
    //
    // }else if(cell.getX()<0 && cell.getY()>0){
    //
    // }else if(cell.getX()>0 && cell.getY()>0){
    //
    // }

    // this.cell_birth(cell);
  }

  public advance() {
    // console.log("---------------------------------------------------------------------------");

    // console.log(this.to_die);
    // console.log(this.to_birth);

    // console.log("------------");

    // console.log(this.active);
    // console.log(this.to_die);
    for(let death of this.to_die){
      this.active.splice(this.active.indexOf(death), 1);
      this.coords[death.getX()][death.getY()] = null;
    }
    // console.log(this.active);
    this.to_die = [];
    // console.log(this.to_birth);
    for(let live of this.to_birth){
      // console.log(live);
      this.active.push(live);
      if (this.coords[live.getX()] == null) {
        this.coords[live.getX()] = [];
      }
      this.coords[live.getX()][live.getY()] = live;
    }
    let temp = this.to_birth;
    this.to_birth = [];
    // console.log(this.active);

    for(let a of this.active) {
      this.check_neighbors(a.getX(), a.getY());
    }

    // console.log("-----------");
    // console.log(this.active);
    // console.log(this.to_die);
    // console.log(this.to_birth);
  }

  public get_cells() {
    return this.active;
  }

  private check_neighbors(x: number, y: number) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
        const coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
        if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
          // alive.push([coord_x, coord_y]);
          this.cell_death(this.coords[coord_x][coord_y]);
        } else {
          // dead.push([coord_x, coord_y]);
          this.cell_birth(coord_x, coord_y);
        }
      }
    }
  }


  private cell_death(cell: Cell2D) {
    // console.log(this.coords);
    let counter = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const coord_x = (cell.getX() < 0 && cell.getX() + i == 0) ? 1 : ((cell.getX() > 0 && cell.getX() + i == 0) ? -1 : cell.getX() + i);
        const coord_y = (cell.getY() < 0 && cell.getY() + j == 0) ? 1 : ((cell.getY() > 0 && cell.getY() + j == 0) ? -1 : cell.getY() + j);
        // console.log([coord_x, coord_y]);
        if(this.coords[coord_x] && this.coords[coord_x][coord_y] != null)
          // console.log("FOUND ONE");
        if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
          counter++;
        }
      }
    }
    if ((counter < 3 || counter > 4) && !this.to_die.includes(cell)) {
      this.to_die.push(cell);
    }
  }

  private cell_birth(x: number, y: number) {
    // console.log(this.coords);
    var counter = 0;
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        var coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
        var coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
        if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
          counter++;
        }
      }
    }
    if (counter == 3) {
      for (let cell of this.to_birth) {
        if (cell.getX() == x && cell.getY() == y)
          return;
      }
      this.to_birth.push(new Cell2D(x, y));
    }
  }


}
