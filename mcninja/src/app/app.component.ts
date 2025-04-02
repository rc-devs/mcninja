import { Component } from '@angular/core';
import { DisplayTechniquesComponent } from './display-techniques/display-techniques.component';
import { MasteredComponent } from './display-techniques/mastered/mastered.component';
import { UnmasteredComponent } from './display-techniques/unmastered/unmastered.component';

@Component({
  selector: 'app-root',
  imports: [DisplayTechniquesComponent, MasteredComponent, UnmasteredComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcninja';
}
