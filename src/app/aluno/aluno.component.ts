import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {

  private aluno: any; //= { nome: null, telefone: null, email: null };
  alunoLista: string[] = [];


  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.aluno = new Object();
  }

  onSubmit(formularioAluno: NgForm) {
    if (formularioAluno.valid) {
      
      this.aluno.id = Math.random().toString(36).substring(2, 15)
                    + Math.random().toString(36).substring(2, 15);

      this.service.salvar(this.aluno);
      this.alunoLista = this.service.getAlunos();
      this.aluno = new Object();

    }
  }

  getAlunos(){
    
    
    return this.service.getAlunos();
    
  }

}
