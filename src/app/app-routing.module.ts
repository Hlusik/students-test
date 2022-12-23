import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../app/dashboardModule/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'students',
        loadChildren: () => import('../app/studentsModule/students.module').then(m => m.StudentsModule)
    },
    // {
    //   // The router will match this route if the URL requested
    //   // doesn't match any paths for routes defined in our configuration
    //   path: '**',
    //   component: StudentsListComponent,
    //   title: 'Page Not Found'
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
