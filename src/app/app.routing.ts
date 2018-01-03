import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { IdeaListComponent } from './modules/idea/components/idea-list/idea-list.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'ideas', component: IdeaListComponent }
    ]
  },
];
