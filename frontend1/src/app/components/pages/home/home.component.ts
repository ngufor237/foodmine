import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodservice: FoodService) {
    this.foodservice = FoodService.getAll();
  }
  ngOnInit(): void {}
}
