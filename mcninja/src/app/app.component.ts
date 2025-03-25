import { Component } from '@angular/core';
import { DisplayTechniquesComponent } from './display-techniques/display-techniques.component';

@Component({
  selector: 'app-root',
  imports: [DisplayTechniquesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcninja';
}
