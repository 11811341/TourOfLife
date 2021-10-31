import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'tour-of-life',
  templateUrl: './TourOfLife.component.html',
  styleUrls: ['./TourOfLife.component.css']
})
export class TourOfLifeComponent implements OnInit {


  ngOnInit(): void {
    console.log(document);
    console.log(document.getElementById("lesson00"));
  }

}
