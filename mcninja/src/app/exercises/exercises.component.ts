import { Component, signal } from '@angular/core';
import { Exercise } from '../data/models/exercise.model';
import exercisesData from '../data/exercises.data';

@Component({
  selector: 'app-exercises',
  imports: [],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
 exercises = signal<Exercise[]>(exercisesData)
}
