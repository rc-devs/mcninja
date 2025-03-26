import { Component, signal } from '@angular/core';
import { Technique } from '../data/techinque.template';
import techniquesArray from '../data/techniques.array';


@Component({
  selector: 'app-display-techniques',
  imports: [],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css',
  standalone: true,
})
export class DisplayTechniquesComponent {
 techniques = signal<Technique[]>(techniquesArray)
}

