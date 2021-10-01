import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { InicioPresentacionComponent } from './components/inicio-presentacion/inicio-presentacion.component';


@NgModule({
  declarations: [InicioComponent, InicioPresentacionComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [InicioComponent, InicioPresentacionComponent]
})
export class InicioModule { }
