import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodservice: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.seachTerm)
        this.foods = this.foodservice.getAllFoodsBySearchTerm(params.seachTerm);
      else if (params.tag)
        this.foods = this.foodservice.getAllFoodsByTag(params.tag);
      else this.foods = foodservice.getAll();
    });
  }
  ngOnInit(): void {}
}
