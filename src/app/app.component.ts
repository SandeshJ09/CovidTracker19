import { Component } from '@angular/core';
import { CovidService } from './api/api.dataservice';
import { GlobalModel } from './model/global.model';
import { CountryModel } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CovidTracker19';
  global: boolean;
  country: string;
  countryData: CountryModel; /*not needed anymore...*/
  data: GlobalModel;
  dailydata: any[];
  countries: any[];
  countryAllData: any[];

  constructor(private api: CovidService) {
    this.data = new GlobalModel();
    this.countryData = new CountryModel();
  }
  ngOnInit(): void {
    this.global = true;
    this.getCovidData();
    this.getCountriesData();
    this.getDataByCountry(
      'india'
    ); /*passing dummy country to get the data using parameter from drop down menu this can be updated*/
  }
  /*in this method the data is coming from API request and storing the data into Global model data
   this following values are directly displayed on the screen*/

  getCovidData() {
    this.api.getCovidData().subscribe((res: any[]) => {
      this.data.active = res['active'];
      this.data.recovered = res['recovered'];
      this.data.deaths = res['deaths'];
      this.data.updated = res['updated'];
      this.data.cases = res['cases'];
    });
  }
  /*in this method the unique country names are extracted and stored into countries array
  these countries are displayed in drop down menu*/
  getCountriesData() {
    this.api.getCountriesData().subscribe((res: any[]) => {
      var tempCountries = new Array(); /*reason i created array because API was returning array instead of object*/
      // var withAllData = new Array();

      var i;
      for (i = 0; i < res.length; i++) {
        tempCountries[i] = res[i]['country'];
        // withAllData[res[i]['country']] = res[i];
      }
      this.countries = tempCountries;
      //  this.countryAllData = withAllData;
      // console.log(tempCountries);
      //console.log(this.countryAllData);
    });
  }

  getDataByCountry(country: string) {
    this.api.getDataByCountry(country).subscribe((res: any[]) => {
      this.data.active = res['active'];
      this.data.recovered = res['recovered'];
      this.data.deaths = res['deaths'];
      this.data.updated = res['updated'];
      this.data.cases = res['cases'];
      /*
       this can be ommited
       
      this.countryData.active = res['active'];
      this.countryData.recovered = res['recovered'];
      this.countryData.deaths = res['deaths'];
      this.countryData.updated = res['updated'];
      this.countryData.cases = res['cases'];
*/
    });
  }

  userSelectedCountry(value: string) {
    this.country = value;
    if (value == 'global') {
      this.getCovidData();
      this.global = true;
    } else {
      this.getDataByCountry(value);
      this.global = false;
    }
  }
}
