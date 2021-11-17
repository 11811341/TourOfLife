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

  private selected: number = 0;

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
    if(idx==0)
      return;

    this.selected = idx-1;

    // if(this.active_a != null){
    //   this.active_a.closeContext();
    //   this.active_a = null;
    // }
    // if(this.active_b != null){
    //   this.active_b.closeContext();
    //   this.active_b = null;
    // }

    document.getElementById(idx+"lesson0").innerHTML = null;
    document.getElementById(idx+"lesson1").innerHTML = null;
    this.active_a = new Life2DLesson(idx+"lesson0");
    this.active_b = new Life2DLesson(idx+"lesson1");

    this.active_a.setDefaultZoom(lesson_lexicon[this.selected].lessons[0].min_zoom, lesson_lexicon[this.selected].lessons[0].max_zoom, lesson_lexicon[this.selected].lessons[0].def_zoom);
    this.active_b.setDefaultZoom(lesson_lexicon[this.selected].lessons[1].min_zoom, lesson_lexicon[this.selected].lessons[1].max_zoom, lesson_lexicon[this.selected].lessons[1].def_zoom);

    this.active_a.setSpeed(lesson_lexicon[this.selected].lessons[0].speed);
    this.active_b.setSpeed(lesson_lexicon[this.selected].lessons[1].speed);

    if(!lesson_lexicon[this.selected].lessons[0].lesson)
      this.active_a.maxCells(lesson_lexicon[this.selected].lessons[0].placeable + lesson_lexicon[this.selected].lessons[0].cell_layout.length-1);
    if(!lesson_lexicon[this.selected].lessons[1].lesson)
      this.active_b.maxCells(lesson_lexicon[this.selected].lessons[1].placeable + lesson_lexicon[this.selected].lessons[1].cell_layout.length-1);

    this.reset(0);
    this.reset(1);

    if(lesson_lexicon[this.selected].lessons[0].cell_layout.length == 0 && lesson_lexicon[this.selected].lessons[0].lesson) {
      let el = document.getElementById(idx + "lesson0");
      el.parentNode.removeChild(el);
    }
    if(lesson_lexicon[this.selected].lessons[1].cell_layout.length == 0 && lesson_lexicon[this.selected].lessons[1].lesson) {
      let el = document.getElementById(idx + "lesson1");
      el.parentNode.removeChild(el);
    }

  }

  predictionMode(idx:number){
    idx==0?this.active_a.predictionMode():this.active_b.predictionMode();
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
  reset(idx:number){
    if(idx==0){
      if(this.active_a.prediction_mode)
        this.active_a.predictionMode();
      this.active_a.resetCells(lesson_lexicon[this.selected].lessons[0].cell_layout);
      this.active_a.devMode();
      this.active_a.devMode();
      if(this.running_a)
        this.play(idx);
    }else{
      if(this.active_b.prediction_mode)
        this.active_b.predictionMode();
      this.active_b.resetCells(lesson_lexicon[this.selected].lessons[1].cell_layout);
      this.active_b.devMode();
      this.active_b.devMode();
      if(this.running_b)
        this.play(idx);
    }
  }

  export(idx:number){
    //add routing with config passing for edits etc
  }


}

class Life2DLesson extends Life2DContainer{

  setDefaultZoom(min_zoom: number, max_zoom: number, def_zoom: number){
    this.renderer.setZoom(min_zoom, max_zoom, def_zoom);
  }

  resetCells(cells: any[]){
    this.clear();
    for(let c of cells)
      this.generate_cell(c[0], c[1], true);
  }

  // method to close webgl context
  // closeContext(){
  //   this.renderer.closeContext();
  // }

  maxCells(count: number){
    this.grid.maxCells(count);
  }



}
