import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';



@Component({
  selector: 'tour-of-life',
  templateUrl: './TourOfLife.component.html',
  styleUrls: ['./TourOfLife.component.css']
})
export class TourOfLifeComponent implements OnInit {

  active_a: Life2DLesson;
  active_b: Life2DLesson;

  running_a: boolean = false;
  running_b: boolean = false;

  ngOnInit(): void {
    // const that = this;
    //
    // document.addEventListener("DOMContentLoaded", function() {
    //   console.log("all loaded");
    //   that.onTabClick(0);
    // },false);
  }

  onTabClick(idx){
    document.getElementById(idx+"lesson1").innerHTML = '';
    document.getElementById(idx+"lesson2").innerHTML = '';
    this.active_a = new Life2DLesson(idx+"lesson1");
    this.active_b = new Life2DLesson(idx+"lesson2");

    this.active_a.setDefaultZoom(1, 3);
    this.active_b.setDefaultZoom(1, 3);

  }

}

class Life2DLesson extends Life2DContainer{

  setDefaultZoom(min_zoom: number, max_zoom: number){
    this.renderer.setZoom(min_zoom, max_zoom);
  }

}
