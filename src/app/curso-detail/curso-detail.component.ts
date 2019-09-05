import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})

export class CursoDetailComponent implements OnInit {
  curso: any = new Object();
  constructor(private route: ActivatedRoute, private cursoService: CursoService) { }

  ngOnInit() {
    this.getCurso();
  }

  getCurso(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.curso = this.cursoService.getCursos(id); 
  }
}
