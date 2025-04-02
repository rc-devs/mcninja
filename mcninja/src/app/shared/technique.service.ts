import { Injectable, signal } from '@angular/core';

import { Technique } from '../data/techinque.model';
import techniquesArray from '../data/techniques.array'; //default export so can be named anything!!

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
techniques = signal<Technique[]>(techniquesArray)

getTechniques(){
  return this.techniques;
}


}
