import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { PortFolioComponent } from './modules/port-folio/port-folio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'portfolio',
    component: PortFolioComponent,
    loadChildren: () => import('./modules/port-folio/port-folio.module').then(m => m.PortFolioModule)
  },
  {
    path: '**',
    component: InicioComponent,
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: './',
    component: InicioComponent,
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
