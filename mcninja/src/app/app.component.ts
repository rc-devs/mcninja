import { Component, OnInit } from '@angular/core';
import { ApplayoutComponent } from './features/applayout/applayout.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TechniqueCardComponent } from './shared/components/technique-card/technique-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mcninja';
 constructor(private router: Router){};

 ngOnInit(): void {
  this.router.navigate(['main'])
  }
};
