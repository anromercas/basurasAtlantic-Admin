import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shred.module';

// Paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
  })
  export class PagesModule { }
