import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../../Life2DContainer';


@Component({
  selector: 'life-2d',
  templateUrl: './Life2D.component.html',
  styleUrls: ['./Life2D.component.css']
})
export class Life2DComponent implements OnInit{

  life2DContainer: Life2DContainer;

  ngOnInit(): void{
    this.life2DContainer = new Life2DContainer("render_window");
  }

}
