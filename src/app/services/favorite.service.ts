import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: Country[]=[]
  constructor(private dataSharingService:DataSharingService){
    this.dataSharingService.favoriteCountries$.subscribe((countries)=>{
      this.favorites = countries;
    })
  }

  getFavorites():Country[] {
    return this.favorites
  }
  addFavorite(country: Country): void {
    if (!this.isFavorite(country)) {
      this.favorites.push(country);
      this.dataSharingService.updateFavoriteCountries(this.favorites)
    }
  }

  removeFavorite(country:Country):void{
    const index = this.favorites.findIndex((c)=> c.name.common === country.name.common);
    if(index !== -1){
      this.favorites.splice(index, 1)
      this.dataSharingService.updateFavoriteCountries(this.favorites)
    }
  }
  isFavorite(country:Country):boolean{
    return this.favorites.some((c)=> c.name.common === country.name.common)
  }














}
