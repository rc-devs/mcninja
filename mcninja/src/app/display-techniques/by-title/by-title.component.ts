import { Component, input, signal } from '@angular/core';
import { Technique } from '../../data/models/techinque.model';
import techniquesArray from '../../data/techniques.array';

@Component({
  selector: 'app-by-title',
  imports: [],
  templateUrl: './by-title.component.html',
  styleUrl: './by-title.component.css'
})
export class ByTitleComponent {
  techniques = signal<Technique[]>(techniquesArray)

  addToMastered(){

  }
  removeFromMastered(){

  }
}
