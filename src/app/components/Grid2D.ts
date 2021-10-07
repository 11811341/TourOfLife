import {Cell2D} from './Cell2D';

export class Grid2D{

  private pos_x = [];
  private neg_x = [];
  private pos_y = [];
  private neg_y = [];

  private active = [];

  public add_to_grid(cell: Cell2D){
    this.active.push(cell);
    cell.getX()<0?this.neg_x[Math.abs(cell.getX())]=true:this.pos_x[Math.abs(cell.getX())]=true;
    cell.getY()<0?this.neg_y[Math.abs(cell.getY())]=true:this.pos_y[Math.abs(cell.getY())]=true;
  }



}
