import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shred.module';
import { FormsModule } from '@angular/forms';

// ng2chart
import { ChartsModule } from 'ng2-charts';

// Paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoBarrasComponent } from '../components/grafico-barras/grafico-barras.component';
import { CommonModule } from '@angular/common';
import { GraficoDonasComponent } from '../components/grafico-donas/grafico-donas.component';


@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        GraficoBarrasComponent,
        GraficoDonasComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        ChartsModule,
        CommonModule,
        FormsModule,
        PAGES_ROUTES
    ]
  })
  export class PagesModule { }
