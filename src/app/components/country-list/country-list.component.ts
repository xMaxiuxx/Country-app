import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FavoriteService } from 'src/app/services/favorite.service';
// import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy{

  countries:Country[]=[];
  favorites:Country[]=[];
  private favoritesSubscription: Subscription = new Subscription();

  constructor(
    private countryService:CountryService, 
    private favoriteService:FavoriteService,  
    private dataSharingService: DataSharingService ) {}


  ngOnInit(): void {
    this.loadCountries();
    this.loadFavorites();
  }
  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();// miss memory problem
  }
  
  loadCountries(): void {
    this.countryService.getCountries().subscribe((countries)=>{
      this.countries=countries
    });
  } 
  loadFavorites():void{
    this.favorites =this.favoriteService.getFavorites();
  }


  addToFavorites(country:Country):void{
    if(!this.favoriteService.isFavorite(country)){
      this.favoriteService.addFavorite(country);
    }
    this.loadFavorites();
    console.log("Debug Favorites ")
  }
 
  getCurrency(country: Country): string {
    if (country.currencies) {
      const currencyCodes = Object.keys(country.currencies);
  
      if (currencyCodes.length > 0) {
        const currencyCode = currencyCodes[0]; 
        const currency = country.currencies[currencyCode];
        return `${currency.name} (${currency.symbol})`;
      }
    }
  
    return 'No currency information available';
  }
  openGoogleMaps(country: Country): void {
    if (country.latlng && country.latlng.length === 2) {
      const [latitude, longitude] = country.latlng;
      const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(mapsUrl, '_blank');
    } else {
      console.log('There are no coordinates available for this country.');
    }
  }
  

}
