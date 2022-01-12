import { Component } from '@angular/core';
import * as THREE from 'three';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-life';

  constructor(private router: Router) {
  }

  reroute(path: string){
    let p = window.location.href;
    let parts = p.split("/");
    parts[parts.length-1] = path;
    // console.log(parts.join("/"));
    window.location.href = parts.join("/");
  }

}
