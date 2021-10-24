import {Component, OnInit} from '@angular/core';
import * as THREE from 'three';
import {Renderer2D} from '../../Renderer2D';
import {GridHelper, Vector3} from 'three';
import {Cell2D} from '../Cell2D';
import {Grid2D} from '../Grid2D';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';


@Component({
  selector: 'life-2d',
  templateUrl: './TourOfLife.component.html',
  styleUrls: ['./TourOfLife.component.css']
})
export class TourOfLifeComponent implements OnInit {

  title = 'lel';



  ngOnInit(): void {

  }


}
