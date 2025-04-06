import { Component, inject, input, signal } from '@angular/core';
import { TechniqueService } from '../../shared/technique.service';
import { Technique } from '../../data/models/techinque.model';
import techniquesArray from '../../data/techniques.array';

@Component({
  selector: 'app-whole-card',
  imports: [],
  templateUrl: './whole-card.component.html',
  styleUrl: './whole-card.component.css'
})
export class WholeCardComponent {
  techniques = signal<Technique[]>(techniquesArray)



  techniqueService = inject(TechniqueService) //technique signal for dynamic use in html



  toggleTechnique(id: string){
    //this.techniqueService.update(l => l.filter(t => t.id !== id))
  }


  addToMastered(techniqueObject:{}){ //trying to push object to master array

    console.log(techniqueObject)
    //this.masteredArray.push(techniqueObject)
  }

  removeFromMastered(techniqueObject: {}){

    console.log(techniqueObject)
  }

}
