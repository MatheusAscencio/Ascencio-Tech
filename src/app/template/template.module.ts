import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material Modules
import { MatMenuModule } from '@angular/material/menu';
import  { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

//Internal
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplateModule { }
