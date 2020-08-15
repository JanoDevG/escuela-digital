import { Component } from '@angular/core';

@Component({
  selector: 'AGI-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log("creando Objeto: AppComponent");
  }
}
