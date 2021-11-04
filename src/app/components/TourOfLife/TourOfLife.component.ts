import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';

import lesson_lexicon from '../../../assets/lesson_lexicon.json';



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

  lessons = lesson_lexicon;

  ngOnInit(): void {
    // const that = this;
    //
    // document.addEventListener("DOMContentLoaded", function() {
    //   console.log("all loaded");
    //   that.onTabClick(0);
    // },false);


    this.lessonSetup();

  }

  private lessonSetup(){
    const parent = document.getElementById("tab_group");
    // console.log(parent.innerHTML);
    // parent.innerHTML +=
    //   '<mat-tab label="GoL: Basics 01">' +
    //   'test' +
    //   '</mat-tab>';
    // console.log(parent.innerHTML);

  }

  onTabClick(idx:number){
    document.getElementById(idx+"lesson0").innerHTML = '';
    document.getElementById(idx+"lesson1").innerHTML = '';
    this.active_a = new Life2DLesson(idx+"lesson0");
    this.active_b = new Life2DLesson(idx+"lesson1");



    this.active_a.setDefaultZoom(1, 3);
    this.active_b.setDefaultZoom(1, 3);

  }

  clear(idx:number){
    idx==0?this.active_a.clear():this.active_b.clear();
  }
  revert(idx:number){
    idx==0?this.active_a.revert():this.active_b.revert();
  }
  play(idx:number){
    console.log(idx);
    if(idx==0){
      this.active_a.play();
      this.running_a = !this.running_a;
    }else{
      this.active_b.play();
      this.running_b = !this.running_b;
    }
  }
  advance(idx:number){
    idx==0?this.active_a.advance():this.active_b.advance();
  }
  restore(idx:number){
    idx==0?this.active_a.restore():this.active_b.restore();
  }

}

class Life2DLesson extends Life2DContainer{

  setDefaultZoom(min_zoom: number, max_zoom: number){
    this.renderer.setZoom(min_zoom, max_zoom);
  }

}
