import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  @Input('title') title: string = "Title"
  @Input('text') text: string = "Some quick example text to build on the card title and make up the bulk of the card's content."
  @Input('link') link: string = "link"

  constructor() { }

  ngOnInit(): void {
  }

}
