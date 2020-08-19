import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'AGI-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;

  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();

  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor() { }

  ngOnInit(): void {
  }
  
  editarCurso(curso: Curso) {
    console.log("edit: ", curso);
    this.edit.emit(curso);
  }
  eliminarCurso(curso: Curso) {
    console.log("delete: ", curso);
    this.delete.emit(curso);
  }
}
