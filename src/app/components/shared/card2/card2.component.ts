import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  @Input('title') title: string = "Title";
  @Input('subtitle') subtitle: string = "Card subtitle";
  text: string = "Para melhor entendimento da tecnologia, cheque o site abaixo.";
  @Input('link') link: string = "link";

  constructor() { }

  ngOnInit(): void {
  }

}
