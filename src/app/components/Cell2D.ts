import * as THREE from 'three';

export class Cell2D{

  private x: number;
  private y: number;

  private readonly cell: THREE.Mesh;

  constructor(size: number, x: number, y: number, color: number = 0xffff00) {
    this.x = x;
    this.y = y;

    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial( {color: color} );
    this.cell = new THREE.Mesh(geometry, material);
    this.cell.position.x = x/10 - Math.sign(x)*size/2;
    this.cell.position.y = y/10 - Math.sign(y)*size/2;
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

}
