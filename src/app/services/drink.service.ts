import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink, DrinkDetails } from '../models/drink.model';

@Injectable({ providedIn: 'root' })
export class DrinkService {
  constructor(private http: HttpClient) {}

  getDrinks(): Observable<{ drinks: Drink[] }> {
    return this.http.get<{ drinks: Drink[] }>(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    );
  }

  getDrinkDetails(id: string): Observable<{ drinks: DrinkDetails[] }> {
    return this.http.get<{ drinks: DrinkDetails[] }>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
