import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'AGI-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;

  constructor() { }

  ngOnInit(): void {
  }
  
  editarCurso(curso: any) {
    console.log("edit: ", curso);
  }
  eliminarCurso(curso: any) {
    console.log("delete: ", curso);
  }
}
