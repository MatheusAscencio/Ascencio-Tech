import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { StrutureComponent } from './struture/struture.component';
import { AppRoutingModule } from '../app.routes';
import { SharedModule } from '../components/shared/shared.module';

@NgModule({
  declarations: [
    StrutureComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    StrutureComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
