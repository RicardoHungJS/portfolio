import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';

import { InicioComponent } from './inicio.component';
import { InicioPresentacionComponent } from './components/inicio-presentacion/inicio-presentacion.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';

@NgModule({
  declarations: [
    InicioComponent,
    InicioPresentacionComponent,
    TrabajosComponent,
    AptitudesComponent,
  ],
  imports: [CommonModule, InicioRoutingModule],
  exports: [InicioComponent, InicioPresentacionComponent, TrabajosComponent, AptitudesComponent],
})
export class InicioModule {}
