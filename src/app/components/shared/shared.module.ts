import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    Card2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    Card2Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
