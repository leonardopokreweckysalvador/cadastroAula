import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';

import { AlunoService } from './aluno/aluno.service';
import { CursoService } from './curso/curso.service';
import { AppRoutingModule } from './app-routing.module';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlunoComponent,
    CursoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [AlunoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
