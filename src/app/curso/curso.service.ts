import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos: any[] = [];

  constructor() { }

  salvar(curso: any){
    this.cursos.push(curso);
  }

  getCursos( id: string): any {
    return this.cursos.find(curso => curso.id == id);
  }
  
}
