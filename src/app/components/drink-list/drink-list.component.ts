import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { ConfigService } from '../../config/config.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './drink-list.component.html',
})
export class DrinkListComponent implements OnInit {
  config: any;
  drinks: Drink[] = [];
  pagedDrinks: Drink[] = [];
  pageSize: number = 10;
  currentPage: number = 1;

  constructor(
    private configService: ConfigService,
    private drinkService: DrinkService
  ) {}

  ngOnInit() {
    this.config = this.configService.getConfig()?.components?.drinkList;
    this.drinkService.getDrinks().subscribe({
      next: (res) => {
        this.drinks = res.drinks;
        this.updatePagedDrinks();
      },
      error: (err) => {
        console.error('Failed to fetch drinks:', err);
      },
    });
  }

  updatePagedDrinks() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedDrinks = this.drinks.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagedDrinks();
  }
}
