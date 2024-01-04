import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Country } from 'src/app/models/country.model';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  favorites:Country[]=[];

  constructor(private favoriteService:FavoriteService){}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites():void{
    this.favorites = this.favoriteService.getFavorites();
    console.log(this.favorites);
  }
  removeFromFavorites(country:Country):void{
    this.favoriteService.removeFavorite(country)
    // this.loadFavorites();//update the list after delete favorite
  }

  getCurrency(country: Country): string | undefined {
    if (country.currencies) {
      const currencyCodes = Object.keys(country.currencies);
  
      if (currencyCodes.length > 0) {
        const currencyCode = currencyCodes[0]; 
        const currency = country.currencies[currencyCode];
        return `${currency.name} (${currency.symbol})`;
      }
    }
    return undefined;
  
  }

}
