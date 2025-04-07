import { Component } from '@angular/core';
import { DisplayTechniquesComponent } from './display-techniques/display-techniques.component';
import { MasteredComponent } from './display-techniques/mastered/mastered.component';
import { UnmasteredComponent } from './display-techniques/unmastered/unmastered.component';
import { ByTitleComponent } from './display-techniques/by-title/by-title.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [DisplayTechniquesComponent, MasteredComponent, UnmasteredComponent, ByTitleComponent, ExercisesComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcninja';
}
