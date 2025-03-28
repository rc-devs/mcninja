import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechniqueService } from '../shared/technique.service';


@Component({
  selector: 'app-display-techniques',
  imports: [FormsModule],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css',
  standalone: true,
})
export class DisplayTechniquesComponent {
  technique = inject(TechniqueService) //technique signal for dynamic use in html







//toggle mastered for dynamic update of html
 toggleMastered(masteredValue:boolean, techniqueId:string){
  //probably just use .find(techniqueId)

  let index = 1 + (this.technique.techniques().reduce((accumulator, current, currentIndex) => {
    if (current.id === techniqueId) {
      return currentIndex;
      }
      return accumulator;
    }, -1));

    let strungIndex = index.toString()
    if (techniqueId == 't'+strungIndex){
      console.log('match')
      console.log(techniqueId, 't'+strungIndex)
    } else {
      console.log('no match')
      console.log(techniqueId, 't'+strungIndex)
    }

  }


}



