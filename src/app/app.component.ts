import { Component } from '@angular/core';

@Component({
  selector: 'AGI-root',
  template: `
  <AGI-sidenav></AGI-sidenav>
  <AGI-dashboard></AGI-dashboard>
  <AGI-sidenav></AGI-sidenav>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escuela-digital';
}
