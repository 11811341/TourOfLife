import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';

import lesson_lexicon from '../../../assets/lesson_lexicon.json';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'life-2d',
  templateUrl: './Life2D.component.html',
  styleUrls: ['./Life2D.component.css']
})
export class Life2DComponent implements OnInit{

  life2DContainer: Life2DContainer;

  constructor(private params:ActivatedRoute) {}

  ngOnInit(): void{
    this.life2DContainer = new Life2DContainer("render_window");
    const url = this.params.snapshot.paramMap.get('config');
    if(url && url.match("\d*;\d*")){
      let chapter = url.split(";")[0];
      let lesson = url.split(";")[1];
      if(lesson_lexicon[parseInt(chapter)] && lesson_lexicon[parseInt(chapter)].lessons[parseInt(lesson)]) {
        let cells = lesson_lexicon[parseInt(chapter)].lessons[parseInt(lesson)].cell_layout;
        for (let c of cells)
          this.life2DContainer.generate_cell(c[0], c[1], true);
        if(lesson_lexicon[parseInt(chapter)].lessons[parseInt(lesson)].repeated.length!=0){
          this.life2DContainer.setRepeating(lesson_lexicon[parseInt(chapter)].lessons[parseInt(lesson)].repeated);
        }
      }
    }
  }

}
