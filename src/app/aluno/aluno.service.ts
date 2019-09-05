import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunos: any [] = [];

  constructor() { }

  salvar(aluno: any) { 
    this.alunos.push(aluno);
  }

  getAlunos() {
    return this.alunos
  }

}
