import { RouterModule, Routes } from '@angular/router';

// paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ListadoBasurasComponent } from './listado-basuras/listado-basuras.component';
import { ListadoZonasComponent } from './listado-zonas/listado-zonas.component';

import { PagesComponent } from './pages.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { FichaContenedorComponent } from './ficha-contenedor/ficha-contenedor.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas', component: Graficas1Component },
            { path: 'listado-basuras', component: ListadoBasurasComponent },
            { path: 'listado-zonas', component: ListadoZonasComponent },
            { path: 'ficha-contenedor', component: FichaContenedorComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
