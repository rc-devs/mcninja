import { Component, signal } from '@angular/core';
import techniquesArray from '../../data/techniques.array';
import { Technique } from '../../data/techinque.model';

@Component({
  selector: 'app-mastered',
  imports: [],
  templateUrl: './mastered.component.html',
  styleUrl: './mastered.component.css'
})
export class MasteredComponent {
 techniques = signal<Technique[]>(techniquesArray)
}
