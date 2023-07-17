// Módulos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { TranslateModule } from '@ngx-translate/core';

// Componentes

import { InicioComponent } from './inicio.component';
import { InicioPresentacionComponent } from './components/inicio-presentacion/inicio-presentacion.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ContactameComponent } from './components/contactame/contactame.component';

@NgModule({
  declarations: [
    InicioComponent,
    InicioPresentacionComponent,
    TrabajosComponent,
    AptitudesComponent,
    ContactameComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    TranslateModule,
  ],
  exports: [
    InicioComponent,
    InicioPresentacionComponent,
    TrabajosComponent,
    AptitudesComponent,
    ContactameComponent,
  ],
})
export class InicioModule {}
