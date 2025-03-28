import { Component, signal } from '@angular/core';
import { Technique } from '../data/techinque.model';
import techniquesArray from '../data/techniques.array';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-display-techniques',
  imports: [FormsModule],
  templateUrl: './display-techniques.component.html',
  styleUrl: './display-techniques.component.css',
  standalone: true,
})
export class DisplayTechniquesComponent {
  techniques = signal<Technique[]>(techniquesArray) //technique signal for dynamic use in html

//toggle mastered for dynamic update of html
 toggleMastered(mastered:boolean){
//changes bool passed as parameter, but does not update the array
  console.log(mastered)

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

