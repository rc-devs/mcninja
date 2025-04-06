import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechniqueService } from '../shared/technique.service';
import { ByTitleComponent } from './by-title/by-title.component';
import { WholeCardComponent } from './whole-card/whole-card.component';
import { Technique } from '../data/models/techinque.model';
import techniquesArray from '../data/techniques.array';
import { MasteredComponent } from './mastered/mastered.component';
import { UnmasteredComponent } from './unmastered/unmastered.component';


@Component({
  selector: 'app-display-techniques',
  imports: [FormsModule, ByTitleComponent, WholeCardComponent, MasteredComponent, UnmasteredComponent],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css',
  standalone: true,
})
export class DisplayTechniquesComponent {
  techniqueService = inject(TechniqueService) //technique signal for dynamic use in html
  techniques = signal<Technique[]>(techniquesArray)


}

