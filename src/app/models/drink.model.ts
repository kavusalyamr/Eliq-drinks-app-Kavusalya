export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface DrinkDetails extends Drink {
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  [key: string]: any;
}
