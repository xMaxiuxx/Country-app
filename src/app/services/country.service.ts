import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl='https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/all`);

  };
  getCountriesByName():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`);
  }
  getCurrency(currencyCode:string):Observable<Country[]>{
    const url = `${this.apiUrl}/currency/${currencyCode}`;

    return this.http.get<Country[]>(url)

}
}
