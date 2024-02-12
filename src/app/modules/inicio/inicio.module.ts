// Módulos

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InicioRoutingModule } from './inicio-routing.module';

// Componentes

import { ReactiveFormsModule } from '@angular/forms';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { InicioPresentacionComponent } from './components/inicio-presentacion/inicio-presentacion.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { InicioComponent } from './inicio.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

@NgModule({
  declarations: [
    InicioComponent,
    InicioPresentacionComponent,
    TrabajosComponent,
    AptitudesComponent,
    ContactameComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
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
