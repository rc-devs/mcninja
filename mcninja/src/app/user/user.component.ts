import { Component, inject, signal } from '@angular/core';
import { User } from '../data/models/user.model';
import userData from '../data/user.data';
import { ExerciseService } from '../shared/exercise-service/exercise-service.service';
import { ExercisesComponent } from '../exercises/exercises.component';
import { FormsModule } from '@angular/forms';
import { WholeCardComponent } from '../display-techniques/whole-card/whole-card.component';
import { MasteredComponent } from '../display-techniques/mastered/mastered.component';
import { UnmasteredComponent } from '../display-techniques/unmastered/unmastered.component';


@Component({
  selector: 'app-user',
  imports: [ FormsModule, UnmasteredComponent, MasteredComponent, WholeCardComponent, ExercisesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //service injection
 exercisesService = inject(ExerciseService);

 //default values (i know this sucks i just need it to work)
 userLoggedIn = false;

 //boolean to check if component should be displayed
 displayTech = false;
 displayEx = false;
 displayMasteredComp = false;
 displayUnMasteredComp = false;

 //button text for toggle update
 btnText = "Show Exercises"
 techBtnText = "Show All Techniques"
 masteredBtnText = "Show My Mastered Techniques"
 unMasteredBtnText = "Show Techniques To Be Mastered"

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
  let filteredUser = this.users().filter(u => u.id === userId && u.password === userPassword) //filter users array to find object with matching id
  this.users.set(filteredUser)

  console.log(filteredUser)
  console.log(this.users())

  console.log(userPassword)

  if (this.users().filter(p => p.password == userPassword && p.id === userId)){
    //if match, display user information (set userlogged in to true)
      this.userLoggedIn = true;
      form.reset()
      console.log(this.users()) ;
  } else if (this.users().filter(p => p.password !== userPassword || p.id !== userId)) {
    //else alert that incorret id or password has been entered
    alert("You have entere an incorrect id or password");
    form.reset()
  }

 }

 displayMasteredComponent(){
  if (this.displayMasteredComp === false){
    this.masteredBtnText = "Hide My Mastered Techniques"
    this.displayMasteredComp =true;
  } else if (this.displayMasteredComp === true) {
    this.masteredBtnText = "Show My Mastered Techniques"
    this.displayMasteredComp = false;
  }
};

displayUnMasteredComponent(){
  if (this.displayUnMasteredComp === false){
    this.unMasteredBtnText = "Hide My Mastered Techniques"
    this.displayUnMasteredComp =true;
  } else if (this.displayUnMasteredComp === true) {
    this.unMasteredBtnText = "Show My Mastered Techniques"
    this.displayUnMasteredComp = false;
  }
};

  //display exercises based on true/false toggle
 displayExercises(){
  if (this.displayEx === false){
      this.btnText = "Hide Exercises"
      this.displayEx =true;
    } else if (this.displayEx === true) {
      this.btnText = "Show Exercises"
      this.displayEx = false;
    }
  };

 displayTechniques(){
  if (this.displayTech === false){
      this.techBtnText = "Hide Techniques"
      this.displayTech =true;
    } else if (this.displayTech === true) {
      this.displayTech = false;
      this.techBtnText = "Show Techniques"
    }
    };
};
