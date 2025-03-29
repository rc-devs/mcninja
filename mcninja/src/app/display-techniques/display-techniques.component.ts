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

   //get object via id
   //update boolean to opposite of what it currently is
   //confirm that "proficiency" is update in html
  }

}

