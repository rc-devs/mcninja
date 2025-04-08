import { Component, signal } from '@angular/core';
import exercisesData from '../../data/exercises.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  imports: [FormsModule],
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
   console.log(name)
   console.log(iteration)
   console.log(duration)

    //reset form

  }
}
