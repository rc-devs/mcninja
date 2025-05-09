import { Component } from '@angular/core';
import { ApplayoutComponent } from './features/applayout/applayout.component';

@Component({
  selector: 'app-root',
  imports: [ApplayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcninja';
}
