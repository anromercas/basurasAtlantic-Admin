import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
