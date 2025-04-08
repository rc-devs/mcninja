import { Injectable, signal } from '@angular/core';
import { Exercise } from '../../data/models/exercise.model';
import EXERCISES_DATA from '../../data/exercises.data';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  //exercisesArray = signal<Exercise[]>(EXERCISES_DATA)
  exercisesArray = EXERCISES_DATA

  constructor() { }
}
