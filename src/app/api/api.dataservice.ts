import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  baseURL = 'https://disease.sh/v3/covid-19/all';
  baseURLCountries = 'https://disease.sh/v3/covid-19/countries';
  baseURLbyCountries = 'https://disease.sh/v3/covid-19/countries/';

  constructor(private http: HttpClient) {}

  public getCovidData() {
    return this.http.get(this.baseURL);
  }
  getCountriesData() {
    return this.http.get(this.baseURLCountries);
  }

  getDataByCountry(country: string) {
    return this.http.get(this.baseURLbyCountries + country);
  }
}
