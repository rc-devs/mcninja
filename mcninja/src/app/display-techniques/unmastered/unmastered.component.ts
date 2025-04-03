import { Component, signal } from '@angular/core';

import techniquesArray from '../../data/techniques.array';
import { Technique } from '../../data/models/techinque.model';

@Component({
  selector: 'app-unmastered',
  imports: [],
  templateUrl: './unmastered.component.html',
  styleUrl: './unmastered.component.css'
})
export class UnmasteredComponent {
  techniques = signal<Technique[]>(techniquesArray)
}
