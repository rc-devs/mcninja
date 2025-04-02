import { Component, signal } from '@angular/core';
import { Technique } from '../../data/techinque.model';
import techniquesArray from '../../data/techniques.array';

@Component({
  selector: 'app-unmastered',
  imports: [],
  templateUrl: './unmastered.component.html',
  styleUrl: './unmastered.component.css'
})
export class UnmasteredComponent {
  techniques = signal<Technique[]>(techniquesArray)
}
