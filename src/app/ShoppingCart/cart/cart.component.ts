import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartcount = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit() {}
}
