import { Component, signal } from '@angular/core';
import { Exercise } from '../data/models/exercise.model';
import exercisesData from '../data/exercises.data';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';

@Component({
  selector: 'app-exercises',
  imports: [AddExerciseComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
 //exercises = signal<Exercise[]>(exercisesData)
 exercises = signal(exercisesData)
}
