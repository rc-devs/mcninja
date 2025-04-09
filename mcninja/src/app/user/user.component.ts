import { Component, inject, Input, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';
import { ExerciseService } from '../shared/exercise-service/exercise-service.service';
import { Exercise } from '../data/models/exercise.model';
import { ExercisesComponent } from '../exercises/exercises.component';

@Component({
  selector: 'app-user',
  imports: [ExercisesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //services and boolean variable
 exercisesService = inject(ExerciseService);
 displayEx = false;

  //user data
 users = signal<User[]>(userData)

  //display exercises based on true/false toggle
 displayExercises(){
  if (this.displayEx === false){
      this.displayEx =true;
    } else if (this.displayEx === true) {
      this.displayEx = false;
    }
  };
};
