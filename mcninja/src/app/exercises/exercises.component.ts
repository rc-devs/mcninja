import { Component, inject, signal } from '@angular/core';
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

  deleteExerciseHandler(id: string){
    console.log(id)
    //delete object using id to identify position in array
  }
}



