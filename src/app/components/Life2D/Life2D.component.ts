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
    const that = this;
    window.addEventListener("click", function(e){
      if(that.life2DContainer.getLegend())
        that.life2DContainer.toggleLegend();
    },false);

  }

  inputImage(){
    document.getElementById('file_picker').click();
  }

  loadImage(e){
    var img = new Image();
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    let file = (e.currentTarget as HTMLInputElement).files[0];
    var reader = new FileReader();
    // Read in the image file as a data URL.
    reader.readAsDataURL(file);

    let that = this;
    reader.onload = function(evt){
      if( evt.target.readyState == FileReader.DONE) {
        img.src = evt.target.result as string;
        img.onload = () => {
          context.drawImage(img, 0, 0);
          let imgData = context.getImageData(0, 0, img.width, img.height);
          for (let i = 0; i < imgData.data.length; i += 4) {
            if(imgData.data[i+3]>200){
              let x = (i / 4) % img.width;
              let y = Math.floor((i / 4) / img.width);
              // x/=10;
              // y/=10;
              let pos_x = x < 0 ? Math.trunc(x * 10) - 1 : Math.trunc(x * 10) + 1;
              let pos_y = y < 0 ? Math.trunc(y * 10) - 1 : Math.trunc(y * 10) + 1;
              that.life2DContainer.generate_cell(pos_x, pos_y, false, false);
            }
          }
          that.life2DContainer.scene_reload();
          // context.putImageData(imgData, 0, 0);
        }

      }
    }

  }

}
