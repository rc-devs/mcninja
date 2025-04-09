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
    console.log(id) //logs id of object
    //delete object using id to identify position in array

    let updatedExercises = this.exercises().filter(e  => e.id !== id);
    console.log(updatedExercises)

  //return new array
    this.exercises.set(updatedExercises)

  }
}



