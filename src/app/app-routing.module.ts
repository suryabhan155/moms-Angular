import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'records', loadChildren: () => import('projects/records/src/app/app.module').then(m => m.RecordsSharedModule)
    },
    {
        path: 'revenue', loadChildren: () => import('projects/revenue/src/app/app.module').then(m => m.RevenueSharedModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
