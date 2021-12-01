import {Cell2D} from './Cell2D';
import * as THREE from 'three';


export class Cell3D{

  private readonly x: number;
  private readonly y: number;
  private readonly z: number;

  private size: number = 0.1;

  private cell: THREE.Mesh;

  constructor(x: number, y: number, z: number, color: THREE.Color) {
    this.x = x;
    this.y = y;
    this.z = z;

    const geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
    const material = new THREE.MeshBasicMaterial( {color: color} );
    this.cell = new THREE.Mesh(geometry, material);
    this.cell.position.x = x/10 - Math.sign(x)*this.size/2;
    this.cell.position.y = y/10 - Math.sign(y)*this.size/2;
    this.cell.position.z = z/10 - Math.sign(z)*this.size/2;
  }

  public getCell(){
    return this.cell;
  }

  public getX(){
    return this.x;
  }

  public getY(){
    return this.y;
  }

  public getZ(){
    return this.z;
  }

  public setColor(color: THREE.Color){
    this.cell.material = new THREE.MeshBasicMaterial({color: color});
  }

}
