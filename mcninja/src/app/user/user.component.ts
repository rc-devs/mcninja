import { Component, inject, Input, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';
import { ExerciseService } from '../shared/exercise-service/exercise-service.service';
import { Exercise } from '../data/models/exercise.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 exercisesService = inject(ExerciseService);

 users = signal<User[]>(userData)
 userEx = signal<Exercise[]>([])

 displayExercises(){
  console.log(this.exercisesService.exercisesArray)
    this.userEx.set(this.exercisesService.exercisesArray)
  return this.exercisesService.exercisesArray;
  };
};
