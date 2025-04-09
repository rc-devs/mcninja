import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../shared/exercise-service/exercise-service.service';

@Component({
  selector: 'app-add-exercise',
  imports: [FormsModule],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent {
   exercisesService = inject(ExerciseService); //exercises array


  addExerciseHandler(name:string, iteration:any, duration:any, form:any){
    //get array length for new id
    let arrayLength = this.exercisesService.exercisesArray.length + 1 //array length +1 bc it will be pushed to array afterwards
    //add new object to array
   this.exercisesService.exercisesArray.push({
    id: 'e' + arrayLength, //create new id dynamically to avoid NG0955 error
    form: name,
    iteration: iteration,
    duration: duration,})



    console.log(this.exercisesService.exercisesArray) //test log

    //reset form
    form.reset()


  };


}
