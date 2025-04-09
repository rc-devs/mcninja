import { Component, inject, Input, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';
import { ExerciseService } from '../shared/exercise-service/exercise-service.service';
import { Exercise } from '../data/models/exercise.model';
import { ExercisesComponent } from '../exercises/exercises.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ExercisesComponent, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //service injection
 exercisesService = inject(ExerciseService);

 //default values
 displayEx = false;
 btnText = "Show Exercises"
 userLoggedIn = false;

//user data
 users = signal<User[]>(userData)


 logOutHandler(){
  //surely a way to handle this better, just resetting to default values above
  this.userLoggedIn = false;
  this.users = signal<User[]>(userData)
  this.displayEx = false;
 }

 selectUserHandler(form: any, userId:string, userPassword:string){
  console.log(userId)
  console.log(userPassword)
  //run through array, to get object via userID, then check userPassword for match
  let filteredUser = this.users().filter(u => u.id === userId ) //filter users array to find object with matching id
  this.users.set(filteredUser)

  console.log(filteredUser)
  console.log(this.users())

  console.log(userPassword)

  let test = this.users().filter(p => p.password == userPassword)
  console.log(test)

  if (this.users().filter(p => p.password == userPassword)){
    //if match, display user information (set userlogged in to true)
      this.userLoggedIn = true;
      form.reset()
      console.log(this.users()) ;
  } else {
    //else alert that incorret id or password has been entered
    alert("You have entere an incorrect id or password")
    form.reset()
  }

 }

  //display exercises based on true/false toggle
 displayExercises(){
  if (this.displayEx === false){
      this.btnText = "Hide Exercises"
      this.displayEx =true;
    } else if (this.displayEx === true) {
      this.displayEx = false;
      this.btnText = "Show Exercises"
    }
  };
};
