import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { NotFound404Component } from './shared/not-found404/not-found404.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent},
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'administrador', component: AdministradorComponent},
  { path: '', component: CarouselComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
