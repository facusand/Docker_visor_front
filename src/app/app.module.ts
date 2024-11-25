import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { NotFound404Component } from './shared/not-found404/not-found404.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

import { AdministradorComponent } from './administrador/administrador.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClimaComponent } from './clima/clima.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { CamarasComponent } from './camaras/camaras.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaintenanceComponent,
    NotFound404Component,
    AdministradorComponent,
    ClimaComponent,
    RedesSocialesComponent,
    CamarasComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    NgImageFullscreenViewModule,
    NgxPaginationModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
