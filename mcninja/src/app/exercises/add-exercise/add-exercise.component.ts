import { Component, signal } from '@angular/core';
import exercisesData from '../../data/exercises.data';

@Component({
  selector: 'app-add-exercise',
  imports: [],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent {
  exercises = signal(exercisesData)

  addExerciseHandler(name:string, iteration:any, duration:any){
    //add new object to exercisesData array
    /* this.exercises.push({
      id: 'test test test',
      name:
    }) */

    //reset form

  }
}
