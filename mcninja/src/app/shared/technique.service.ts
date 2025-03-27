import { Injectable, signal } from '@angular/core';
import DUMMY_DATA from '../data/techniques.array' //default export so can be named anything!!
import { Technique } from '../data/techinque.template';

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
tech = signal<Technique[]>(DUMMY_DATA)


}
