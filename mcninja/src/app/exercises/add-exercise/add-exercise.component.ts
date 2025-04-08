import { Component, inject, signal } from '@angular/core';
import exercisesData from '../../data/exercises.data';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../../data/models/exercise.model';
import { ExerciseService } from '../../shared/exercise-service/exercise-service.service';

@Component({
  selector: 'app-add-exercise',
  imports: [FormsModule],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent {
  private exercisesService = inject(ExerciseService);

  userInput = <Exercise[]>[]
  //

  addExerciseHandler(name:string, iteration:any, duration:any){
    //add new object to array
   this.userInput.push({
    id: 'test',
    form: name,
    iteration: iteration,
    duration: duration,})
    console.log(this.userInput) //test log
    console.log(this.exercisesService.exercisesArray) //test log

    //concat arrays
/*
    newArray = <Exercise[]> = this.exercisesService.concat(this.userInput) */



    //reset form

   return this.userInput;


  };


}
