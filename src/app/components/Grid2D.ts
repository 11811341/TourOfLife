import {Cell2D} from './Cell2D';

export class Grid2D {

  private coords = [];

  private active = [];

  private to_die = [];
  private to_birth = [];

  private restore = [];

  public add_to_grid(cell: Cell2D) {
    console.log(this.active.length);
    this.active.push(cell);

    if (this.coords[cell.getX()] == null) {
      this.coords[cell.getX()] = [];
    }
    this.coords[cell.getX()][cell.getY()] = cell;

    this.restore = [];
  }

  public remove_from_grid(x: number, y: number){
    for(let c of this.active){
      if(c.getX() == x && c.getY() == y){
        this.active.splice(this.active.indexOf(c), 1);
        this.coords[x][y] = null;
        return;
      }
    }
  }

  public advance() {
    for(let a of this.active) {
      this.check_neighbors(a.getX(), a.getY());
    }

    for(let death of this.to_die){
      this.active.splice(this.active.indexOf(death), 1);
      this.coords[death.getX()][death.getY()] = null;
    }
    this.to_die = [];
    for(let live of this.to_birth){
      this.active.push(live);
      if (this.coords[live.getX()] == null) {
        this.coords[live.getX()] = [];
      }
      this.coords[live.getX()][live.getY()] = live;
    }
    this.to_birth = [];
  }

  public get_cells() {
    return this.active;
  }

  public clear_grid(){
    this.restore = this.active;
    this.active = [];
    this.coords = [];
    this.to_birth = [];
    this.to_die = [];
  }

  public restore_grid(){
    for(let c of this.restore)
      this.add_to_grid(c);
  }

  private check_neighbors(x: number, y: number) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
        const coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
        if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
          this.cell_death(this.coords[coord_x][coord_y]);
        } else {
          this.cell_birth(coord_x, coord_y);
        }
      }
    }
  }


  private cell_death(cell: Cell2D) {
    let counter = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const coord_x = (cell.getX() < 0 && cell.getX() + i == 0) ? 1 : ((cell.getX() > 0 && cell.getX() + i == 0) ? -1 : cell.getX() + i);
        const coord_y = (cell.getY() < 0 && cell.getY() + j == 0) ? 1 : ((cell.getY() > 0 && cell.getY() + j == 0) ? -1 : cell.getY() + j);
        if(this.coords[coord_x] && this.coords[coord_x][coord_y] != null)
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
