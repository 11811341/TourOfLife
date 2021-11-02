import {Component, OnInit} from '@angular/core';
import {Life2DContainer} from '../Life2DContainer/Life2DContainer.component';


@Component({
  selector: 'life-2d',
  templateUrl: './Life2D.component.html',
  styleUrls: ['./Life2D.component.css']
})
export class Life2DComponent extends Life2DContainer{

  ngOnInit(): void {
    // window.location.reload();
    super.ngOnInit();
  }


}
