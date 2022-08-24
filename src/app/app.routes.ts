import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StrutureComponent } from './layout/struture/struture.component';
import { SolarComponent } from './pages/solar/solar.component';

const routes: Routes = [
  { path: "", component: StrutureComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "solar", component: SolarComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
