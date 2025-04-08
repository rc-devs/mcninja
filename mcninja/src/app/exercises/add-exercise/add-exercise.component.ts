import { Component, signal } from '@angular/core';
import exercisesData from '../../data/exercises.data';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../../data/models/exercise.model';

@Component({
  selector: 'app-add-exercise',
  imports: [FormsModule],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent {
  exercises = signal(exercisesData);
  userInput = <Exercise[]>[]

  addExerciseHandler(name:string, iteration:any, duration:any){
    //add new object to exercisesData array
   this.userInput.push({
    id: 'test',
    form: name,
    iteration: iteration,
    duration: duration,})
    console.log(this.userInput) //test log

    //concat arrays
    /* updatedExercise = <Exercise[]> = this.userInput.concat(this.) */


    //reset form

   return this.userInput;


  };


}
