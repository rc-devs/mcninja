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
 toggleMastered(mastered:boolean, techniqueId:string){
//changes bool passed as parameter, but does not update the array
  console.log(mastered)
  console.log(techniqueId)

  if(mastered) {
    mastered = false;
    console.log(mastered)
    return mastered = false;
  } else if (!mastered){
    mastered= true;
    console.log(mastered)
    return mastered= true;
  }
  return mastered;
 }

}

