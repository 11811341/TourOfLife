import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';



@Component({
  selector: 'tour-of-life',
  templateUrl: './TourOfLife.component.html',
  styleUrls: ['./TourOfLife.component.css']
})
export class TourOfLifeComponent implements OnInit {

  private active_a: Life2DContainer;
  private active_b: Life2DContainer;


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
    this.active_a = new Life2DContainer(idx+"lesson1");
    this.active_b = new Life2DContainer(idx+"lesson2");
  }

}
