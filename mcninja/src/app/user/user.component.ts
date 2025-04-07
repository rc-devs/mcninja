import { Component, Input, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';
import { ExercisesComponent } from '../exercises/exercises.component';

@Component({
  selector: 'app-user',
  imports: [ExercisesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 users = signal<User[]>(userData)

 onClick(exercises:any ){
  console.log(exercises)
  console.log(typeof exercises)
 }
}
