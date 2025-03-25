import { Component } from '@angular/core';
import { techniquesArray } from '../data/techniques.array';

@Component({
  selector: 'app-display-techniques',
  imports: [],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css'
})

techniquesArray();

export class DisplayTechniquesComponent {

}
