import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'AGI-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  titulo: string = "Lista de cursos";
  cursos: any[] = [
    {id: 1,
    name: 'Angular',
    description: 'Angular desde cero',
    startDate: '14 de Agosto de 2020',
    price: 30,
    rating: 4.8,
    imageUrl: 'assets/images/angular.svg'
    },
    {id: 2,
    name: 'Node',
    description: 'Node desde cero',
    startDate: '14 de Agosto de 2020',
    price: 20,
    rating: 4.6,
    imageUrl: 'assets/images/nodejs.svg'
    },
    {id: 3,
    name: 'React',
    description: 'React desde cero',
    startDate: '14 de Agosto de 2020',
    price: 30,
    rating: 4.7,
    imageUrl: 'assets/images/react.svg'
    },
  ];

  constructor(private router: Router) { 
    
  }
  ngOnInit(): void {
  }

  onEditCurso(curso: any){
    console.log('[Courses] edit', curso);
    //redireccionamos al componente a través de la ruta
    this.router.navigate([`course/${curso.id}`]);
  }

  onDeleteCurso(curso : any){
    console.log('[Courses] edit', curso);
    this.cursos = this.cursos.filter((x: any) =>{
      return x.id !== curso.id;
    });
  }

}
