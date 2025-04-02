import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechniqueService } from '../shared/technique.service';


@Component({
  selector: 'app-display-techniques',
  imports: [FormsModule, ],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css',
  standalone: true,
})
export class DisplayTechniquesComponent {
  techniqueService = inject(TechniqueService) //technique signal for dynamic use in html

  techniques = this.techniqueService.getTechniques()

  masteredArray = signal<[]>([])

  toggleTechnique(id: string){
    //this.techniqueService.update(l => l.filter(t => t.id !== id))
  }


  addToMastered(techniqueObject:{}){ //trying to push object to master array
    console.log(this.masteredArray)
    console.log(techniqueObject)
    //this.masteredArray.push(techniqueObject)
  }

  removeFromMastered(techniqueObject: {}){
    console.log(this.masteredArray)
    console.log(techniqueObject)
  }


}

