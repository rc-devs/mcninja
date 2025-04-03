import { Injectable, signal } from '@angular/core';

import techniquesArray from '../data/techniques.array'; //default export so can be named anything!!
import { Technique } from '../data/models/techinque.model';

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
techniques = signal<Technique[]>(techniquesArray)

getTechniques(){
  return this.techniques;
}


}
