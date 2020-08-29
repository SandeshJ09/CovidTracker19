export class CountryModel {
  public updated: Date;
  public country: string;
  public cases: Number;
  public todayCases: Number;
  public deaths: Number;
  public todayDeaths: Number;
  public recovered: Number;
  public todayRecovered: Number;
  public active: Number;
  public critical: Number;
  public casesPerOneMillion: Number;
  public deathsPerOneMillion: Number;
  public tests: Number;
  public testsPerOneMillion: Number;
  public population: Number;
  public oneCasePerPeople: Number;
  public oneDeathPerPeople: Number;
  public oneTestPerPeople: Number;
  public activePerOneMillion: Number;
  public recoveredPerOneMillion: Number;
  public criticalPerOneMillion: Number;
  public affectedCountries: Number;
}
