import { Routes } from '@angular/router';

//imported route components
import { TechniqueCardComponent } from './shared/components/technique-card/technique-card.component';
import { ApplayoutComponent } from './features/applayout/applayout.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';
import { MasteredComponent } from './features/techniques/mastered/mastered.component';
import { UnmasteredComponent } from './features/techniques/unmastered/unmastered.component';

export const routes: Routes = [
  { path: 'main', redirectTo: 'applayout', pathMatch: 'full' },
  {
    path: 'applayout',
    component: ApplayoutComponent,
    children: [
      {
        path: 'techniquecard',
        component: TechniqueCardComponent,
      },
      {
        path: 'mastered',
        component: MasteredComponent,
      },
      {
        path: 'unmastered',
        component: UnmasteredComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
