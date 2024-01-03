import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchComponent } from './components/search/search.component';
import { CreateCountryComponent } from './components/create-country/create-country.component';

const routes: Routes = [
  {path: '', redirectTo:'/countries',pathMatch:'full'},
  {path: 'countries',component:CountryListComponent},
  {path: 'favorites',component:FavoritesComponent},
  {path: 'search',component:SearchComponent},
  {path: 'create-country',component:CreateCountryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
