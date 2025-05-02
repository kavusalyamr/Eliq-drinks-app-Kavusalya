import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { DrinkDetails } from '../../models/drink.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drink-detail',
  standalone: true,
  templateUrl: './drink-detail.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
})
export class DrinkDetailComponent implements OnInit {
  drink: DrinkDetails | null = null;
  languages = [
    { label: 'English', value: 'strInstructions' },
    { label: 'Spanish', value: 'strInstructionsES' },
    { label: 'German', value: 'strInstructionsDE' },
  ];
  selectedLang = 'strInstructions';

  constructor(
    private route: ActivatedRoute,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.drinkService.getDrinkDetails(id).subscribe((res) => {
        this.drink = res.drinks[0];
        this.extractAvailableLanguages(this.drink);
      });
    }
  }

  extractAvailableLanguages(drink: DrinkDetails) {
    const languageMap: { [key: string]: string } = {
      strInstructions: 'English',
      strInstructionsES: 'Spanish',
      strInstructionsDE: 'German',
      strInstructionsFR: 'French',
      strInstructionsIT: 'Italian',
      strInstructionsZH_HANS: 'Chinese (Simplified)',
      strInstructionsZH_HANT: 'Chinese (Traditional)',
    };

    this.languages = Object.entries(languageMap)
      .filter(([key]) => !!drink[key]) // Only include present instruction fields
      .map(([key, label]) => ({ value: key, label }));

    if (this.languages.length > 0) {
      this.selectedLang = this.languages[0].value;
    }
  }

  get ingredientIndices(): number[] {
    if (!this.drink) return [];
    const indices = [];
    for (let i = 1; i <= 15; i++) {
      if (this.drink[`strIngredient${i}`]) {
        indices.push(i);
      }
    }
    return indices;
  }
}
