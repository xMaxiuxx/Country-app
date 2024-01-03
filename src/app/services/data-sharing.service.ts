import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/country.model';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
private favoriteCountriesSubject = new BehaviorSubject<Country[]>([]);
favoriteCountries$ = this.favoriteCountriesSubject.asObservable();
  updateFavoriteCountries(countries:Country[]):void{
    this.favoriteCountriesSubject.next(countries)
  }
}
