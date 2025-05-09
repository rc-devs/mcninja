import { Routes } from '@angular/router';

//imported route components
import { TechniqueCardComponent } from './shared/components/technique-card/technique-card.component';
import { ApplayoutComponent } from './features/applayout/applayout.component';

export const routes: Routes = [

  {path: '', redirectTo: 'applayout', pathMatch: 'full'},
  {
    path: 'applayout',
    component: ApplayoutComponent,
    children: [
      {
        path: 'technique-card',
        component: TechniqueCardComponent,
      },
    ],
  },
];
