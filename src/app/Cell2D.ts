import * as THREE from 'three';

export class Cell2D{

  private readonly x: number;
  private readonly y: number;

  private size: number = 1/10;

  private cell: THREE.Mesh;

  constructor(x: number, y: number, color: THREE.Color) {
    this.x = x;
    this.y = y;

    const geometry = new THREE.PlaneGeometry(this.size, this.size);
    const material = new THREE.MeshBasicMaterial( {color: color} );
    this.cell = new THREE.Mesh(geometry, material);
    this.cell.position.x = x/10 - Math.sign(x)*this.size/2;
    this.cell.position.y = y/10 - Math.sign(y)*this.size/2;
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

  public setColor(color: THREE.Color){
    this.cell.material = new THREE.MeshBasicMaterial({color: color});
  }

}
