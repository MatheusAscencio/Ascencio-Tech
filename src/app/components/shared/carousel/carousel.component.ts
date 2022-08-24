import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/interfaces/carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public items: CarouselItem[] = [ { title: "Sites", subtitle: "aaaaaaaaaaaaaaa" },
                                   { title: "Segurança da Informação", subtitle: "bbbbbbbbbbb" },
                                   { title: "Energia Solar", subtitle: "ccccccccccccc" },
                                   { title: "Cloud", subtitle: "ddddddddddddd" } ]
  constructor() { }

  ngOnInit(): void {
  }

}
