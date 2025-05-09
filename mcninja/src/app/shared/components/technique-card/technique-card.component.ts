import { Component, signal } from '@angular/core';
import { Technique } from '../../models/technique.model';
import DUMMY_TECHNIQUES from '../../dummy-data/dummy-data-techniques'

@Component({
  selector: 'app-technique-card',
  imports: [],
  templateUrl: './technique-card.component.html',
  styleUrl: './technique-card.component.css'
})
export class TechniqueCardComponent {

  techniqueData = signal<Technique[]>(DUMMY_TECHNIQUES)
}
