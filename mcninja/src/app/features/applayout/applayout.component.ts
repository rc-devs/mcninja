import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechniqueCardComponent } from '../../shared/components/technique-card/technique-card.component';

@Component({
  selector: 'app-applayout',
  imports: [TechniqueCardComponent],
  templateUrl: './applayout.component.html',
  styleUrl: './applayout.component.css'
})
export class ApplayoutComponent {

}
