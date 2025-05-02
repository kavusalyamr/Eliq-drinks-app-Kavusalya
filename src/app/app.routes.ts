import { Routes } from '@angular/router';
import { DrinkDetailComponent } from './components/drink-detail/drink-detail.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';

export const routes: Routes = [
  { path: '', component: DrinkListComponent },
  { path: 'drink/:id', component: DrinkDetailComponent },
];
