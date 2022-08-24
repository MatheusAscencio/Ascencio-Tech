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
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplateModule { }
