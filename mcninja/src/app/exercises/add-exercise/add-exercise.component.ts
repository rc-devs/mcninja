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
   exercisesService = inject(ExerciseService);

  addExerciseHandler(name:string, iteration:any, duration:any, form:any){
    //add new object to array
   this.exercisesService.exercisesArray.push({
    id: 'test',
    form: name,
    iteration: iteration,
    duration: duration,})

    console.log(this.exercisesService.exercisesArray) //test log

    //reset form
    form.reset()


  };


}
