import { Component, inject, signal } from '@angular/core';
import { Exercise } from '../data/models/exercise.model';
import exercisesData from '../data/exercises.data';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { ExerciseService } from '../shared/exercise-service/exercise-service.service';

@Component({
  selector: 'app-exercises',
  imports: [AddExerciseComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
  exercisesService = inject(ExerciseService);

  exercises = signal(this.exercisesService.exercisesArray) //display exercise array from service
}



