import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';

import lesson_lexicon from '../../../assets/lesson_lexicon.json';
import {ActivatedRoute} from '@angular/router';
import {camelize} from 'tslint/lib/utils';


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

    this.life2DContainer.clear();

    let img = new Image();
    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    document.getElementById("test").appendChild(canvas);
    console.log((e.currentTarget as HTMLInputElement).files);
    let file = (e.currentTarget as HTMLInputElement).files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    let that = this;
    reader.onload = function(evt){
      if( evt.target.readyState == FileReader.DONE) {
        img.src = evt.target.result as string;
        if(img.width<320||img.height<240){
          img.width = 320;
          img.height = 240;
        }
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0, img.width, img.height);
          let imgData = context.getImageData(0, 0, img.width, img.height);
          for (let i = 0; i < imgData.data.length; i += 4) {
            let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
            // console.log(avg);
            if(avg < 200){
              let x = (i / 4) % img.width;
              let y = Math.floor((i / 4) / img.width);
              // console.log([x,y]);
              // x/=10;
              // y/=10;
              x -= img.width/2;
              y -= img.height/2;
              let pos_x = x < 0 ? Math.trunc(x) - 1 : Math.trunc(x) + 1;
              let pos_y = y < 0 ? Math.trunc(y) - 1 : Math.trunc(y) + 1;
              if(pos_x < 0)
                pos_x += 1;
              if(pos_y < 0)
                pos_y += 1;
              that.life2DContainer.generate_cell(pos_x, -pos_y, false, false);
            }
          }
          that.life2DContainer.scene_reload();
          // context.putImageData(imgData, 0, 0);
        }

      }
    }

  }

}
